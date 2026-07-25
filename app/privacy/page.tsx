import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Proficient.tech Inc. collects, uses, and protects your information.",
  alternates: { canonical: "https://proficient.tech/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="legal-page">
        <div className="wrap">
          <div className="legal-header">
            <span className="eyebrow">Legal</span>
            <h1>Privacy Policy</h1>
            <p className="legal-date">Effective date: July 25, 2026</p>
          </div>
          <div className="post-body legal-body">
            <p>
              Proficient.tech Inc. (&ldquo;Proficient,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo;
              or &ldquo;us&rdquo;) operates the website at proficient.tech. This Privacy Policy
              explains what information we collect, how we use it, and your rights with respect to
              it.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              <strong>Information you provide directly.</strong> When you submit our contact form, we
              collect your name, company or DBA name, email address, phone number, service category,
              and the message you submit. We use this information solely to respond to your inquiry.
            </p>
            <p>
              <strong>Automatically collected information.</strong> We use Vercel Analytics to
              collect anonymized, aggregate traffic data (pages visited, referrer, device type). No
              personally identifiable information is collected through this service. We also run a
              Google Ads conversion tag (AW-802453507) that may set cookies for advertising
              measurement and remarketing purposes. You can opt out of Google&rsquo;s advertising
              cookies at{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                adssettings.google.com
              </a>
              .
            </p>

            <h3>2. How We Use Your Information</h3>
            <ul>
              <li>To respond to inquiries submitted through our contact form</li>
              <li>To communicate with you about services you have expressed interest in</li>
              <li>To measure advertising performance and improve our marketing</li>
              <li>To maintain the security and operation of our website</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use contact form submissions for
              unsolicited marketing without your consent.
            </p>

            <h3>3. How We Share Your Information</h3>
            <p>
              We share information only with service providers necessary to operate our business:
            </p>
            <ul>
              <li>
                <strong>Resend</strong> — our email delivery provider, used to route contact form
                submissions to our inbox. Resend processes message content and email addresses as
                necessary to deliver the message.
              </li>
              <li>
                <strong>Vercel</strong> — our hosting and infrastructure provider. Vercel processes
                web traffic data in connection with serving our website.
              </li>
              <li>
                <strong>Google</strong> — for advertising measurement through our Google Ads
                conversion tag.
              </li>
            </ul>
            <p>
              We may disclose information if required by law, court order, or government authority,
              or to protect the rights, property, or safety of Proficient, our clients, or others.
            </p>

            <h3>4. Data Retention</h3>
            <p>
              Contact form submissions are retained in our email inbox for as long as necessary to
              respond to and fulfill the inquiry. We do not maintain a separate database of contact
              form submissions.
            </p>

            <h3>5. California Residents (CCPA)</h3>
            <p>
              If you are a California resident, you have the right to request disclosure of the
              categories and specific pieces of personal information we have collected about you, the
              right to request deletion of your personal information, and the right not to be
              discriminated against for exercising these rights. To make a request, contact us at
              the address below. We do not sell personal information as defined under the CCPA.
            </p>

            <h3>6. Cookies</h3>
            <p>
              Our website uses cookies placed by Google Ads for advertising measurement. Vercel
              Analytics does not use cookies. You can control cookie preferences through your browser
              settings or opt out of Google advertising cookies at adssettings.google.com.
            </p>

            <h3>7. Third-Party Links</h3>
            <p>
              Our website may link to third-party websites. We are not responsible for the privacy
              practices of those sites and encourage you to review their privacy policies.
            </p>

            <h3>8. Children</h3>
            <p>
              Our website is not directed at children under 13. We do not knowingly collect personal
              information from children under 13.
            </p>

            <h3>9. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. The effective date at the top of
              this page reflects the date of the most recent revision. Continued use of the website
              after a revision constitutes acceptance of the updated policy.
            </p>

            <h3>10. Contact</h3>
            <p>
              For questions or requests regarding this Privacy Policy, contact us at:
            </p>
            <p>
              Proficient.tech Inc.<br />
              23465 Civic Center Way<br />
              Malibu, CA 90265<br />
              <a href="mailto:info@proficient.tech">info@proficient.tech</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
