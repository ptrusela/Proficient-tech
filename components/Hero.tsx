import { Starfield } from "./Starfield";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Starfield id="stars" count={220} opacity={0.9} />
      <div className="wrap hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">Payment Processing Partner</span>
          <h1>
            We architect financial infrastructure <em>for complex markets.</em>
          </h1>
          <p className="lead">
            Payments, technology, and capital &mdash; built around how your business actually
            operates.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Contact <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="#architect">
              See what we build
            </a>
          </div>
        </div>
        <div className="hero-figure reveal">
          <img src="/assets/astronaut.jpg" alt="Proficient — built for hostile environments" />
        </div>
      </div>
      <div className="hero-scroll">
        <span className="line"></span> Scroll
      </div>
    </section>
  );
}
