import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/Starfield";
import { RevealObserver } from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "About",
  description: "Proficient was built on a belief that payment infrastructure should be a strategic asset — not a liability. Meet the founder and learn why we exist.",
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

      {/* Founder */}
      <section className="block about-founder">
        <div className="wrap about-founder-inner">
          <div className="about-founder-photo reveal">
            <img src="/assets/phillip-trusela.jpg" alt="Phillip Trusela, Founder of Proficient" />
          </div>
          <div className="about-founder-copy reveal">
            <span className="eyebrow dim">Founder</span>
            <h2>Phillip Trusela</h2>
            <p className="about-founder-title">Founder &amp; Principal Consultant</p>
            <p>
              Phillip Trusela founded Proficient in 2019 after spending nearly two decades working
              across financial services, enterprise technology, and payment processing. He started
              his career as a Registered Representative at The Vanguard Group, where he learned how
              institutional money moves and how investment relationships are built. From there, he
              spent nearly four years as an Account Manager at UpCurve Cloud — a Google Premier
              Partner — consulting businesses on cloud infrastructure and building the technology
              advisory practice that would inform how Proficient approaches its clients today.
            </p>
            <p>
              His entry into payments came through direct sales and consulting work with merchants
              across low and high-risk categories. What he found consistently was a market full of
              solutions that were either technically capable or relationally trustworthy — rarely
              both. Processors who could approve the account but had no interest in understanding
              the business. ISOs who built relationships but had no control over what happened
              upstream. Capital providers who underwrote based on financials, with no visibility
              into the processing infrastructure underneath.
            </p>
            <p>
              Proficient was his answer to that gap. A company built at the intersection of
              financial services, technology strategy, and payment infrastructure — with a
              relationship-first approach that treats trust as the foundation, not a byproduct.
            </p>
            <a
              href="https://www.linkedin.com/in/philiptrusela/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost about-linkedin"
            >
              LinkedIn <span className="arr">→</span>
            </a>
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
