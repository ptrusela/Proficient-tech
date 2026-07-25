export function FAQ() {
  const items = [
    {
      q: "What is a high-risk merchant account?",
      a: "A high-risk merchant account is a payment processing arrangement for businesses in categories that carry elevated chargeback rates, regulatory scrutiny, or reputational risk for banks — such as nutraceuticals, telehealth, adult content, travel, firearms accessories, subscription boxes with free-trial structures, and high-ticket coaching. These accounts require specialized underwriting and direct banking relationships that most consumer-facing processors are not set up to provide.",
    },
    {
      q: "Why do high-risk merchants get declined by processors like Stripe?",
      a: "Consumer-facing gateways like Stripe apply risk filters calibrated for low-chargeback, low-regulatory-risk businesses. Merchants in elevated-risk categories get flagged and terminated — not because card networks prohibit the business, but because the gateway's automated risk system has no tolerance for edge cases. High-risk merchants need a processor with direct banking relationships and in-house underwriters who can evaluate the actual business model rather than running it through a policy matrix.",
    },
    {
      q: "What does an ISO do in payment processing?",
      a: "An ISO (Independent Sales Organization) is authorized by card networks and acquiring banks to resell payment processing services. Most ISOs do not own the underlying processing infrastructure — they defer underwriting decisions to the bank behind them, which limits their ability to approve difficult accounts. Proficient holds its own banking lines, so underwriting decisions are made in-house rather than outsourced to a third party.",
    },
    {
      q: "What is white-label payment processing?",
      a: "White-label payment processing means a platform, brand, or ISO runs payment services — checkout pages, merchant dashboards, statements — under its own name while the underlying gateway, banking infrastructure, and compliance are operated behind the scenes by a payment company. Proficient builds and operates the full stack (gateway, software, banking lines, underwriting) while the partner brand retains the customer-facing identity.",
    },
    {
      q: "How does Proficient integrate with Medusa.js?",
      a: "Proficient built a direct Medusa.js payment provider plugin that routes transactions from the Medusa storefront straight to Proficient's processing infrastructure. The plugin handles authorization, capture, void, and refund. It installs via npm and registers in the Medusa config without requiring changes to the storefront or checkout UI.",
    },
    {
      q: "What do underwriters look at when evaluating a merchant account application?",
      a: "Underwriters evaluate five core signals: business model clarity (can the owner explain how money moves in one sentence); fulfillment proof (shipping records, delivery confirmations, or service logs); processing history (prior statements, even imperfect ones); refund and chargeback policy (written, visible, and actively enforced); and principal background (open judgments, prior processor terminations, MATCH list status). A well-documented file with context for any negative signals approves faster than a clean application with no history.",
    },
    {
      q: "What is chargeback management and why does it matter for high-risk merchants?",
      a: "Chargeback management covers the processes a merchant uses to reduce disputed transactions, respond to disputes that occur, and keep its chargeback ratio below the thresholds that trigger processor termination. For high-risk merchants — who operate in categories with higher return rates, subscription cancellations, or customer confusion — sustained ratios above 1% can trigger card network monitoring programs and account termination. Proficient helps merchants implement pre-transaction fraud controls and post-purchase dispute response strategies.",
    },
    {
      q: "Can Proficient approve merchants that have been terminated by another processor?",
      a: "Yes, in many cases. Prior terminations are evaluated case-by-case: what caused the termination, whether the underlying issue has been resolved, and whether the current business model is sustainable. Merchants terminated because a prior processor had no appetite for the category are a very different file from those terminated for fraud or card network violations. Proficient's in-house underwriting allows this evaluation rather than auto-declining any file with a prior termination on record.",
    },
  ];

  return (
    <section className="block faq" id="faq">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow dim">Common questions</span>
          <h2>
            What people ask about <em>high-risk payments.</em>
          </h2>
          <p className="lead">
            Straight answers on merchant accounts, underwriting, ISO services, and payment
            infrastructure — from the team that builds it.
          </p>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className="faq-item reveal">
              <h3 className="faq-q">{item.q}</h3>
              <p className="faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
