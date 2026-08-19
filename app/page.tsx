import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { Services } from "@/components/Services";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { WhiteLabel } from "@/components/WhiteLabel";
import { Industries } from "@/components/Industries";
import { Stats } from "@/components/Stats";
import { WhyPartner } from "@/components/WhyPartner";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a high-risk merchant account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A high-risk merchant account is a payment processing arrangement for businesses in categories that carry elevated chargeback rates, regulatory scrutiny, or reputational risk for banks — such as nutraceuticals, telehealth, adult content, travel, subscription boxes, and high-ticket coaching. These accounts require specialized underwriting and direct banking relationships that most consumer-facing processors are not set up to provide.",
      },
    },
    {
      "@type": "Question",
      name: "Why do high-risk merchants get declined by processors like Stripe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consumer-facing gateways apply risk filters calibrated for low-chargeback, low-regulatory-risk businesses. Merchants in elevated-risk categories get flagged and terminated — not because card networks prohibit the business, but because the gateway's automated risk system has no tolerance for edge cases. High-risk merchants need a processor with direct banking relationships and underwriters who can evaluate the actual business model.",
      },
    },
    {
      "@type": "Question",
      name: "What does an ISO do in payment processing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An ISO (Independent Sales Organization) is authorized to resell payment processing services but typically does not own the underlying infrastructure. Most ISOs defer underwriting decisions to the bank behind them, limiting their ability to approve difficult accounts. Proficient underwrites merchant accounts directly, which means approval decisions are based on the actual business rather than a third-party risk matrix.",
      },
    },
    {
      "@type": "Question",
      name: "What is white-label payment processing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White-label payment processing means a platform or brand runs payment services under its own name while the underlying gateway, banking infrastructure, and compliance are operated behind the scenes by a payment company. Proficient builds and operates the full stack while the partner brand retains the customer-facing identity.",
      },
    },
    {
      "@type": "Question",
      name: "How does Proficient integrate with Medusa.js?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proficient built a direct Medusa.js payment provider plugin that routes transactions straight to Proficient's processing infrastructure. It installs via npm, handles the full transaction lifecycle, and requires no changes to the storefront or checkout UI.",
      },
    },
    {
      "@type": "Question",
      name: "What do underwriters look at when evaluating a merchant account application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Underwriters evaluate: business model clarity, fulfillment proof (shipping records or service logs), processing history (prior statements), refund and chargeback policy (written and active), and principal background (judgments, prior terminations, MATCH list status). A well-documented file with context for any negative signals approves faster than a clean application with no history.",
      },
    },
    {
      "@type": "Question",
      name: "What is chargeback management and why does it matter for high-risk merchants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chargeback management covers the processes a merchant uses to reduce disputed transactions and keep its chargeback ratio below processor thresholds. For high-risk merchants, sustained ratios above 1% can trigger card network monitoring programs and account termination. Proficient helps merchants implement pre-transaction fraud controls and post-purchase dispute response strategies.",
      },
    },
    {
      "@type": "Question",
      name: "Can Proficient approve merchants that have been terminated by another processor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in many cases. Prior terminations are evaluated case-by-case: what caused the termination, whether the underlying issue has been resolved, and whether the current model is sustainable. Merchants terminated for category mismatch are different from those terminated for fraud. Proficient's underwriting process allows this evaluation rather than auto-declining any file with a prior termination.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RevealObserver />
      <NavBar />
      <Hero />
      <MarqueeStrip />
      <Services />
      <WhatWeBuild />
      <WhiteLabel />
      <Industries />
      <Stats />
      <WhyPartner />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
