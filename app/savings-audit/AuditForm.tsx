"use client";

import { useEffect, useRef, useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export function AuditForm() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check — if the hidden field has a value, silently succeed
    if (data.get("website_url")) {
      setState("success");
      return;
    }

    try {
      const res = await fetch("/api/audit", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json?.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      setState("success");
      formRef.current?.reset();
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="audit-success">
        <p className="audit-success-title">Statement received.</p>
        <p>
          A Proficient advisor will review your file and follow up within one business day with an
          estimated savings analysis.
        </p>
      </div>
    );
  }

  return (
    <form className="cf audit-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website_url">Website</label>
        <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="audit-name">Full name *</label>
          <input
            id="audit-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Jane Smith"
          />
        </div>
        <div className="cf-field">
          <label htmlFor="audit-company">Business name *</label>
          <input
            id="audit-company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            placeholder="Acme Corp"
          />
        </div>
      </div>

      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="audit-email">Email address *</label>
          <input
            id="audit-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="jane@example.com"
          />
        </div>
        <div className="cf-field">
          <label htmlFor="audit-phone">Phone number</label>
          <input
            id="audit-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(213) 555-0100"
          />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="audit-website">Business website</label>
        <input
          id="audit-website"
          name="website"
          type="url"
          autoComplete="url"
          placeholder="https://example.com"
        />
      </div>

      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="audit-processor">Current processor</label>
          <input
            id="audit-processor"
            name="processor"
            type="text"
            placeholder="e.g. Stripe, Square, Chase"
          />
        </div>
        <div className="cf-field">
          <label htmlFor="audit-volume">Approx. monthly volume</label>
          <input
            id="audit-volume"
            name="volume"
            type="text"
            placeholder="e.g. $50,000"
          />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="audit-channel">Channel mix</label>
        <input
          id="audit-channel"
          name="channelMix"
          type="text"
          placeholder="e.g. 80% card-present, 20% e-commerce"
        />
      </div>

      <div className="cf-field">
        <label htmlFor="audit-file">Processing statement (PDF or CSV, max 4 MB) *</label>
        <input
          id="audit-file"
          name="file"
          type="file"
          accept=".pdf,.csv,application/pdf,text/csv"
          required
          className="cf-file-input"
        />
        <span className="cf-hint">Your file is stored securely and used only for your audit.</span>
      </div>

      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-theme="dark"
      />

      {state === "error" && <p className="cf-error">{errorMsg}</p>}

      <button
        type="submit"
        className="btn btn-primary cf-submit"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending…" : "Request my free audit →"}
      </button>
    </form>
  );
}
