export function WhiteLabel() {
  return (
    <section className="block wl" id="whitelabel">
      <div className="wrap">
        <div className="wl-grid">
          <div className="wl-copy reveal">
            <span className="eyebrow">For platforms &amp; ISOs</span>
            <h2>
              White-label our payment infrastructure for{" "}
              <span className="uw">your brand</span>
            </h2>
            <p className="lead">
              Run payments under your own name. Proficient builds and operates the gateway, software,
              and payment infrastructure behind the scenes &mdash; your customers see your brand on every
              checkout page, email, and statement.
            </p>
            <div className="wl-points">
              <div>
                <span className="pk mono">01</span>
                <span>
                  <b>Your brand, end to end.</b> Checkout, emails, and reporting all wear your name
                  &mdash; not ours.
                </span>
              </div>
              <div>
                <span className="pk mono">02</span>
                <span>
                  <b>We carry the rails and the risk.</b> Gateway, underwriting, compliance, and
                  payment infrastructure run on our systems.
                </span>
              </div>
              <div>
                <span className="pk mono">03</span>
                <span>
                  <b>New revenue line.</b> Earn on every transaction your merchants process &mdash;
                  without building a payment company.
                </span>
              </div>
            </div>
          </div>
          <div className="wl-stage reveal">
            <div
              className="wl-card"
              role="img"
              aria-label="White-labeled checkout, payments architected by Proficient"
            >
              <div className="chrome">
                <span className="brand-name">
                  YourBrand<span>.com</span>
                </span>
                <span className="secure">Secure checkout</span>
              </div>
              <div className="amt">Amount due</div>
              <div className="amt-v">$1,250.00</div>
              <div className="fld">
                <span className="ph">Card number</span>
                <span className="cn">&middot;&middot;&middot;&middot;&nbsp;&middot;&middot;&middot;&middot;&nbsp;&middot;&middot;&middot;&middot;&nbsp;4242</span>
              </div>
              <div className="paybtn">Pay with YourBrand</div>
              <div className="pwr">
                <img src="/assets/pt-mark.svg" alt="" />
                Payments architected by Proficient
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
