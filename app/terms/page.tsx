import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of Proficient.tech Inc. services and website.",
  alternates: { canonical: "https://proficient.tech/terms" },
};

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main className="legal-page">
        <div className="wrap">
          <div className="legal-header">
            <span className="eyebrow">Legal</span>
            <h1>Terms of Service</h1>
            <p className="legal-date">Effective date: July 25, 2026</p>
          </div>
          <div className="post-body legal-body">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website at
              proficient.tech and any services provided by Proficient.tech Inc.
              (&ldquo;Proficient,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
              By accessing our website or engaging our services, you agree to these Terms.
            </p>

            <h3>1. Services</h3>
            <p>Proficient provides services across three areas:</p>
            <ul>
              <li>
                <strong>Payment processing and merchant services</strong> — custom payment gateway
                development, merchant account placement, white-label processing infrastructure,
                banking line access, and chargeback management.
              </li>
              <li>
                <strong>Technology</strong> — payment software development, platform integrations
                (including Medusa.js), gateway architecture, and payment routing systems.
              </li>
              <li>
                <strong>Commercial financing</strong> — brokering and referral services for
                commercial financing products including working capital loans, merchant cash
                advances, equipment financing, revenue-based lending, lines of credit, invoice
                factoring, and SBA programs. Proficient acts as a broker or referral agent; it is
                not a direct lender.
              </li>
            </ul>

            <h3>2. Commercial Financing Disclosure</h3>
            <p>
              Proficient.tech Inc. acts as a commercial financing broker and referral agent. We
              connect businesses with third-party commercial financing providers. We are not a
              lender. Approval, terms, rates, and availability of any financing product are
              determined solely by the financing provider, not by Proficient.
            </p>
            <p>
              <strong>California.</strong> Pursuant to California SB 1235 (Cal. Fin. Code
              &sect;&sect; 22800&ndash;22805), commercial financing providers are required to
              provide disclosures to California recipients of commercial financing. Any financing
              offer extended to a California-based business will include disclosures as required by
              applicable law, provided by the financing provider.
            </p>
            <p>
              <strong>New York.</strong> Pursuant to New York&rsquo;s Commercial Finance Disclosure
              Law (N.Y. Fin. Serv. Law &sect;&sect; 801&ndash;812), disclosures are required for
              certain commercial financing transactions offered to New York-based businesses.
              Required disclosures will be provided by the financing provider at the time of offer.
            </p>
            <p>
              <strong>Utah.</strong> Pursuant to Utah&rsquo;s Commercial Financing Registration and
              Disclosure Act, certain commercial financing brokers must register and provide
              disclosures. Required disclosures will be provided at the time of offer as applicable.
            </p>

            <h3>3. No Guarantee of Approval</h3>
            <p>
              Proficient does not guarantee approval of any merchant account, payment processing
              relationship, or commercial financing product. Approval decisions are made by
              acquiring banks, payment processors, and financing providers at their sole discretion.
              Engagement with Proficient does not constitute a commitment to place, approve, or fund
              any application.
            </p>

            <h3>4. Website Use</h3>
            <p>
              You may use our website for lawful purposes only. You agree not to use the website to
              transmit harmful, unlawful, or fraudulent content; to attempt unauthorized access to
              our systems; or to interfere with the operation of the website or its infrastructure.
            </p>

            <h3>5. Intellectual Property</h3>
            <p>
              All content on this website — including text, design, graphics, and code — is owned
              by or licensed to Proficient.tech Inc. and protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create derivative works from any
              content on this website without our express written permission.
            </p>

            <h3>6. Disclaimer of Warranties</h3>
            <p>
              This website and all information provided are offered &ldquo;as is&rdquo; without
              warranty of any kind, express or implied. Proficient makes no representations as to
              the accuracy, completeness, or suitability of any information on the website for any
              particular purpose. Nothing on this website constitutes legal, financial, tax, or
              investment advice.
            </p>

            <h3>7. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, Proficient.tech Inc. and its officers,
              directors, employees, and agents will not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use of this website or
              our services, including but not limited to lost revenue, lost profits, or lost business
              opportunities, even if advised of the possibility of such damages.
            </p>

            <h3>8. Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless Proficient.tech Inc. and its officers,
              directors, employees, and agents from any claims, damages, losses, or expenses
              (including reasonable attorneys&rsquo; fees) arising from your use of our website or
              services, your violation of these Terms, or your violation of any applicable law or
              third-party right.
            </p>

            <h3>9. Governing Law</h3>
            <p>
              These Terms are governed by the laws of the State of California, without regard to
              its conflict of law principles. Any disputes arising under these Terms will be subject
              to the exclusive jurisdiction of the state and federal courts located in Los Angeles
              County, California.
            </p>

            <h3>10. Changes to These Terms</h3>
            <p>
              We may update these Terms from time to time. The effective date at the top of this
              page reflects the date of the most recent revision. Continued use of the website after
              a revision constitutes acceptance of the updated Terms.
            </p>

            <h3>11. Contact</h3>
            <p>For questions regarding these Terms, contact us at:</p>
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
