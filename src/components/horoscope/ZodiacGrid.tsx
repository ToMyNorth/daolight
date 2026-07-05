"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { zodiacSigns } from "@/data/zodiac";

export default function ZodiacGrid() {
  return (
    <section>
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-accent)]/10 mb-6">
          <span className="text-4xl">✨</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
          Daily Horoscope
        </h1>
        <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-xl mx-auto">
          Your cosmic guidance for today — across love, career, health and fortune
        </p>
      </div>

      {/* ── Section Header ───────────────────────────────────────────── */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-[var(--border)]" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
          Choose Your Sign
        </h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      {/* ── Zodiac Grid ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {zodiacSigns.map((sign, i) => (
          <motion.div
            key={sign.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
          >
            <Link
              href={`/horoscope/${sign.slug}`}
              className="group relative block overflow-hidden rounded-xl bg-[var(--card)] border border-[var(--border)] p-6 transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Symbol */}
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {sign.symbol}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                  {sign.name}
                </h3>

                {/* Dates */}
                <p className="text-sm text-[var(--muted-foreground)]">
                  {sign.dates}
                </p>

                {/* Traits */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {sign.traits.slice(0, 2).map((trait) => (
                    <span
                      key={trait}
                      className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
