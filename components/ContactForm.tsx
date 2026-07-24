"use client";
import { useState } from "react";

const CATEGORIES = [
  "High-risk merchant account",
  "Payment gateway / processing",
  "Medusa.js integration",
  "Business capital / lending",
  "ISO / agent partnership",
  "White-label processing",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      category: fd.get("category"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success">
        <span className="eyebrow">Message received</span>
        <p className="lead">
          We&rsquo;ll review your inquiry and be in touch at the email you provided — usually within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-name">Name *</label>
          <input id="cf-name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="cf-field">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" name="company" type="text" placeholder="Company or DBA" />
        </div>
      </div>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="cf-field">
          <label htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="(555) 000-0000" />
        </div>
      </div>
      <div className="cf-field">
        <label htmlFor="cf-category">What can we help you with?</label>
        <select id="cf-category" name="category" defaultValue="">
          <option value="" disabled>Select a category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="cf-field">
        <label htmlFor="cf-message">Tell us more *</label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          placeholder="Describe your situation — category, current processor, what happened, what you need."
          required
        />
      </div>
      {status === "error" && <p className="cf-error">{error}</p>}
      <button className="btn btn-primary cf-submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send inquiry"}
        {status !== "loading" && <span className="arr">→</span>}
      </button>
    </form>
  );
}
