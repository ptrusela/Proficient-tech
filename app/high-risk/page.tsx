import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { Starfield } from "@/components/Starfield";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "High-Risk Merchant Accounts — Proficient",
  description:
    "Proficient provides high-risk merchant accounts for businesses declined by Stripe, Square, and conventional processors. Custom payment gateways, in-house underwriting, and direct banking lines for every high-risk category.",
  alternates: { canonical: "https://proficient.tech/high-risk" },
  keywords: [
    "high risk merchant account",
    "high risk payment processor",
    "high risk payment processing",
    "high risk credit card processing",
    "payment processing for high risk businesses",
    "high risk merchant services",
  ],
  openGraph: {
    title: "High-Risk Merchant Accounts — Proficient",
    description:
      "Custom payment gateways and direct banking lines for businesses declined by conventional processors. In-house underwriting for every high-risk category.",
    url: "https://proficient.tech/high-risk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Risk Merchant Accounts — Proficient",
    description:
      "Custom payment gateways and direct banking lines for businesses declined by conventional processors.",
  },
};

const industries = [
  { name: "Nutraceuticals & Supplements", tag: "Volume risk" },
  { name: "Telehealth & Telemedicine", tag: "Regulatory" },
  { name: "Adult Content", tag: "Reputational" },
  { name: "Travel & Timeshares", tag: "Chargeback risk" },
  { name: "Subscription Boxes", tag: "Recurring billing" },
  { name: "High-Ticket Coaching", tag: "Refund exposure" },
  { name: "Firearms & Ammunition", tag: "Restricted category" },
  { name: "Cannabis & CBD", tag: "Regulatory" },
  { name: "Gambling & Gaming", tag: "Regulatory" },
  { name: "Cryptocurrency", tag: "Volatility" },
  { name: "MLM & Direct Sales", tag: "Structure risk" },
  { name: "Debt Collection", tag: "Regulatory" },
  { name: "Tech Support", tag: "Fraud exposure" },
  { name: "Online Pharmacies", tag: "Regulatory" },
  { name: "International Merchants", tag: "Cross-border" },
  { name: "Prior Terminations", tag: "MATCH listed" },
];

const relatedSlugs = [
  "why-most-isos-cant-save-high-risk-merchants",
  "what-underwriting-actually-looks-at-before-you-go-live",
  "the-real-cost-of-reselling-someone-elses-gateway",
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://proficient.tech" },
    { "@type": "ListItem", position: 2, name: "High-Risk Merchant Accounts", item: "https://proficient.tech/high-risk" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "High-Risk Merchant Account Processing",
  provider: {
    "@type": "Organization",
    name: "Proficient",
    url: "https://proficient.tech",
  },
  description:
    "Custom payment gateway setup, in-house underwriting, and direct banking lines for high-risk merchants including nutraceuticals, telehealth, adult content, travel, firearms, cannabis, and businesses with prior terminations.",
  areaServed: "US",
  url: "https://proficient.tech/high-risk",
};

export default function HighRiskPage() {
  const allPosts = getAllPosts();
  const related = relatedSlugs
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean) as typeof allPosts;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <RevealObserver />
      <NavBar />

      {/* Hero */}
      <section className="hero blog-hero medusa-hero" id="top">
        <Starfield id="stars-hr" count={160} opacity={0.7} />
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <div className="reveal">
            <span className="eyebrow">High-Risk Payment Processing</span>
            <h1>
              The processor built for the merchants <em>everyone else turns away.</em>
            </h1>
            <p className="lead">
              Stripe declined you. Square terminated your account. Your ISO said the bank won&rsquo;t
              approve it. Proficient holds direct banking lines and does its own underwriting —
              which means approval decisions are made here, not by a matrix built for someone else&rsquo;s
              risk tolerance.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:info@proficient.tech">
                Submit your merchant <span className="arr">→</span>
              </a>
              <a className="btn btn-ghost" href="tel:2139733525">
                (213) 973-3525
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why processors decline */}
      <section className="block why" id="why-declined">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The real reason you were declined</span>
            <h2>
              It is not your business. <em>It is their risk matrix.</em>
            </h2>
            <p className="lead" style={{ maxWidth: "68ch", marginTop: "22px" }}>
              Consumer-facing processors — Stripe, Square, PayPal, Braintree — run automated
              risk filters calibrated for low-chargeback, low-regulatory-risk businesses selling
              physical goods to retail customers. When a merchant falls outside that profile, the
              system flags and terminates the account — not because card networks prohibit the
              business, but because the processor has no underwriting capacity for edge cases.
              The decision is not about your business model. It is about their model.
            </p>
            <p className="lead" style={{ maxWidth: "68ch", marginTop: "16px" }}>
              Proficient is not a consumer-facing processor. It is a payment infrastructure
              company with direct bank relationships and in-house underwriting teams that evaluate
              merchants the way underwriting is supposed to work — by understanding the actual
              business, not by running it through a risk score designed for someone else.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="block" id="industries">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Categories we underwrite</span>
            <h2>
              If your category is on this list, <em>we have placed accounts in it.</em>
            </h2>
          </div>
          <div className="hr-grid reveal">
            {industries.map((ind) => (
              <div className="hr-card" key={ind.name}>
                <span className="hr-tag mono">{ind.tag}</span>
                <span className="hr-name">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Proficient provides */}
      <section className="block" id="what-we-provide">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What you get</span>
            <h2>
              Infrastructure built for the category, <em>not retrofitted for it.</em>
            </h2>
          </div>
          <div className="cap-grid reveal">
            <div className="cap">
              <span className="idx">01</span>
              <h3>Direct Banking Lines</h3>
              <p>
                Proficient holds its own banking relationships — not resold risk from an upstream
                processor. When we approve a merchant account, the underwriting decision comes from
                here. That means higher approval rates for difficult categories and more stable
                accounts that do not get pulled without warning.
              </p>
            </div>
            <div className="cap">
              <span className="idx">02</span>
              <h3>Custom Gateway Architecture</h3>
              <p>
                High-risk merchants need gateway infrastructure calibrated to their business model —
                routing logic, velocity controls, chargeback thresholds, and descriptor management
                that a consumer-facing processor never exposes. We architect it from the ground up.
              </p>
            </div>
            <div className="cap">
              <span className="idx">03</span>
              <h3>In-House Underwriting</h3>
              <p>
                Every merchant file is reviewed by underwriters who understand the category — not
                a bank compliance team seeing the business type for the first time. Prior
                terminations, MATCH listings, and high-chargeback history are evaluated in context,
                not auto-declined.
              </p>
            </div>
            <div className="cap">
              <span className="idx">04</span>
              <h3>Chargeback Management</h3>
              <p>
                High-risk accounts live or die by their chargeback ratio. Proficient builds
                pre-transaction fraud controls and post-purchase dispute response processes designed
                to keep ratios below card network thresholds — not just respond to disputes after
                they happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related reading */}
      {related.length > 0 && (
        <section className="block hr-related" id="reading">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Related reading</span>
              <h2>
                Understand the landscape <em>before you apply.</em>
              </h2>
            </div>
            <div className="blog-grid hr-blog-grid reveal">
              {related.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <span className="eyebrow dim">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-meta mono">
                    <span>{formatDate(post.date)}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="block cta" id="contact">
        <Starfield id="stars-hr-cta" count={100} opacity={0.55} />
        <div className="wrap">
          <span className="eyebrow">Send us your toughest merchants</span>
          <h2>
            If someone else declined it, <em>send it to us.</em>
          </h2>
          <p className="lead">
            Tell us the category, the processing history, and what went wrong with the last
            processor. We will tell you what we can do and how fast we can get it live.
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary" href="mailto:info@proficient.tech">
              Start the conversation <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="tel:2139733525">
              (213) 973-3525
            </a>
            <a className="btn btn-ghost" href="mailto:info@proficient.tech">
              info@proficient.tech
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
