import type { Metadata } from "next";
import ZodiacGrid from "@/components/horoscope/ZodiacGrid";

export const metadata: Metadata = {
  title: "Daily Horoscope - All 12 Zodiac Signs",
  description:
    "Get your daily horoscope reading for all 12 zodiac signs. Discover cosmic guidance across love, career, health and finance.",
};

export default function HoroscopePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      <ZodiacGrid />
    </div>
  );
}
