import type { Metadata } from "next";
import PricingContent from "@/components/PricingContent";

export const metadata: Metadata = {
  title: "Pricing - Free Early Access | Dao Light",
  description:
    "View Dao Light pricing plans. All features free during early access. Preview upcoming Seeker and Sage plans with unlimited readings and premium AI features.",
};

export default function PricingPage() {
  return <PricingContent />;
}
