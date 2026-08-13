import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { company } from "@/data/company";

const manrope = localFont({
  src: [
    { path: "./fonts/manrope-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/manrope-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/manrope-600.woff2", weight: "600", style: "normal" }
  ],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(company.canonicalUrl),
  title: {
    default: `${company.descriptor} | ${company.name}`,
    template: `%s | ${company.name}`
  },
  description:
    "Peptide manufacturing support for international research, development and procurement teams.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${company.descriptor} | ${company.name}`,
    description:
      "Peptide manufacturing support for international research, development and procurement teams.",
    type: "website",
    url: "/",
    images: [{ url: company.hero.image, alt: company.hero.alt }]
  },
  icons: { icon: "/favicon.png" }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.canonicalUrl
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
