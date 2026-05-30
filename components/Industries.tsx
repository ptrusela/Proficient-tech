export function Industries() {
  return (
    <section className="block" id="industries" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow dim">Industries we serve</span>
          <h2>
            If it processes payments, <em>we&rsquo;ve placed it.</em>
          </h2>
        </div>
        <div className="ind-layout">
          <div className="ind-list reveal">
            <div className="ind-row">
              <span className="rn mono">01</span>
              <span className="nm">Software &amp; SaaS</span>
              <span className="tag">Platform</span>
            </div>
            <div className="ind-row">
              <span className="rn mono">02</span>
              <span className="nm">Subscription &amp; recurring</span>
              <span className="tag">Recurring</span>
            </div>
            <div className="ind-row">
              <span className="rn mono">03</span>
              <span className="nm">E-commerce &amp; retail</span>
              <span className="tag">Card-not-present</span>
            </div>
            <div className="ind-row">
              <span className="rn mono">04</span>
              <span className="nm">High-risk verticals</span>
              <span className="tag hot">Specialty</span>
            </div>
            <div className="ind-row">
              <span className="rn mono">05</span>
              <span className="nm">Marketplaces &amp; platforms</span>
              <span className="tag">Split-pay</span>
            </div>
            <div className="ind-row">
              <span className="rn mono">06</span>
              <span className="nm">Professional services</span>
              <span className="tag">Card present</span>
            </div>
          </div>
          <div className="ind-aside reveal">
            <img src="/assets/astronaut.svg" alt="" />
            <div className="veil"></div>
            <div className="cap-txt">
              <p className="q">
                High-risk isn&rsquo;t a category we avoid. It&rsquo;s one we engineered for.
              </p>
              <p className="by">&mdash; Built for hostile environments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
