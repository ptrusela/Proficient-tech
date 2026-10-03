import { NextResponse } from "next/server";
import { Resend } from "resend";
import { putStatement, signedStatementUrl } from "@/lib/r2";
import { createAuditInClose } from "@/lib/close";

const MAX_BYTES = 4 * 1024 * 1024; // 4 MB — Vercel function body limit is ~4.5 MB

async function verifyTurnstile(token: string | null): Promise<boolean> {
  if (!token) return false;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // skip in dev if not configured
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v1/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

export async function POST(req: Request) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot
  if (formData.get("website_url")) {
    return NextResponse.json({ ok: true });
  }

  // Turnstile
  const turnstileToken = formData.get("cf-turnstile-response") as string | null;
  const valid = await verifyTurnstile(turnstileToken);
  if (!valid) {
    return NextResponse.json({ error: "Bot verification failed. Please try again." }, { status: 400 });
  }

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const company = (formData.get("company") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const website = (formData.get("website") as string | null)?.trim() ?? "";
  const processor = (formData.get("processor") as string | null)?.trim() ?? "";
  const volume = (formData.get("volume") as string | null)?.trim() ?? "";
  const channelMix = (formData.get("channelMix") as string | null)?.trim() ?? "";

  if (!name || !company || !email) {
    return NextResponse.json({ error: "Name, company, and email are required." }, { status: 400 });
  }

  const file = formData.get("file");
  if (!file || !(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "A statement file is required." }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File exceeds the 4 MB limit." }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buf = Buffer.from(arrayBuffer);

  // Validate file type by magic bytes
  const isPdf = buf.slice(0, 5).toString("ascii") === "%PDF-";
  const isCsv = !buf.includes(0); // no null bytes → safe to treat as text/CSV
  const contentType = file.type === "text/csv" || file.name.toLowerCase().endsWith(".csv")
    ? "text/csv"
    : "application/pdf";

  if (!isPdf && !isCsv) {
    return NextResponse.json({ error: "Only PDF and CSV files are accepted." }, { status: 400 });
  }

  const ext = contentType === "text/csv" ? "csv" : "pdf";
  const ts = Date.now();
  const safeCompany = company.replace(/[^a-z0-9]/gi, "-").toLowerCase().slice(0, 40);
  const key = `statements/${ts}-${safeCompany}.${ext}`;

  // Upload to R2
  let fileUrl: string;
  try {
    await putStatement(key, buf, contentType);
    fileUrl = await signedStatementUrl(key);
  } catch (err) {
    console.error("[audit] R2 upload failed:", err);
    return NextResponse.json({ error: "File storage error. Please try again." }, { status: 500 });
  }

  // Close CRM — best-effort, never block the response
  let closeLeadId = "";
  try {
    const { leadId } = await createAuditInClose(
      { name, company, email, phone, website, processor, channelMix, volume },
      key,
      fileUrl,
    );
    closeLeadId = leadId;
  } catch (err) {
    console.error("[audit] Close CRM sync failed:", err);
  }

  // Resend alert email — always send even if Close failed
  const resend = new Resend(process.env.RESEND_API_KEY);
  const alertTo = process.env.AUDIT_ALERT_EMAIL ?? "info@proficient.tech";
  const { error: sendError } = await resend.emails.send({
    from: "Proficient Contact Form <contact@proficient.tech>",
    to: alertTo,
    subject: `New statement audit: ${company}`,
    html: [
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Company:</strong> ${company}</p>`,
      `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>`,
      phone ? `<p><strong>Phone:</strong> ${phone}</p>` : "",
      website ? `<p><strong>Website:</strong> ${website}</p>` : "",
      processor ? `<p><strong>Current processor:</strong> ${processor}</p>` : "",
      volume ? `<p><strong>Monthly volume:</strong> ${volume}</p>` : "",
      channelMix ? `<p><strong>Channel mix:</strong> ${channelMix}</p>` : "",
      `<p><strong>Statement file (link expires 7 days):</strong><br><a href="${fileUrl}">${fileUrl}</a></p>`,
      closeLeadId ? `<p><strong>Close CRM lead:</strong> ${closeLeadId}</p>` : "<p><em>Close CRM sync failed — see server logs.</em></p>",
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (sendError) {
    console.error("[audit] Resend failed:", sendError);
    return NextResponse.json({ error: sendError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
