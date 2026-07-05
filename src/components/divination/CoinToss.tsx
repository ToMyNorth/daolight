"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CoinTossProps {
  onComplete: (lines: number[]) => void;
}

interface CoinState {
  id: number;
  isHeads: boolean;
  isFlipping: boolean;
}

export default function CoinToss({ onComplete }: CoinTossProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [coins, setCoins] = useState<CoinState[]>([
    { id: 0, isHeads: true, isFlipping: false },
    { id: 1, isHeads: false, isFlipping: false },
    { id: 2, isHeads: true, isFlipping: false },
  ]);
  const [lines, setLines] = useState<number[]>([]);
  const isTossing = useRef(false);
  const completedRef = useRef(false);

  const tossOnce = useCallback(async () => {
    if (isTossing.current) return;
    isTossing.current = true;

    setCoins((prev) => prev.map((c) => ({ ...c, isFlipping: true })));
    await new Promise((r) => setTimeout(r, 1000));

    const results = [0, 1, 2].map(() => Math.random() > 0.5);
    const headsCount = results.filter(Boolean).length;
    const isYang = headsCount >= 2;

    setCoins([
      { id: 0, isHeads: results[0], isFlipping: false },
      { id: 1, isHeads: results[1], isFlipping: false },
      { id: 2, isHeads: results[2], isFlipping: false },
    ]);

    setLines((prev) => [...prev, isYang ? 1 : 0]);
    setCurrentLine((prev) => prev + 1);
    isTossing.current = false;
  }, []);

  useEffect(() => {
    if (currentLine >= 6) {
      if (!completedRef.current) {
        completedRef.current = true;
        setLines((prev) => {
          onComplete(prev);
          return prev;
        });
      }
      return;
    }
    if (!isTossing.current) {
      const timer = setTimeout(() => {
        tossOnce();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentLine, tossOnce, onComplete]);

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Progress */}
      <div className="text-center">
        <p className="text-[var(--muted-foreground)] text-sm mb-2">
          Casting hexagram...
        </p>
        <p className="text-[var(--foreground)] text-lg font-medium">
          Line {Math.min(currentLine + 1, 6)} of 6
        </p>
        <div className="flex gap-1 mt-3 justify-center">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`w-8 h-1 rounded ${
                line === 1
                  ? "bg-[var(--color-accent)]"
                  : "bg-[var(--color-primary)]"
              }`}
            />
          ))}
          {Array.from({ length: 6 - lines.length }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="w-8 h-1 rounded bg-[var(--border)]"
            />
          ))}
        </div>
      </div>

      {/* Coins */}
      <div className="flex gap-4 items-center justify-center">
        {coins.map((coin) => (
          <motion.div
            key={coin.id}
            className="relative w-16 h-16"
            style={{ perspective: "200px" }}
          >
            <AnimatePresence mode="wait">
              {coin.isFlipping ? (
                <motion.div
                  key="flipping"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: [0, 180, 360, 540, 720] }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] flex items-center justify-center shadow-lg border-2 border-[var(--color-accent-light)]">
                    <motion.span
                      className="text-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.4 }}
                    >
                      ☯
                    </motion.span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2 ${
                      coin.isHeads
                        ? "bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] border-[var(--color-accent-light)]"
                        : "bg-gradient-to-br from-[var(--muted)] to-[var(--border)] border-[var(--muted-foreground)]"
                    }`}
                  >
                    <span className="text-xl font-bold">
                      {coin.isHeads ? "陽" : "陰"}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Lines accumulated so far */}
      {lines.length > 0 && (
        <div className="w-full max-w-xs">
          <p className="text-xs text-[var(--muted-foreground)] mb-2 text-center">
            Lines cast so far:
          </p>
          <div className="flex flex-col-reverse gap-1 items-center">
            {lines.map((line, i) => (
              <motion.div
                key={`line-${i}`}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs text-[var(--muted-foreground)] w-4">
                  {i + 1}
                </span>
                {line === 1 ? (
                  <div className="w-24 h-2 bg-[var(--color-accent)] rounded" />
                ) : (
                  <div className="flex gap-1">
                    <div className="w-[44px] h-2 bg-[var(--color-primary)] rounded" />
                    <div className="w-[44px] h-2 bg-[var(--color-primary)] rounded" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
