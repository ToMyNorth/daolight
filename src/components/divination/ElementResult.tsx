"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ELEMENTS, ELEMENT_NAMES } from "@/data/five-elements";
import RadarChart from "./RadarChart";

interface ElementResultProps {
  scores: Record<string, number>;
  dominantElement: string;
  onRestart: () => void;
}

export default function ElementResult({
  scores,
  dominantElement,
  onRestart,
}: ElementResultProps) {
  const element = ELEMENTS[dominantElement];
  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <p className="text-sm uppercase tracking-widest text-[var(--muted-foreground)] mb-2">
          Your Dominant Element Is
        </p>
        <div
          className="text-7xl mb-3"
          style={{ textShadow: `0 0 40px ${element.color}` }}
        >
          {element.emoji}
        </div>
        <h2
          className="text-4xl font-bold mb-1"
          style={{ color: element.color }}
        >
          {element.name}
        </h2>
        <p className="text-lg text-[var(--muted-foreground)]">
          {element.nameCn} · {element.season} · {element.direction}
        </p>
      </motion.div>

      {/* Radar chart */}
      <motion.div
        custom={1}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mb-10"
      >
        <h3 className="text-center text-sm uppercase tracking-widest text-[var(--muted-foreground)] mb-4">
          Elemental Distribution
        </h3>
        <RadarChart scores={scores} size={320} />
      </motion.div>

      {/* Description */}
      <motion.div
        custom={2}
        variants={fade}
        initial="hidden"
        animate="show"
        className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 mb-6"
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: element.color }}>
          About the {element.name} Personality
        </h3>
        <p className="text-[var(--muted-foreground)] leading-relaxed">
          {element.description}
        </p>
      </motion.div>

      {/* Core Traits */}
      <motion.div
        custom={3}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mb-6"
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: element.color }}>
          Core Traits
        </h3>
        <div className="flex flex-wrap gap-2">
          {element.traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full text-sm font-medium border"
              style={{
                borderColor: element.color,
                color: element.color,
                backgroundColor: `${element.color}15`,
              }}
            >
              {trait}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Strengths & Challenges */}
      <motion.div
        custom={4}
        variants={fade}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
      >
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-green-500">✦</span> Strengths
          </h4>
          <ul className="space-y-2">
            {element.strengths.map((s, i) => (
              <li
                key={i}
                className="text-sm text-[var(--muted-foreground)] flex items-start gap-2"
              >
                <span className="text-green-500 mt-0.5">→</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-amber-500">⚠</span> Challenges
          </h4>
          <ul className="space-y-2">
            {element.challenges.map((c, i) => (
              <li
                key={i}
                className="text-sm text-[var(--muted-foreground)] flex items-start gap-2"
              >
                <span className="text-amber-500 mt-0.5">→</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Element Cycles */}
      <motion.div
        custom={5}
        variants={fade}
        initial="hidden"
        animate="show"
        className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 mb-10"
      >
        <h3 className="text-lg font-semibold mb-4" style={{ color: element.color }}>
          Element Relationships
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Generating Cycle */}
          <div>
            <h4 className="text-sm uppercase tracking-wide text-[var(--muted-foreground)] mb-3">
              Generating Cycle (相生)
            </h4>
            <div className="flex flex-wrap items-center gap-1 text-sm">
              {ELEMENT_NAMES.map((name, i) => (
                <span key={name} className="flex items-center gap-1">
                  <span
                    className={
                      name === dominantElement ? "font-bold" : "text-[var(--muted-foreground)]"
                    }
                    style={name === dominantElement ? { color: element.color } : undefined}
                  >
                    {ELEMENTS[name].emoji} {name}
                  </span>
                  {i < ELEMENT_NAMES.length - 1 && (
                    <span className="text-[var(--muted-foreground)]">→</span>
                  )}
                </span>
              ))}
              <span className="text-[var(--muted-foreground)]">→ 🌳 Wood</span>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] mt-2">
              {dominantElement} generates {ELEMENTS[dominantElement].generates} and is
              generated by{" "}
              {ELEMENT_NAMES.find((n) => ELEMENTS[n].generates === dominantElement)}.
            </p>
          </div>

          {/* Controlling Cycle */}
          <div>
            <h4 className="text-sm uppercase tracking-wide text-[var(--muted-foreground)] mb-3">
              Controlling Cycle (相克)
            </h4>
            <div className="flex flex-wrap items-center gap-1 text-sm">
              {["Wood", "Earth", "Water", "Fire", "Metal"].map((name, i) => (
                <span key={name} className="flex items-center gap-1">
                  <span
                    className={
                      name === dominantElement ? "font-bold" : "text-[var(--muted-foreground)]"
                    }
                    style={name === dominantElement ? { color: element.color } : undefined}
                  >
                    {ELEMENTS[name].emoji} {name}
                  </span>
                  {i < 4 && (
                    <span className="text-[var(--muted-foreground)]">⊣</span>
                  )}
                </span>
              ))}
              <span className="text-[var(--muted-foreground)]">⊣ 🌳 Wood</span>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] mt-2">
              {dominantElement} controls {ELEMENTS[dominantElement].controls} and is
              controlled by{" "}
              {ELEMENT_NAMES.find((n) => ELEMENTS[n].controls === dominantElement)}.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        custom={6}
        variants={fade}
        initial="hidden"
        animate="show"
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={onRestart}
          className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors font-medium"
        >
          Take the Test Again
        </button>
        <Link
          href="/iching"
          className="px-6 py-3 rounded-xl text-white font-medium text-center transition-all hover:brightness-110"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Try the I Ching Oracle →
        </Link>
      </motion.div>
    </div>
  );
}
