import type { Metadata } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Proficient — Payment Processing Partner | Los Angeles",
    template: "%s | Proficient",
  },
  description:
    "Proficient builds custom payment gateways, white-label processing infrastructure, and direct banking lines for every merchant type — including high-risk accounts most processors decline. Based in Los Angeles.",
  metadataBase: new URL("https://proficient.tech"),
  keywords: [
    "payment processing partner",
    "high-risk merchant accounts",
    "white-label payment processing",
    "custom payment gateway",
    "ISO payment processing",
    "high-risk payment processor",
    "merchant services Los Angeles",
    "payment infrastructure",
    "chargeback management",
  ],
  openGraph: {
    title: "Proficient — Payment Processing Partner",
    description:
      "Custom gateways, white-label processing, and banking lines for every merchant type — including high-risk. Built in Los Angeles.",
    url: "https://proficient.tech",
    siteName: "Proficient",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proficient — Payment Processing Partner",
    description:
      "Custom gateways, white-label processing, and banking lines for every merchant type — including high-risk.",
  },
  alternates: {
    canonical: "https://proficient.tech",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Proficient",
  description:
    "Custom payment gateways, white-label processing infrastructure, and direct banking lines for every merchant type — including high-risk accounts most processors decline.",
  url: "https://proficient.tech",
  telephone: "+12139733525",
  email: "info@proficient.tech",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: "US",
  serviceType: [
    "Payment Processing",
    "High-Risk Merchant Accounts",
    "Custom Payment Gateway Development",
    "White-Label Payment Processing",
    "ISO Services",
    "Chargeback Management",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" type="application/rss+xml" title="Proficient Blog" href="/feed" />
      </head>
      <body className={`${archivo.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-802453507"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-802453507');
          `}
        </Script>
      </body>
    </html>
  );
}
