export function Services() {
  return (
    <section className="block services" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow dim">What we do</span>
          <h2>
            Payments, technology, and finance &mdash; <em>under one roof.</em>
          </h2>
          <p className="lead">
            Proficient integrates payment infrastructure, technology procurement, and private finance
            sourcing into a relationship-driven ecosystem focused on efficiency, compliance, and
            growth.
          </p>
        </div>
        <div className="svc-grid">
          <div className="svc-card reveal">
            <div className="svc-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="1" y="4" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M1 8h20" stroke="currentColor" strokeWidth="1.6"/>
                <rect x="4" y="12" width="5" height="2" rx="1" fill="currentColor"/>
              </svg>
            </div>
            <h3>Payments</h3>
            <p>
              Custom payment rates, fees, and gateway technology engineered around each merchant
              &mdash; standard, software, subscription, and the high-risk accounts most processors
              decline.
            </p>
            <a className="svc-link" href="#architect">
              See what we build <span className="arr">→</span>
            </a>
          </div>
          <div className="svc-card reveal">
            <div className="svc-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
                <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
                <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
                <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
            </div>
            <h3>Technology</h3>
            <p>
              Strategic innovation and procurement savings through an extensive partner network.
              We source, evaluate, and integrate the right technology stack for your operation
              &mdash; without the agency markup.
            </p>
            <a className="svc-link" href="#contact">
              Talk to us <span className="arr">→</span>
            </a>
          </div>
          <div className="svc-card reveal">
            <div className="svc-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M11 6v2m0 6v2M8 11h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M9 9.5C9 8.67 9.9 8 11 8s2 .67 2 1.5S12.1 11 11 11s-2 .67-2 1.5S9.9 14 11 14s2-.67 2-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Finance</h3>
            <p>
              Private funding connections across technology financing, asset-based lending,
              factoring, and hard money. We match businesses with the capital sources that fit
              &mdash; fast and without the friction of traditional banking.
            </p>
            <a className="svc-link" href="#contact">
              Explore options <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
