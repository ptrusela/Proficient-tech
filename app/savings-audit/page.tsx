import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/Starfield";
import { RevealObserver } from "@/components/RevealObserver";
import { AuditForm } from "./AuditForm";

export const metadata: Metadata = {
  title: "Free Statement Audit — Proficient",
  description:
    "Upload your current processing statement. We'll identify potential savings and come back with a clear, no-obligation analysis.",
  alternates: { canonical: "https://proficient.tech/savings-audit" },
};

export default function SavingsAuditPage() {
  return (
    <>
      <RevealObserver />
      <NavBar />

      <section className="hero audit-hero" id="top">
        <Starfield id="stars-audit" count={160} opacity={0.7} />
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Free Statement Audit</span>
            <h1>
              Find out what your processing statement{" "}
              <em>is actually costing you.</em>
            </h1>
            <p className="lead" style={{ maxWidth: "68ch", marginTop: "24px" }}>
              Upload your most recent merchant statement. We&rsquo;ll review your effective rate,
              fee structure, and interchange optimization — and come back with an estimated savings
              analysis at no charge and no obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="block audit-form-section" id="audit">
        <div className="wrap audit-wrap">
          <div className="audit-intro reveal">
            <h2>Submit your statement</h2>
            <p>
              Accepted formats: PDF or CSV, up to 4 MB. Your file is stored securely and used only
              to prepare your analysis. We will never share it or use it for any other purpose.
            </p>
            <ul className="audit-checklist">
              <li>Estimated savings are indicative — not a guarantee of any specific rate.</li>
              <li>A Proficient advisor will follow up within one business day.</li>
              <li>No contracts, no commitments.</li>
            </ul>
          </div>
          <div className="audit-form-wrap reveal">
            <AuditForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
