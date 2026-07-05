"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ELEMENTS, ELEMENT_NAMES, calculateScores, getDominantElement } from "@/data/five-elements";
import QuizFlow from "@/components/divination/QuizFlow";
import ElementResult from "@/components/divination/ElementResult";

type Stage = "intro" | "quiz" | "result";

export default function FiveElementsClient() {
  const [stage, setStage] = useState<Stage>("intro");
  const [scores, setScores] = useState<Record<string, number>>({});
  const [dominant, setDominant] = useState("Wood");

  const handleQuizComplete = (answers: Record<number, string>) => {
    const s = calculateScores(answers);
    const d = getDominantElement(s);
    setScores(s);
    setDominant(d);
    setStage("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRestart = () => {
    setStage("intro");
    setScores({});
    setDominant("Wood");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen py-16">
      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto px-4 text-center"
          >
            {/* Hero */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-6xl mb-6"
            >
              ☯
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              Five Elements Personality Test
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] mb-10 max-w-xl mx-auto">
              Discover your elemental archetype through 5,000 years of Eastern wisdom
            </p>

            {/* Element cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
              {ELEMENT_NAMES.map((name, i) => {
                const el = ELEMENTS[name];
                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-center"
                  >
                    <div className="text-3xl mb-2">{el.emoji}</div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: el.color }}
                    >
                      {name}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-1">
                      {el.traits[0]} · {el.traits[1]}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* What is five elements */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 mb-10 text-left">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">
                What are the Five Elements?
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                The Five Elements (五行, Wu Xing) is an ancient Chinese philosophical system
                that describes the fundamental forces of nature and their interrelationships.
                Used for over 5,000 years in medicine, martial arts, feng shui, and
                self-understanding, this framework reveals how different energies interact,
                support, and balance one another — and within you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {ELEMENT_NAMES.map((name) => {
                  const el = ELEMENTS[name];
                  return (
                    <div key={name} className="flex items-center gap-2">
                      <span>{el.emoji}</span>
                      <span className="font-medium" style={{ color: el.color }}>
                        {name} ({el.nameCn})
                      </span>
                      <span className="text-[var(--muted-foreground)]">
                        — {el.season}, {el.direction}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setStage("quiz")}
              className="px-10 py-4 rounded-2xl text-white font-semibold text-lg transition-all hover:brightness-110 shadow-lg shadow-emerald-500/20"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Start the Test
            </motion.button>
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              Takes about 2 minutes · 15 questions
            </p>
          </motion.div>
        )}

        {stage === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="py-8"
          >
            <QuizFlow onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {stage === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="py-8"
          >
            <ElementResult
              scores={scores}
              dominantElement={dominant}
              onRestart={handleRestart}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
