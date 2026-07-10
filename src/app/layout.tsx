import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

// ── Google Search Console verification ────────────────────────────────────
// Verified via Google Search Console → Settings → Ownership verification → HTML tag
const GOOGLE_VERIFICATION = "KhchUzf5OrG30xJvpTZtfsKmkHcTqyzvAIuhkZ107-k";

// ── Google Analytics 4 Measurement ID ────────────────────────────────────
// Replace 'G-XXXXXXXXXX' with your real GA4 Measurement ID from
// Google Analytics → Admin → Data Streams → Web → Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Entertainment",

  // ── Verification ──────────────────────────────────────────────────────
  verification: {
    google: GOOGLE_VERIFICATION,
  },

  // ── Open Graph ────────────────────────────────────────────────────────
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – Ancient Eastern Wisdom, Powered by AI`,
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-default.png"],
  },

  // ── Robots ────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  // ── Canonical URL ─────────────────────────────────────────────────────
  alternates: { canonical: "/" },
};

// ── JSON-LD structured data (global: WebApplication + Organization) ─────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: siteConfig.name,
      url: siteConfig.url,
      description:
        "Dao Light is an AI-powered platform offering I Ching divination, Tarot card readings, daily horoscopes for all 12 zodiac signs, and Five Elements personality insights. Bridging 3,000 years of Eastern wisdom with modern artificial intelligence.",
      applicationCategory: "EntertainmentApplication",
      applicationSubCategory: "Divination & Astrology",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/og-default.png`,
      },
      sameAs: [],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />

        {/* ── Google Analytics 4 ─────────────────────────────────────────
            Uses afterInteractive strategy so the script loads after hydration.
            Replace GA_MEASUREMENT_ID above before going live. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
