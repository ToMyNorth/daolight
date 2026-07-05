"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoinToss from "@/components/divination/CoinToss";
import HexagramDisplay from "@/components/divination/HexagramDisplay";
import AIReading from "@/components/divination/AIReading";
import { getHexagramByLines, type Hexagram } from "@/data/hexagrams";

type Stage = "input" | "casting" | "result" | "reading";

export default function IChingClient() {
  const [stage, setStage] = useState<Stage>("input");
  const [question, setQuestion] = useState("");
  const [hexagram, setHexagram] = useState<Hexagram | null>(null);

  const handleCast = () => {
    setStage("casting");
  };

  const handleTossComplete = useCallback((lines: number[]) => {
    const found = getHexagramByLines(lines);
    if (found) {
      setHexagram(found);
      setStage("result");
      // Auto-trigger AI reading after a short delay to show hexagram
      setTimeout(() => {
        setStage("reading");
      }, 3000);
    }
  }, []);

  const handleCastAgain = () => {
    setStage("input");
    setQuestion("");
    setHexagram(null);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center px-4 py-12">
      <AnimatePresence mode="wait">
        {/* Stage 1: Question Input */}
        {stage === "input" && (
          <motion.div
            key="input"
            className="w-full max-w-xl flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-6xl mb-4">☯</div>
            <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
              I Ching Oracle
            </h1>
            <p className="text-[var(--muted-foreground)] mb-8 text-lg">
              The Book of Changes — 5,000 years of wisdom at your fingertips
            </p>

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What guidance do you seek? (optional)"
              rows={3}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none mb-4"
            />

            <p className="text-sm text-[var(--muted-foreground)] mb-6">
              Focus your mind on your question, then cast the oracle.
            </p>

            <button
              onClick={handleCast}
              className="px-8 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-colors text-lg shadow-lg shadow-[var(--color-primary)]/20"
            >
              Cast the Oracle
            </button>
          </motion.div>
        )}

        {/* Stage 2: Coin Toss Animation */}
        {stage === "casting" && (
          <motion.div
            key="casting"
            className="w-full max-w-xl flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-4xl mb-4">☯</div>
            <CoinToss onComplete={handleTossComplete} />
          </motion.div>
        )}

        {/* Stage 3: Hexagram Display */}
        {stage === "result" && hexagram && (
          <motion.div
            key="result"
            className="w-full max-w-xl flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <HexagramDisplay hexagram={hexagram} />
            <p className="text-sm text-[var(--muted-foreground)] mt-4 animate-pulse">
              Preparing your reading...
            </p>
          </motion.div>
        )}

        {/* Stage 4: AI Reading */}
        {stage === "reading" && hexagram && (
          <motion.div
            key="reading"
            className="w-full max-w-2xl flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Mini hexagram header */}
            <div className="text-center mb-4">
              <span className="text-3xl">{hexagram.symbol}</span>
              <h2 className="text-xl font-bold text-[var(--foreground)]">
                {hexagram.name} {hexagram.namePinyin} —{" "}
                {hexagram.nameEnglish}
              </h2>
            </div>

            <AIReading
              hexagram={hexagram}
              question={question}
              onCastAgain={handleCastAgain}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
