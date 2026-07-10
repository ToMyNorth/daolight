"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, Sparkles, X } from "lucide-react";
import { tarotCards } from "@/data/tarotCards";

// ── Constants ─────────────────────────────────────────────────────────────
const SUITS = ["Wands", "Cups", "Swords", "Pentacles"] as const;

const SUIT_COLORS: Record<string, { text: string }> = {
  Wands:     { text: "text-red-300" },
  Cups:      { text: "text-blue-300" },
  Swords:    { text: "text-sky-300" },
  Pentacles: { text: "text-emerald-300" },
};

type FilterType = "all" | "major" | "minor" | "Wands" | "Cups" | "Swords" | "Pentacles";

// ── Component ─────────────────────────────────────────────────────────────
export default function TarotCardListClient() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = useMemo(() => {
    return tarotCards.filter((card) => {
      if (query) {
        const q = query.toLowerCase();
        const match =
          card.name.toLowerCase().includes(q) ||
          card.keywords.some((k) => k.toLowerCase().includes(q)) ||
          card.element.toLowerCase().includes(q);
        if (!match) return false;
      }
      if (filter === "all") return true;
      if (filter === "major") return card.type === "major";
      if (filter === "minor") return card.type === "minor";
      return card.suit === filter;
    });
  }, [query, filter]);

  const majorCards = filtered.filter((c) => c.type === "major");
  const minorCards = filtered.filter((c) => c.type === "minor");

  const groupedBySuit = SUITS.map((suit) => ({
    suit,
    cards: minorCards.filter((c) => c.suit === suit),
  })).filter((g) => g.cards.length > 0);

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "All 78", value: "all" },
    { label: "Major Arcana", value: "major" },
    { label: "Minor Arcana", value: "minor" },
    { label: "Wands", value: "Wands" },
    { label: "Cups", value: "Cups" },
    { label: "Swords", value: "Swords" },
    { label: "Pentacles", value: "Pentacles" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 mb-4">
          <Sparkles className="w-8 h-8 text-[#F59E0B]" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
          78 Tarot Cards
        </h1>
        <p className="mt-3 text-[var(--muted-foreground)] max-w-xl mx-auto">
          A complete guide to all Major and Minor Arcana — explore upright meanings,
          reversed meanings, symbolism, and spiritual guidance for every card.
        </p>
      </div>

      {/* ── Search + Filter ─────────────────────────────────────────── */}
      <div className="mb-10 space-y-4">
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search cards, keywords, elements…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[var(--foreground)] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]/50 transition"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {filterButtons.map(({ label, value }) => {
            const active = filter === value;
            return (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={[
                  "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all",
                  active
                    ? "bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40"
                    : "bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-gray-200",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Results count ───────────────────────────────────────────── */}
      <p className="text-xs text-[var(--muted-foreground)] mb-6 text-center">
        Showing{" "}
        <span className="text-[var(--foreground)] font-semibold">{filtered.length}</span>{" "}
        of 78 cards
      </p>

      {/* ── Major Arcana ─────────────────────────────────────────────── */}
      {majorCards.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-5 flex items-center gap-2 text-[#F59E0B]">
            <Sparkles className="w-5 h-5" />
            Major Arcana
            <span className="ml-2 text-sm font-normal text-[var(--muted-foreground)]">
              ({majorCards.length})
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {majorCards.map((card) => (
              <CardTile
                key={card.slug}
                slug={card.slug}
                name={card.name}
                sub={`#${card.number} · ${card.element}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Minor Arcana by suit ────────────────────────────────────── */}
      {groupedBySuit.map(({ suit, cards }) => {
        const color = SUIT_COLORS[suit];
        return (
          <section key={suit} className="mb-10">
            <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 ${color?.text ?? "text-gray-300"}`}>
              {suit}
              <span className="ml-1 text-sm font-normal text-[var(--muted-foreground)]">
                ({cards.length})
              </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cards.map((card) => (
                <CardTile
                  key={card.slug}
                  slug={card.slug}
                  name={card.name}
                  sub={`#${card.number} · ${card.element}`}
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* ── Empty state ─────────────────────────────────────────────── */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <Filter className="w-10 h-10 mx-auto text-gray-600 mb-3" />
          <p className="text-[var(--muted-foreground)]">No cards match your search.</p>
          <button
            onClick={() => { setQuery(""); setFilter("all"); }}
            className="mt-3 text-sm text-[#10B981] hover:text-[#34D399] transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* ── Bottom nav ──────────────────────────────────────────────── */}
      <div className="mt-12 text-center border-t border-white/10 pt-8">
        <Link
          href="/tarot"
          className="text-sm font-medium text-[#F59E0B] hover:text-[#FBBF24] transition-colors"
        >
          ← Back to Tarot Reading
        </Link>
      </div>
    </div>
  );
}

// ── Card tile ─────────────────────────────────────────────────────────────
function CardTile({ slug, name, sub }: { slug: string; name: string; sub: string }) {
  return (
    <Link
      href={`/tarot-card/${slug}`}
      className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#10B981]/40 hover:bg-[#10B981]/5 transition-all block"
    >
      <p className="font-semibold text-[var(--foreground)] group-hover:text-[#10B981] transition-colors text-sm leading-tight">
        {name}
      </p>
      <p className="mt-1 text-xs text-[var(--muted-foreground)]">{sub}</p>
    </Link>
  );
}
