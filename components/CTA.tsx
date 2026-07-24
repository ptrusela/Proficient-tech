import { Starfield } from "./Starfield";
import { ContactForm } from "./ContactForm";

export function CTA() {
  return (
    <section className="block cta" id="contact">
      <Starfield id="stars2" count={120} opacity={0.6} />
      <div className="wrap">
        <span className="eyebrow">Send us your toughest deals</span>
        <h2>
          Let&rsquo;s build something <em>that doesn&rsquo;t get declined.</em>
        </h2>
        <ContactForm />
        <div className="cta-contact-line">
          <a href="mailto:info@proficient.tech">info@proficient.tech</a>
          <span className="sep">&middot;</span>
          <a href="tel:2139733525">(213) 973-3525</a>
        </div>
      </div>
    </section>
  );
}
