import type { Metadata } from "next";
import TarotCardListClient from "./TarotCardList";

export const metadata: Metadata = {
  title: "78 Tarot Cards - Complete Meanings Guide | Dao Light",
  description:
    "Explore all 78 tarot cards — Major and Minor Arcana. Discover upright and reversed meanings, symbolism, keywords, and spiritual guidance for every card in the deck.",
  alternates: { canonical: "/tarot-card" },
};

export default function TarotCardListPage() {
  return <TarotCardListClient />;
}
