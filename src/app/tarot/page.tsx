"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TarotSpread, { type DrawnCard } from "@/components/divination/TarotSpread";

type Phase = "intro" | "spread" | "reading";

export default function TarotPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleReadingReady = useCallback(
    (cards: DrawnCard[], question: string) => {
      setDrawnCards(cards);
      setPhase("reading");

      // Trigger AI reading after a short delay for UI transition
      setTimeout(() => {
        const payload = {
          cards: cards.map((dc) => ({
            name: dc.card.name,
            number: dc.card.number,
            arcana: dc.card.arcana,
            suit: dc.card.suit,
            emoji: dc.card.emoji,
            keywords: dc.card.keywords,
            isReversed: dc.isReversed,
            position: dc.label,
            uprightMeaning: dc.card.uprightMeaning,
            reversedMeaning: dc.card.reversedMeaning,
          })),
          question,
        };

        // Use fetch directly since useChat doesn't support custom body well
        fetchReading(payload);
      }, 500);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Direct streaming fetch for the reading
  const [readingText, setReadingText] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [isReadingDone, setIsReadingDone] = useState(false);

  const fetchReading = useCallback(async (payload: unknown) => {
    setIsReading(true);
    setIsReadingDone(false);
    setReadingText("");

    try {
      const response = await fetch("/api/tarot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.body) {
        setReadingText("Unable to generate reading. Please try again.");
        setIsReading(false);
        setIsReadingDone(true);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        // Parse Vercel AI SDK data stream format
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("0:")) {
            const textContent = line.slice(2);
            try {
              const parsed = JSON.parse(textContent);
              if (typeof parsed === "string") {
                accumulated += parsed;
              }
            } catch {
              // Not JSON, might be raw text
              accumulated += textContent;
            }
          } else if (line.startsWith("d:")) {
            // finish marker, ignore
          } else if (line.startsWith("e:")) {
            // error
          } else if (line.trim()) {
            // Try to extract text from data lines
            try {
              const data = JSON.parse(line);
              if (data?.type === "text-delta" || data?.type === "text") {
                accumulated += data.text || data.content || "";
              }
            } catch {
              // skip
            }
          }
        }
        setReadingText(accumulated);
      }
    } catch {
      setReadingText("An error occurred while generating your reading. Please try again.");
    } finally {
      setIsReading(false);
      setIsReadingDone(true);
    }
  }, []);

  const handleDrawAgain = useCallback(() => {
    setPhase("intro");
    setDrawnCards([]);
    setReadingText("");
    setIsReading(false);
    setIsReadingDone(false);
  }, []);

  // Auto-scroll reading
  useEffect(() => {
    if (chatRef.current && readingText) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [readingText]);

  return (
    <div className="min-h-[calc(100vh-8rem)] py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--color-mystic-light)] via-[var(--color-accent)] to-[var(--color-mystic-light)] bg-clip-text text-transparent">
            AI Tarot Reading
          </h1>
          <p className="text-[var(--muted-foreground)] text-sm sm:text-base max-w-lg mx-auto">
            Let the cards reveal your path — interpreted through Eastern wisdom and AI
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Phase: Intro */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Decorative hero */}
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[var(--color-mystic)]/20 to-[var(--color-accent)]/10 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl">🃏</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-[var(--color-mystic)]/5 animate-pulse" />
              </div>

              {/* Spread type */}
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-sm">
                  <span className="text-lg">🔮</span>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      3-Card Spread
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Past · Present · Future
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setPhase("spread")}
                className="group px-10 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-mystic)] to-[var(--color-accent)] text-white font-semibold text-base hover:shadow-xl hover:shadow-[var(--color-mystic)]/20 hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Draw Your Cards
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
              </button>
            </motion.div>
          )}

          {/* Phase: Spread (card selection) */}
          {phase === "spread" && (
            <motion.div
              key="spread"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <TarotSpread onReadingReady={handleReadingReady} />
            </motion.div>
          )}

          {/* Phase: Reading */}
          {phase === "reading" && (
            <motion.div
              key="reading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-10"
            >
              {/* Mini card display */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                {drawnCards.map((dc) => (
                  <div key={dc.card.id} className="flex flex-col items-center gap-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                      {dc.label}
                    </span>
                    <div className="w-16 h-24 rounded-lg bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[var(--color-accent)]/40 flex flex-col items-center justify-center gap-1 p-1">
                      <span className="text-xl">{dc.card.emoji}</span>
                      <span className="text-[7px] text-center font-medium text-[var(--foreground)] leading-tight">
                        {dc.card.name}
                      </span>
                      <span className={`text-[6px] px-1 py-0.5 rounded-full ${dc.isReversed ? "bg-red-500/20 text-red-400" : "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"}`}>
                        {dc.isReversed ? "R" : "U"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Reading */}
              <div className="max-w-2xl mx-auto">
                <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 sm:p-8 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">✨</span>
                    <h2 className="text-lg font-semibold text-[var(--foreground)]">
                      Your Reading
                    </h2>
                  </div>

                  <div
                    ref={chatRef}
                    className="prose prose-sm prose-invert max-w-none overflow-y-auto max-h-[500px] space-y-3"
                  >
                    {readingText ? (
                      <div className="text-[var(--foreground)]/90 leading-relaxed whitespace-pre-wrap text-sm">
                        {formatReading(readingText)}
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="text-2xl"
                        >
                          ☯
                        </motion.div>
                        <span className="text-sm">
                          The cards are speaking... channeling your reading
                        </span>
                      </div>
                    )}
                  </div>

                  {isReading && (
                    <div className="mt-4 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.3 }}
                          className="w-2 h-2 rounded-full bg-[var(--color-mystic)]"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Draw Again */}
              {isReadingDone && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <button
                    onClick={handleDrawAgain}
                    className="px-8 py-3 rounded-xl border-2 border-[var(--color-mystic)]/50 text-[var(--color-mystic-light)] font-semibold text-sm hover:bg-[var(--color-mystic)]/10 hover:border-[var(--color-mystic)] transition-all duration-300"
                  >
                    🔄 Draw Again
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Simple markdown-ish formatting for reading text */
function formatReading(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("### ")) {
      return (
        <h3 key={i} className="text-base font-bold text-[var(--color-accent)] mt-4 mb-2">
          {line.replace("### ", "")}
        </h3>
      );
    }
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="text-lg font-bold text-[var(--color-mystic-light)] mt-5 mb-2">
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.startsWith("# ")) {
      return (
        <h1 key={i} className="text-xl font-bold text-[var(--foreground)] mt-5 mb-3">
          {line.replace("# ", "")}
        </h1>
      );
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      return (
        <p key={i} className="pl-4 text-sm text-[var(--foreground)]/80">
          • {line.slice(2)}
        </p>
      );
    }
    if (line.trim() === "") {
      return <br key={i} />;
    }
    // Bold text
    const formatted = line.replace(/\*\*(.*?)\*\*/g, "⟨B⟩$1⟨/B⟩");
    const parts = formatted.split(/(⟨B⟩.*?⟨\/B⟩)/g);
    return (
      <p key={i} className="text-sm leading-relaxed">
        {parts.map((part, j) => {
          if (part.startsWith("⟨B⟩")) {
            return (
              <strong key={j} className="font-semibold text-[var(--foreground)]">
                {part.replace("⟨B⟩", "").replace("⟨/B⟩", "")}
              </strong>
            );
          }
          return <span key={j}>{part}</span>;
        })}
      </p>
    );
  });
}
