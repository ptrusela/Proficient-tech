import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  return NextResponse.json({ keySet: !!process.env["RESEND_API_KEY"] });
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env["RESEND_API_KEY"]);
    const { name, company, email, phone, category, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error: sendError } = await resend.emails.send({
      from: "Proficient Contact Form <contact@proficient.tech>",
      to: "info@proficient.tech",
      replyTo: email,
      subject: `New inquiry${company ? ` — ${company}` : ""}: ${category || "General"}`,
      text: [
        `Name: ${name}`,
        `Company: ${company || "—"}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Category: ${category || "—"}`,
        "",
        message,
      ].join("\n"),
    });

    if (sendError) {
      return NextResponse.json({ error: sendError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
