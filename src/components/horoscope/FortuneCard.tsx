"use client";

import { motion } from "framer-motion";
import type { DailyFortune } from "@/data/zodiac";

// ── Star Rating Component ─────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`text-xl ${i < rating ? "opacity-100" : "opacity-25"}`}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

// ── Animated Progress Bar ──────────────────────────────────────────────
function ProgressBar({
  label,
  value,
  emoji,
  color,
  delay,
}: {
  label: string;
  value: number;
  emoji: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-[var(--foreground)]">
          {emoji} {label}
        </span>
        <span className="text-sm font-bold text-[var(--foreground)]">
          {value}%
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-[var(--muted)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}

// ── Fortune Card Component ─────────────────────────────────────────────
interface FortuneCardProps {
  fortune: DailyFortune;
}

export default function FortuneCard({ fortune }: FortuneCardProps) {
  const dimensions = [
    { label: "Love", value: fortune.love, emoji: "💕", color: "#EC4899", text: fortune.loveText },
    { label: "Career", value: fortune.career, emoji: "💼", color: "#3B82F6", text: fortune.careerText },
    { label: "Health", value: fortune.health, emoji: "🏃", color: "#10B981", text: fortune.healthText },
    { label: "Finance", value: fortune.finance, emoji: "💰", color: "#F59E0B", text: fortune.financeText },
  ];

  return (
    <div className="space-y-8">
      {/* ── Overall Rating Card ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 text-center"
      >
        <h2 className="text-lg font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
          Overall Fortune
        </h2>
        <StarRating rating={fortune.overall} />
        <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
          {fortune.overallText}
        </p>
      </motion.div>

      {/* ── Four Dimensions Card ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8"
      >
        <h2 className="text-lg font-semibold text-[var(--foreground)] mb-6">
          Fortune Dimensions
        </h2>
        <div className="space-y-5">
          {dimensions.map((dim, i) => (
            <ProgressBar
              key={dim.label}
              label={dim.label}
              value={dim.value}
              emoji={dim.emoji}
              color={dim.color}
              delay={0.15 + i * 0.1}
            />
          ))}
        </div>

        {/* Dimension text paragraphs */}
        <div className="mt-8 space-y-6">
          {dimensions.map((dim, i) => (
            <motion.div
              key={dim.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
            >
              <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
                {dim.emoji} {dim.label} Reading
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {dim.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Lucky Elements Card ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8"
      >
        <h2 className="text-lg font-semibold text-[var(--foreground)] mb-6">
          Lucky Elements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Lucky Color */}
          <div className="text-center">
            <div className="text-sm text-[var(--muted-foreground)] mb-3">
              Lucky Color
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-xl border-2 border-[var(--border)] shadow-inner"
                style={{ backgroundColor: fortune.luckyColor.hex }}
              />
              <span className="text-sm font-medium text-[var(--foreground)]">
                {fortune.luckyColor.name}
              </span>
            </div>
          </div>

          {/* Lucky Number */}
          <div className="text-center">
            <div className="text-sm text-[var(--muted-foreground)] mb-3">
              Lucky Number
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--color-accent)]">
                  {fortune.luckyNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Lucky Direction */}
          <div className="text-center">
            <div className="text-sm text-[var(--muted-foreground)] mb-3">
              Lucky Direction
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-mystic)]/10 flex items-center justify-center">
                <span className="text-lg font-bold text-[var(--color-mystic)]">
                  {fortune.luckyDirection}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
