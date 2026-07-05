"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  BookOpen,
  Sparkles,
  Star,
  Flame,
  MessageCircle,
  Wand2,
  Lightbulb,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ─── animation variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── data ─── */
const features = [
  {
    icon: BookOpen,
    title: "I Ching Oracle",
    desc: "Cast the ancient oracle through a coin toss ritual and receive AI-powered wisdom from 5,000 years of philosophy.",
    href: "/iching",
    accent: "var(--color-primary)",
  },
  {
    icon: Sparkles,
    title: "AI Tarot Reading",
    desc: "Draw three cards and let AI weave a personalized narrative blending Eastern and Western divination traditions.",
    href: "/tarot",
    accent: "var(--color-mystic)",
  },
  {
    icon: Star,
    title: "Daily Horoscope",
    desc: "Discover your daily cosmic guidance across love, career, health and finance — for all 12 zodiac signs.",
    href: "/horoscope",
    accent: "var(--color-accent)",
  },
  {
    icon: Flame,
    title: "Five Elements Test",
    desc: "Take our personality quiz to discover your elemental archetype: Wood, Fire, Earth, Metal, or Water.",
    href: "/five-elements",
    accent: "var(--color-primary-light)",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Ask Your Question",
    desc: "Focus your mind and type what guidance you seek — or simply explore with an open heart.",
  },
  {
    icon: Wand2,
    title: "Receive Your Reading",
    desc: "Our AI interprets ancient wisdom — I Ching hexagrams, Tarot cards, or star alignments — into personalized insights.",
  },
  {
    icon: Lightbulb,
    title: "Discover Ancient Wisdom",
    desc: "Each reading weaves in cultural knowledge from Eastern philosophy, helping you understand the deeper meaning.",
  },
];

const trustPoints = [
  "The I Ching influenced thinkers from Carl Jung to Hermann Hesse",
  "Tarot and astrology have guided millions in self-discovery",
  "Five Elements theory underpins Traditional Chinese Medicine",
];

/* ─── component ─── */
export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* ══════════════════════════════════════════
          YIN-YANG BACKGROUND
      ══════════════════════════════════════════ */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="yin-yang-wrapper">
          <div className="yin-yang" />
        </div>
      </div>

      {/* subtle radial glow behind hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[80vh] bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(16,185,129,0.08),transparent)]" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative z-10 flex min-h-[88vh] flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          {/* decorative top ornament */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-accent)]">
              5,000 Years of Wisdom
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Ancient Eastern Wisdom,
            <br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-accent)] bg-clip-text text-transparent">
              One Question Away
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg"
          >
            Discover the I Ching, Tarot, Horoscopes and Five Elements —
            interpreted by AI with 5,000 years of philosophical depth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/iching"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-primary)]/30 hover:brightness-110"
            >
              Start Your Reading
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/five-elements"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/50 px-8 py-3.5 text-sm font-semibold text-[var(--foreground)] backdrop-blur-sm transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--card)]"
            >
              Explore Five Elements Test
              <ChevronRight className="h-4 w-4 text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
              Scroll
            </span>
            <div className="h-8 w-px animate-pulse bg-gradient-to-b from-[var(--color-primary)] to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE GRID
      ══════════════════════════════════════════ */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Explore
            </span>
            <h2
              className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Four Paths to Wisdom
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {features.map((f, i) => (
              <motion.div key={f.href} variants={fadeUp} custom={i}>
                <Link
                  href={f.href}
                  className="group relative block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-transparent hover:bg-[var(--card)]/80 hover:shadow-2xl"
                  style={
                    {
                      "--glow": f.accent,
                    } as React.CSSProperties
                  }
                >
                  {/* hover glow border */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--glow) 20%, transparent), transparent 60%)`,
                      boxShadow: `inset 0 0 0 1px color-mix(in srgb, var(--glow) 40%, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="mb-5 inline-flex items-center justify-center rounded-xl p-3"
                      style={{
                        background: `color-mix(in srgb, ${f.accent} 12%, transparent)`,
                      }}
                    >
                      <f.icon
                        className="h-6 w-6"
                        style={{ color: f.accent }}
                      />
                    </div>
                    <h3
                      className="mb-3 text-xl font-bold text-[var(--foreground)]"
                      style={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                      }}
                    >
                      {f.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {f.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:text-[var(--color-primary)]"
                      style={{ color: f.accent }}>
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="relative z-10 border-y border-[var(--border)] bg-[var(--card)]/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Simple & Intuitive
              </span>
              <h2
                className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                How Dao Light Works
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  custom={i}
                  className="relative text-center"
                >
                  {/* step number */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                    <s.icon className="h-7 w-7 text-[var(--color-primary)]" />
                  </div>
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    Step {i + 1}
                  </span>
                  <h3
                    className="mb-3 text-lg font-bold text-[var(--foreground)]"
                    style={{
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {s.desc}
                  </p>
                  {/* connector line (desktop) */}
                  {i < 2 && (
                    <div className="absolute right-0 top-8 hidden h-px w-1/2 translate-x-1/2 bg-gradient-to-r from-[var(--border)] to-transparent md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST SECTION
      ══════════════════════════════════════════ */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 py-24 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-mystic)]">
              Timeless Knowledge
            </span>
            <h2
              className="mb-16 text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Backed by 5,000 Years
              <br />
              <span className="text-[var(--color-accent)]">of Philosophy</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {trustPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="group flex items-start gap-5 rounded-xl border border-[var(--border)]/60 bg-[var(--card)]/40 p-6 text-left backdrop-blur-sm transition-all hover:border-[var(--color-accent)]/30 hover:bg-[var(--card)]/60"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                  <span className="text-sm font-bold text-[var(--color-accent)]">
                    {i + 1}
                  </span>
                </div>
                <p
                  className="text-base leading-relaxed text-[var(--foreground)] sm:text-lg"
                  style={{
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                  }}
                >
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]/60 p-12 text-center backdrop-blur-sm sm:p-16"
        >
          {/* decorative gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.06),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_100%,rgba(245,158,11,0.05),transparent)]" />

          <div className="relative z-10">
            <motion.h2
              variants={fadeUp}
              className="mb-4 text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Ready to Explore Ancient Wisdom?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mx-auto mb-10 max-w-lg text-base text-[var(--muted-foreground)]"
            >
              Your journey into Eastern philosophy starts with a single question.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="/iching"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-primary)]/30 hover:brightness-110"
              >
                Begin Your I Ching Reading
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/five-elements"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--color-accent)]"
              >
                Or try our Five Elements personality test
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          YIN-YANG CSS KEYFRAMES (scoped via style tag)
      ══════════════════════════════════════════ */}
      <style jsx global>{`
        .yin-yang-wrapper {
          width: min(70vw, 600px);
          height: min(70vw, 600px);
          opacity: 0.03;
          animation: yin-spin 60s linear infinite;
        }
        .yin-yang {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(
            to right,
            var(--color-primary) 50%,
            var(--foreground) 50%
          );
          position: relative;
        }
        .yin-yang::before,
        .yin-yang::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          width: 50%;
          height: 50%;
          left: 50%;
          transform: translateX(-50%);
        }
        .yin-yang::before {
          top: 0;
          background: var(--foreground);
          box-shadow: inset 0 0 0 calc(50% - min(3.5vw, 30px))
              var(--foreground),
            inset 0 0 0 50% var(--color-primary);
        }
        .yin-yang::after {
          bottom: 0;
          background: var(--color-primary);
          box-shadow: inset 0 0 0 calc(50% - min(3.5vw, 30px))
              var(--color-primary),
            inset 0 0 0 50% var(--foreground);
        }
        @keyframes yin-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
