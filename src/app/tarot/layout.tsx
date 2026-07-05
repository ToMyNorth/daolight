import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tarot Reading - Past, Present & Future | Dao Light",
  description:
    "Draw three tarot cards and receive an AI-powered reading that blends Western tarot tradition with Eastern philosophical wisdom.",
};

export default function TarotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
