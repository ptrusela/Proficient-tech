const WORDS = [
  "Custom Gateways",
  "White-Label",
  "High-Risk",
  "Software & SaaS",
  "Subscription",
  "Banking Lines",
  "Underwriting",
  "Chargeback Tools",
  "E-Commerce",
  "Recurring Billing",
  "Marketplaces",
  "Risk Monitoring",
];

export function MarqueeStrip() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="strip" aria-hidden="true">
      <div className="marquee">
        {items.map((word, i) => (
          <span key={i} className="marq-item">
            <span className="dot"></span>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
