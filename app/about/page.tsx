import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/Starfield";
import { RevealObserver } from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "About",
  description: "Proficient was built on a belief that payment infrastructure should be a strategic asset — not a liability. Learn why we exist.",
  alternates: { canonical: "https://proficient.tech/about" },
};

export default function AboutPage() {
  return (
    <>
      <RevealObserver />
      <NavBar />

      <section className="hero about-hero" id="top">
        <Starfield id="stars-about" count={160} opacity={0.7} />
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">About Proficient</span>
            <h1>
              In payment infrastructure,{" "}
              <em>trust is the product.</em>
            </h1>
            <p className="lead" style={{ maxWidth: "68ch", marginTop: "24px" }}>
              Proficient was built on a simple belief: that businesses operating in complex markets
              deserve a payment partner who understands the full picture — the technology, the
              banking relationships, and the capital structures that make a business actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="block about-mission">
        <div className="wrap">
          <p className="about-mission-text reveal">
            Proficient is an independent financial infrastructure advisor connecting businesses,
            banks, capital providers and technology partners through one accountable relationship.
          </p>
        </div>
      </section>

      {/* Why we exist */}
      <section className="block about-why">
        <div className="wrap about-why-inner">
          <div className="about-why-copy reveal">
            <span className="eyebrow dim">Why Proficient exists</span>
            <h2>
              Most payment companies solve one problem.{" "}
              <em>We were built to solve three.</em>
            </h2>
            <p>
              The payment industry is full of specialists — processors who handle volume but not
              complexity, ISOs who sell accounts but don&rsquo;t own the infrastructure, lenders who
              provide capital but don&rsquo;t understand the processing relationship underneath it.
            </p>
            <p>
              Businesses that operate outside the standard model — high-risk categories, complex
              revenue structures, merchants that have been declined or terminated — end up stitching
              together relationships that don&rsquo;t talk to each other. The processor doesn&rsquo;t
              know the lender. The ISO doesn&rsquo;t control the underwriting. The technology doesn&rsquo;t
              connect to any of it.
            </p>
            <p>
              Proficient was built to close that gap. One relationship that covers payments,
              technology, and capital — engineered around how a business actually operates, not how
              it fits into a risk matrix someone else designed.
            </p>
          </div>
          <div className="about-pillars reveal">
            <div className="about-pillar">
              <span className="idx">01</span>
              <h3>Payments</h3>
              <p>Custom gateways, payment infrastructure, merchant account placement, and chargeback management — across every category, including the ones most processors decline.</p>
            </div>
            <div className="about-pillar">
              <span className="idx">02</span>
              <h3>Technology</h3>
              <p>Payment software, platform integrations, gateway architecture, and the infrastructure built around the processing relationship — not bolted on after the fact.</p>
            </div>
            <div className="about-pillar">
              <span className="idx">03</span>
              <h3>Capital</h3>
              <p>Commercial financing brokered through a relationship that already knows the processing history — working capital, equipment financing, revenue-based lending, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="block cta" id="contact">
        <Starfield id="stars-about-cta" count={100} opacity={0.55} />
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow">Work with us</span>
          <h2>
            Let&rsquo;s build something{" "}
            <em>that doesn&rsquo;t get declined.</em>
          </h2>
          <div className="cta-actions" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="/#contact">
              Get in touch <span className="arr">→</span>
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
