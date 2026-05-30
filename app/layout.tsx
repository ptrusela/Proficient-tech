import type { Metadata } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
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
  title: "Proficient — Payment Processing Partner",
  description:
    "Proficient builds custom gateways, the software around them, and direct banking partner lines — engineered for every merchant type. Standard, software, subscription, and the high-risk accounts most processors decline.",
  metadataBase: new URL("https://proficient.tech"),
  openGraph: {
    title: "Proficient — Payment Processing Partner",
    description:
      "Payment infrastructure for every merchant type — built, not resold.",
    url: "https://proficient.tech",
    siteName: "Proficient",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
