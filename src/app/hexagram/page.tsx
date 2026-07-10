import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HexagramGrid from "./HexagramGrid";

export const metadata: Metadata = {
  title: "64 I Ching Hexagrams - Complete Guide | Dao Light",
  description:
    "Explore all 64 I Ching hexagrams with meanings, judgments, and interpretations. A complete guide to the ancient Chinese Book of Changes.",
};

export default function HexagramListPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
          64 I Ching Hexagrams
        </h1>
        <p className="mt-3 text-[var(--muted-foreground)] max-w-xl mx-auto">
          The complete Book of Changes — explore each hexagram&apos;s wisdom, judgment, and symbolic meaning.
        </p>
      </div>

      {/* ── Grid (client, with search) ──────────────────────────────── */}
      <HexagramGrid />

      {/* ── Navigation ──────────────────────────────────────────────── */}
      <div className="mt-12 text-center">
        <Link
          href="/iching"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to I Ching Home
        </Link>
      </div>
    </div>
  );
}
