import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FortuneCard from "@/components/horoscope/FortuneCard";
import { getZodiacBySlug, generateDailyFortune } from "@/data/zodiac";

// ── Valid sign slugs ──────────────────────────────────────────────────────
const VALID_SLUGS = [
  "aries", "taurus", "gemini", "cancer", "leo", "virgo",
  "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces",
];

// ── Static Params ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return VALID_SLUGS.map((sign) => ({ sign }));
}

// ── Dynamic Metadata ─────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ sign: string }>;
}): Promise<Metadata> {
  const { sign } = await params;
  const zodiac = getZodiacBySlug(sign);
  if (!zodiac) {
    return { title: "Sign Not Found" };
  }
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    title: `${zodiac.name} Daily Horoscope - ${dateStr}`,
    description: `Read today's ${zodiac.name} horoscope for love, career, health and finance. Lucky color, number and direction for ${zodiac.name} today.`,
  };
}

// ── Page Component ───────────────────────────────────────────────────────
export default async function HoroscopeSignPage({
  params,
}: {
  params: Promise<{ sign: string }>;
}) {
  const { sign } = await params;

  if (!VALID_SLUGS.includes(sign)) {
    notFound();
  }

  const zodiac = getZodiacBySlug(sign);
  if (!zodiac) {
    notFound();
  }

  const today = new Date();
  const fortune = generateDailyFortune(sign, today);
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="text-center mb-12">
        <div className="text-6xl sm:text-7xl mb-4">
          {zodiac.symbol}
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
          {zodiac.name}
        </h1>
        <p className="mt-2 text-base text-[var(--muted-foreground)]">
          {zodiac.dates} · {zodiac.element} · Ruled by {zodiac.ruler}
        </p>
        <p className="mt-3 text-sm text-[var(--muted-foreground)]">
          Daily Horoscope for {dateStr}
        </p>
        <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed max-w-lg mx-auto italic">
          &ldquo;{zodiac.description}&rdquo;
        </p>
      </div>

      {/* ── Fortune Card ────────────────────────────────────────────── */}
      <FortuneCard fortune={fortune} />

      {/* ── Navigation ──────────────────────────────────────────────── */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/horoscope"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Signs
        </Link>
        <Link
          href="/horoscope"
          className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
        >
          Check Another Sign →
        </Link>
      </div>
    </div>
  );
}


