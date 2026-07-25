export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-brand">
              <img className="mark" src="/assets/pt-mark.svg" alt="Proficient mark" />
              <span className="word">PROFICIENT</span>
            </div>
            <p className="foot-tag">
              Payment infrastructure for every merchant type &mdash; built, not resold.
            </p>
            <p className="foot-tag" style={{ marginTop: "8px" }}>
              Los Angeles, CA
            </p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h4>Build</h4>
              <a href="#architect">Custom gateways</a>
              <a href="#architect">Software &amp; tooling</a>
              <a href="#whitelabel">White-label</a>
              <a href="#architect">Banking lines</a>
            </div>
            <div className="foot-col">
              <h4>Industries</h4>
              <a href="#industries">Software &amp; SaaS</a>
              <a href="#industries">High-risk</a>
              <a href="#industries">E-commerce</a>
            </div>
            <div className="foot-col">
              <h4>Resources</h4>
              <a href="/high-risk">High-Risk Accounts</a>
              <a href="/medusa">Medusa.js</a>
              <a href="/blog">Blog</a>
            </div>
            <div className="foot-col">
              <h4>Contact</h4>
              <a href="mailto:info@proficient.tech">info@proficient.tech</a>
              <a href="tel:2139733525">(213) 973-3525</a>
              <a
                href="https://www.linkedin.com/company/proficient-tech-965656195"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/proficient.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="mono">&copy; 2026 Proficient &middot; proficient.tech</span>
          <span className="mono foot-legal">
            <a href="/privacy">Privacy Policy</a>
            <span>&middot;</span>
            <a href="/terms">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
