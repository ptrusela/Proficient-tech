import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { RevealObserver } from "@/components/RevealObserver";
import { Starfield } from "@/components/Starfield";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { Industries } from "@/components/Industries";
import { Stats } from "@/components/Stats";
import { WhyPartner } from "@/components/WhyPartner";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Proficient × REDO.com — White-Label Payments Partnership",
  description: "A partnership proposal for REDO.com.",
  robots: { index: false, follow: false },
};

export default function RedoPage() {
  return (
    <>
      <RevealObserver />
      <NavBar />

      {/* HERO */}
      <section className="hero" id="top">
        <Starfield id="stars" count={220} opacity={0.9} />
        <div className="wrap hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Prepared for REDO.com</span>
            <h1>
              Let us architect payments <em>under your brand.</em>
            </h1>
            <p className="lead">
              REDO.com keeps its name on every checkout, dashboard, and statement. Proficient builds
              and operates the gateway, software, and banking lines behind the scenes &mdash; so your
              customers never leave your ecosystem.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Start the conversation <span className="arr">→</span>
              </a>
              <a className="btn btn-ghost" href="#whitelabel">
                See how it works
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

      <MarqueeStrip />

      {/* WHITE-LABEL — REDO specific */}
      <section className="block wl" id="whitelabel">
        <div className="wrap">
          <div className="wl-grid">
            <div className="wl-copy reveal">
              <span className="eyebrow">For REDO.com</span>
              <h2>
                White-label payments for{" "}
                <span className="uw">REDO.com</span>
              </h2>
              <p className="lead">
                Run payments under your own brand. Proficient builds and operates the gateway,
                software, and banking lines behind the scenes &mdash; REDO.com keeps its name on the
                checkout, the dashboard, and the statement. Your customers never leave your
                ecosystem.
              </p>
              <div className="wl-points">
                <div>
                  <span className="pk mono">01</span>
                  <span>
                    <b>Your brand, end to end.</b> Checkout, emails, and reporting all wear the
                    REDO.com name &mdash; not ours.
                  </span>
                </div>
                <div>
                  <span className="pk mono">02</span>
                  <span>
                    <b>We carry the rails and the risk.</b> Gateway, underwriting, compliance, and
                    banking lines run on our infrastructure.
                  </span>
                </div>
                <div>
                  <span className="pk mono">03</span>
                  <span>
                    <b>New revenue line.</b> Earn on every transaction your merchants process
                    &mdash; without becoming a processor yourself.
                  </span>
                </div>
              </div>
            </div>
            <div className="wl-stage reveal">
              <div
                className="wl-card"
                role="img"
                aria-label="White-labeled REDO.com checkout, payments by Proficient"
              >
                <div className="chrome">
                  <span className="redo-brand">
                    REDO<span>.com</span>
                  </span>
                  <span className="secure">Secure checkout</span>
                </div>
                <div className="amt">Amount due</div>
                <div className="amt-v">$1,250.00</div>
                <div className="fld">
                  <span className="ph">Card number</span>
                  <span className="cn">&middot;&middot;&middot;&middot;&nbsp;&middot;&middot;&middot;&middot;&nbsp;&middot;&middot;&middot;&middot;&nbsp;4242</span>
                </div>
                <div className="paybtn">Pay with REDO.com</div>
                <div className="pwr">
                  <img src="/assets/pt-mark.svg" alt="" />
                  Payments architected by Proficient
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeBuild />

      <Industries />

      <Stats />

      <WhyPartner />

      {/* CTA */}
      <section className="block cta" id="contact">
        <Starfield id="stars2" count={120} opacity={0.6} />
        <div className="wrap">
          <span className="eyebrow">Let&rsquo;s build this together</span>
          <h2>
            Ready to put Proficient <em>behind REDO.com?</em>
          </h2>
          <p className="lead">
            We&rsquo;re ready to scope the integration, walk through the economics, and get your
            first merchants live &mdash; under the REDO.com name.
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary" href="mailto:info@proficient.tech">
              Start the conversation <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="tel:2139733525">
              (213) 973-3525
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
