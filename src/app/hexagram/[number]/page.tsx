import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { hexagrams } from "@/data/hexagrams";

// ── Static Params ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return hexagrams.map((h) => ({ number: String(h.number) }));
}

// ── Dynamic Metadata ─────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ number: string }>;
}): Promise<Metadata> {
  const { number } = await params;
  const hex = hexagrams.find((h) => h.number === Number(number));
  if (!hex) return { title: "Hexagram Not Found" };

  return {
    title: `Hexagram ${hex.number}: ${hex.nameEnglish} (${hex.namePinyin}) - I Ching Meaning | Dao Light`,
    description: hex.judgment.slice(0, 160),
  };
}

// ── Page Component ───────────────────────────────────────────────────────
export default async function HexagramDetailPage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await params;
  const hex = hexagrams.find((h) => h.number === Number(number));
  if (!hex) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="text-center mb-12">
        <div className="text-7xl sm:text-8xl mb-4">{hex.symbol}</div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
          {hex.nameEnglish}
        </h1>
        <p className="mt-2 text-lg text-[var(--muted-foreground)]">
          Hexagram {hex.number} · {hex.name} ({hex.namePinyin})
        </p>
        <p className="mt-3 text-sm text-[var(--muted-foreground)]">
          Upper: {hex.upperTrigram} · Lower: {hex.lowerTrigram}
        </p>
      </div>

      {/* ── Lines ───────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-1 mb-12" aria-label="Hexagram lines">
        {[...hex.lines].reverse().map((line, i) => (
          <div
            key={i}
            className={`flex justify-center ${line === 1 ? "gap-0" : "gap-4"}`}
          >
            {line === 1 ? (
              <div className="w-24 h-2 bg-[var(--foreground)] rounded-sm" />
            ) : (
              <>
                <div className="w-10 h-2 bg-[var(--foreground)] rounded-sm" />
                <div className="w-10 h-2 bg-[var(--foreground)] rounded-sm" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* ── Judgment ────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 border-b border-[var(--border)] pb-2">
          Judgment (卦辞)
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed italic">
          &ldquo;{hex.judgment}&rdquo;
        </p>
      </section>

      {/* ── Image ───────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 border-b border-[var(--border)] pb-2">
          Image (象辞)
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed italic">
          &ldquo;{hex.image}&rdquo;
        </p>
      </section>

      {/* ── Structure ───────────────────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 border-b border-[var(--border)] pb-2">
          Structure
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-xl border border-[var(--border)] p-4 text-center">
            <p className="text-sm text-[var(--muted-foreground)] mb-1">Upper Trigram</p>
            <p className="text-lg font-semibold text-[var(--foreground)]">{hex.upperTrigram}</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-4 text-center">
            <p className="text-sm text-[var(--muted-foreground)] mb-1">Lower Trigram</p>
            <p className="text-lg font-semibold text-[var(--foreground)]">{hex.lowerTrigram}</p>
          </div>
        </div>
      </section>

      {/* ── Navigation ──────────────────────────────────────────────── */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/hexagram"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All 64 Hexagrams
        </Link>
        <Link
          href="/iching"
          className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
        >
          I Ching Home →
        </Link>
      </div>
    </div>
  );
}
