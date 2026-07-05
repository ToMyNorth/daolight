"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { getRandomCards, type TarotCard } from "@/data/tarot-cards";
import TarotCardComponent from "./TarotCard";

interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
  label: string;
}

interface TarotSpreadProps {
  onReadingReady: (drawnCards: DrawnCard[], question: string) => void;
}

const POSITION_LABELS = ["Past", "Present", "Future"];
const VISIBLE_CARD_COUNT = 16;

export default function TarotSpread({ onReadingReady }: TarotSpreadProps) {
  const [phase, setPhase] = useState<"select" | "revealing" | "revealed">("select");
  const [question, setQuestion] = useState("");
  const [availableCards] = useState(() => getRandomCards(VISIBLE_CARD_COUNT));
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [flippedCount, setFlippedCount] = useState(0);

  const handleCardClick = useCallback((index: number) => {
    if (phase !== "select") return;

    setSelectedIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      if (prev.length >= 3) return prev;
      return [...prev, index];
    });
  }, [phase]);

  const handleDraw = useCallback(() => {
    if (selectedIndices.length !== 3) return;

    const drawn: DrawnCard[] = selectedIndices.map((idx, i) => ({
      card: availableCards[idx],
      isReversed: Math.random() > 0.65,
      label: POSITION_LABELS[i],
    }));

    setDrawnCards(drawn);
    setPhase("revealing");

    // Sequentially flip cards
    drawn.forEach((_, i) => {
      setTimeout(() => {
        setFlippedCount(i + 1);
        if (i === drawn.length - 1) {
          setTimeout(() => {
            setPhase("revealed");
            onReadingReady(drawn, question);
          }, 1000);
        }
      }, (i + 1) * 1200);
    });
  }, [selectedIndices, availableCards, question, onReadingReady]);

  const selectionLabel = useMemo(() => {
    if (phase !== "select") return "";
    return `Select 3 cards (${selectedIndices.length}/3 selected)`;
  }, [phase, selectedIndices.length]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {/* Phase: Select cards */}
        {phase === "select" && (
          <motion.div
            key="select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            className="space-y-8"
          >
            {/* Spread info */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-mystic)]/10 border border-[var(--color-mystic)]/30">
                <span className="text-sm">🔮</span>
                <span className="text-sm font-medium text-[var(--color-mystic-light)]">
                  3-Card Spread: Past / Present / Future
                </span>
              </div>
            </div>

            {/* Question input */}
            <div className="max-w-md mx-auto">
              <label className="block text-sm text-[var(--muted-foreground)] mb-2 text-center">
                Focus your question <span className="opacity-50">(optional)</span>
              </label>
              <input
                type="text"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder="What guidance do you seek?"
                className="w-full px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-mystic)]/50 text-center"
              />
            </div>

            {/* Selection counter */}
            <p className="text-center text-sm text-[var(--muted-foreground)]">
              {selectionLabel}
            </p>

            {/* Card grid - 4x4 */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 justify-items-center max-w-2xl mx-auto">
              {availableCards.map((_, index) => {
                const selIdx = selectedIndices.indexOf(index);
                return (
                  <TarotCardComponent
                    key={index}
                    isSelectable
                    isSelected={selIdx !== -1}
                    selectionIndex={selIdx !== -1 ? selIdx : undefined}
                    onClick={() => handleCardClick(index)}
                    delay={index * 0.04}
                  />
                );
              })}
            </div>

            {/* Draw button */}
            <div className="flex justify-center">
              <button
                onClick={handleDraw}
                disabled={selectedIndices.length !== 3}
                className={cn(
                  "px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300",
                  selectedIndices.length === 3
                    ? "bg-gradient-to-r from-[var(--color-mystic)] to-[var(--color-accent)] text-white hover:shadow-lg hover:shadow-[var(--color-mystic)]/25 hover:scale-105"
                    : "bg-[var(--muted)] text-[var(--muted-foreground)] cursor-not-allowed"
                )}
              >
                {selectedIndices.length === 3 ? "✨ Reveal Your Cards" : "Select 3 cards to continue"}
              </button>
            </div>
          </motion.div>
        )}

        {/* Phase: Revealing / Revealed */}
        {(phase === "revealing" || phase === "revealed") && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {drawnCards.map((dc, i) => (
                <TarotCardComponent
                  key={dc.card.id}
                  card={dc.card}
                  isFlipped={i < flippedCount}
                  isReversed={dc.isReversed}
                  label={dc.label}
                  delay={0}
                />
              ))}
            </div>

            {phase === "revealing" && flippedCount < 3 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-[var(--muted-foreground)] animate-pulse"
              >
                Revealing your cards...
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export type { DrawnCard };
