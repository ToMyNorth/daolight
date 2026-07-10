import type { Metadata } from "next";
import PricingContent from "@/components/PricingContent";

export const metadata: Metadata = {
  title: "Pricing Plans - Free, Pro & Lifetime | Dao Light",
  description:
    "Choose your Dao Light plan: Free (3 readings/day), Pro ($9.99/mo unlimited), or Lifetime ($49.99 one-time). Compare features and start your Eastern wisdom journey.",
  openGraph: {
    title: "Pricing Plans | Dao Light",
    description:
      "Free, Pro, or Lifetime — find the perfect plan for your spiritual journey with AI-powered Eastern wisdom.",
    url: "/pricing",
    siteName: "Dao Light",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Dao Light Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans | Dao Light",
    description: "Free, Pro, or Lifetime — find the perfect plan for your spiritual journey.",
    images: ["/og-default.png"],
  },
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <PricingContent />;
}
