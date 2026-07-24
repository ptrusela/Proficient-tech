import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, company, email, phone, category, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
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

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
