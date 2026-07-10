import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, Wind, Flame, Droplets, Mountain } from "lucide-react";
import { tarotCards, type TarotCard } from "@/data/tarotCards";

// ── Static Params ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return tarotCards.map((card) => ({ slug: card.slug }));
}

// ── Dynamic Metadata ─────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const card = tarotCards.find((c) => c.slug === slug);
  if (!card) {
    return { title: "Card Not Found" };
  }

  return {
    title: `${card.name} Tarot Card - Upright & Reversed Meanings | Dao Light`,
    description: `Explore the meaning of ${card.name} (${card.type === "major" ? "Major Arcana" : `${card.suit}`}) — upright and reversed interpretations, symbolism, keywords, and spiritual guidance.`,
    alternates: { canonical: `/tarot-card/${card.slug}` },
  };
}

// ── Element Icon ─────────────────────────────────────────────────────────
function ElementIcon({ element }: { element: string }) {
  const cls = "w-4 h-4";
  switch (element) {
    case "Air":
      return <Wind className={cls} />;
    case "Fire":
      return <Flame className={cls} />;
    case "Water":
      return <Droplets className={cls} />;
    case "Earth":
      return <Mountain className={cls} />;
    default:
      return <Sparkles className={cls} />;
  }
}

// ── Suit color map ────────────────────────────────────────────────────────
const SUIT_COLORS: Record<string, string> = {
  Wands: "bg-red-500/20 text-red-300 border-red-500/30",
  Cups: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Swords: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  Pentacles: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

// ── Page Component ───────────────────────────────────────────────────────
export default async function TarotCardDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = tarotCards.find((c) => c.slug === slug);

  if (!card) {
    notFound();
  }

  // Resolve related cards
  const relatedCards = card.relatedSlugs
    .map((s) => tarotCards.find((c) => c.slug === s))
    .filter(Boolean) as TarotCard[];

  const isMajor = card.type === "major";
  const accentColor = isMajor ? "#F59E0B" : "#10B981";

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <div className="text-center mb-12">
        {/* Card number badge */}
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full text-lg font-bold mb-4"
          style={{
            backgroundColor: isMajor ? "rgba(245,158,11,0.15)" : "rgba(16,185,129,0.15)",
            color: accentColor,
            border: `1.5px solid ${accentColor}40`,
          }}
        >
          {isMajor ? card.number : card.number}
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
          {card.name}
        </h1>

        {/* Type + Suit + Element */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border"
            style={{
              backgroundColor: isMajor ? "rgba(245,158,11,0.15)" : "rgba(139,92,246,0.15)",
              color: isMajor ? "#F59E0B" : "#8B5CF6",
              borderColor: isMajor ? "rgba(245,158,11,0.3)" : "rgba(139,92,246,0.3)",
            }}
          >
            {isMajor ? "Major Arcana" : "Minor Arcana"}
          </span>

          {card.suit && (
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${SUIT_COLORS[card.suit] ?? ""}`}
            >
              {card.suit}
            </span>
          )}

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border bg-white/5 text-gray-300 border-white/10">
            <ElementIcon element={card.element} />
            {card.element}
          </span>
        </div>

        {/* Keywords */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {card.keywords.map((kw) => (
            <span
              key={kw}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* ── Upright Meaning ──────────────────────────────────────────── */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold mb-3 flex items-center gap-2"
          style={{ color: accentColor }}
        >
          <Sparkles className="w-5 h-5" />
          Upright Meaning
        </h2>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            {card.uprightMeaning}
          </p>
        </div>
      </section>

      {/* ── Reversed Meaning ─────────────────────────────────────────── */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-[#8B5CF6]">
          <ArrowRight className="w-5 h-5 rotate-180" />
          Reversed Meaning
        </h2>
        <div className="rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 p-5">
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            {card.reversedMeaning}
          </p>
        </div>
      </section>

      {/* ── Symbolism ─────────────────────────────────────────────────── */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-[#10B981] flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Symbolism
        </h2>
        <div className="rounded-xl border border-[#10B981]/20 bg-[#10B981]/5 p-5">
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            {card.symbolism}
          </p>
        </div>
      </section>

      {/* ── Advice ────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3 text-[#F59E0B] flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Guidance & Advice
        </h2>
        <div className="rounded-xl border border-[#F59E0B]/20 bg-[#F59E0B]/5 p-5">
          <p className="text-[var(--muted-foreground)] leading-relaxed italic">
            &ldquo;{card.advice}&rdquo;
          </p>
        </div>
      </section>

      {/* ── Related Cards ─────────────────────────────────────────────── */}
      {relatedCards.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-[var(--foreground)]">
            Related Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedCards.map((rel) => (
              <Link
                key={rel.slug}
                href={`/tarot-card/${rel.slug}`}
                className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#10B981]/40 hover:bg-[#10B981]/5 transition-all"
              >
                <p className="font-semibold text-[var(--foreground)] group-hover:text-[#10B981] transition-colors">
                  {rel.name}
                </p>
                <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                  {rel.type === "major" ? "Major Arcana" : rel.suit} · {rel.element}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Navigation ───────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
        <Link
          href="/tarot-card"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#10B981] hover:text-[#34D399] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All 78 Tarot Cards
        </Link>
        <Link
          href="/tarot"
          className="text-sm font-medium text-[#F59E0B] hover:text-[#FBBF24] transition-colors"
        >
          Tarot Reading Home →
        </Link>
      </div>
    </div>
  );
}
