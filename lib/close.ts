const BASE = "https://api.close.com/api/v1";

function authHeader() {
  return "Basic " + Buffer.from(`${process.env.CLOSE_API_KEY}:`).toString("base64");
}

async function closePost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { Authorization: authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Close ${path} ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

export type AuditSubmission = {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  processor: string;
  channelMix: string;
  volume: string;
};

function normalizeUrl(raw: string) {
  if (!raw) return undefined;
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withScheme).toString();
  } catch {
    return undefined;
  }
}

export async function createAuditInClose(s: AuditSubmission, fileKey: string, fileUrl: string) {
  const lead = await closePost<{ id: string }>("/lead/", {
    name: s.company,
    url: normalizeUrl(s.website),
    status_id: process.env.CLOSE_LEAD_STATUS_ID || undefined,
    description: "Source: proficient.tech statement audit",
    contacts: [
      {
        name: s.name,
        emails: [{ email: s.email, type: "office" }],
        phones: s.phone ? [{ phone: s.phone, type: "office" }] : [],
      },
    ],
  });

  await closePost("/opportunity/", {
    lead_id: lead.id,
    status_id: process.env.CLOSE_OPP_STATUS_STATEMENT_RECEIVED,
    note: `Statement audit · ${s.processor} · ${s.channelMix} · ${s.volume}`,
  });

  await closePost("/activity/note/", {
    lead_id: lead.id,
    note: [
      "Statement audit submission",
      `Processor: ${s.processor}`,
      `Channel mix: ${s.channelMix}`,
      `Monthly volume: ${s.volume}`,
      `File key: ${fileKey}`,
      `Download (expires in 7 days): ${fileUrl}`,
    ].join("\n"),
  });

  return { leadId: lead.id };
}
