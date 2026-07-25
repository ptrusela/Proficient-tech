import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { Starfield } from "@/components/Starfield";

export const metadata: Metadata = {
  title: "Medusa.js Payments + Underwriting — Proficient",
  description:
    "Proficient builds direct payment integrations for Medusa.js and headless commerce platforms — with in-house underwriting, merchant onboarding, and AI-driven development for every business type.",
  alternates: { canonical: "https://proficient.tech/medusa" },
  openGraph: {
    title: "Medusa.js Payments + Underwriting — Proficient",
    description:
      "Direct payment integration, merchant underwriting, and custom AI development for Medusa.js and emerging headless platforms.",
    url: "https://proficient.tech/medusa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medusa.js Payments + Underwriting — Proficient",
    description:
      "Direct payment integration, merchant underwriting, and custom AI development for Medusa.js and emerging headless platforms.",
  },
};

const capabilities = [
  {
    idx: "01",
    title: "Direct Payment Provider",
    body: "A native Medusa.js payment provider plugin that routes transactions straight to Proficient's processing infrastructure. Installs via npm and handles the full transaction lifecycle — authorization, capture, void, and refund.",
  },
  {
    idx: "02",
    title: "Merchant Underwriting & Onboarding",
    body: "In-house underwriting for every merchant type including the high-risk categories Medusa storefronts commonly serve — nutraceuticals, subscriptions, digital goods, high-ticket retail, and more. We hold the banking lines, so approval decisions are made here.",
  },
  {
    idx: "03",
    title: "Custom Gateway Architecture",
    body: "For merchants that need routing logic, multi-acquirer failover, or a branded processing layer, we architect the gateway infrastructure to fit — built around your business model and operated end-to-end.",
  },
  {
    idx: "04",
    title: "AI Development & Platform Engineering",
    body: "AI-assisted development for Medusa.js customizations, headless commerce builds, and integration engineering — from checkout flow optimization to AI-driven fraud signals wired into the payment lifecycle.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://proficient.tech" },
    { "@type": "ListItem", position: 2, name: "Medusa.js", item: "https://proficient.tech/medusa" },
  ],
};

export default function MedusaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <RevealObserver />
      <NavBar />

      {/* Hero */}
      <section className="hero blog-hero medusa-hero" id="top">
        <Starfield id="stars-medusa" count={160} opacity={0.7} />
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <div className="reveal">
            <span className="eyebrow">For Medusa.js + Headless Commerce</span>
            <h1>
              Payments integration, underwriting,{" "}
              <em>and AI dev</em> for Medusa.js and emerging headless platforms.
            </h1>
            <p className="lead">
              Proficient builds direct payment integrations, handles merchant onboarding and
              underwriting, and engineers the tooling that connects your Medusa.js storefront to
              production-grade processing infrastructure.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:info@proficient.tech">
                Get a free consultation <span className="arr">→</span>
              </a>
              <a
                className="btn btn-ghost"
                href="https://medusajs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Medusa.js
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="block" id="capabilities">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What we build</span>
            <h2>
              The full stack, <em>from plugin to banking line.</em>
            </h2>
          </div>
          <div className="cap-grid reveal">
            {capabilities.map((cap) => (
              <div className="cap" key={cap.idx}>
                <span className="idx">{cap.idx}</span>
                <h3>{cap.title}</h3>
                <p>{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Medusa.js + Proficient */}
      <section className="block why" id="about-medusa">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Proficient + Medusa.js</span>
            <h2>
              Built for headless.{" "}
              <em>Underwritten for reality.</em>
            </h2>
            <p className="lead" style={{ maxWidth: "72ch", marginTop: "24px" }}>
              Medusa.js is an open-source headless commerce engine built for developers who want
              full control over their stack — without the constraints of Shopify, BigCommerce, or
              platform-locked checkout flows. Proficient is the payment and underwriting partner
              built to match that philosophy. We write the payment provider, hold direct banking
              relationships, underwrite the merchant account in-house, and handle the technical
              integration from npm install to live transactions — so your Medusa.js build ships
              with payment infrastructure that is owned, not rented.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="block cta" id="contact">
        <Starfield id="stars-medusa-cta" count={100} opacity={0.55} />
        <div className="wrap">
          <span className="eyebrow">Free consultation</span>
          <h2>
            Ready to ship payments on{" "}
            <em>your own infrastructure?</em>
          </h2>
          <p className="lead">
            Tell us about your Medusa.js project. We will scope the integration, advise on merchant
            account structure, and get you to live payments on infrastructure built around your
            storefront.
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary" href="mailto:info@proficient.tech">
              Start the conversation <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="tel:2139733525">
              (213) 973-3525
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
