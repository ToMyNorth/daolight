"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUESTIONS, ELEMENTS } from "@/data/five-elements";
import { cn } from "@/lib/utils";

interface QuizFlowProps {
  onComplete: (answers: Record<number, string>) => void;
}

export default function QuizFlow({ onComplete }: QuizFlowProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [direction, setDirection] = useState(1);

  const question = QUESTIONS[current];
  const progress = ((current + 1) / QUESTIONS.length) * 100;
  const selectedOption = answers[question.id];

  const handleSelect = (element: string) => {
    const newAnswers = { ...answers, [question.id]: element };
    setAnswers(newAnswers);

    if (current < QUESTIONS.length - 1) {
      setDirection(1);
      setTimeout(() => setCurrent(current + 1), 300);
    } else {
      setTimeout(() => onComplete(newAnswers), 400);
    }
  };

  const goBack = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(current - 1);
    }
  };

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[var(--muted-foreground)]">
            Question {current + 1} of {QUESTIONS.length}
          </span>
          <span className="text-sm text-[var(--muted-foreground)]">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #10B981, #34D399)" }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>

      {/* Back button */}
      {current > 0 && (
        <button
          onClick={goBack}
          className="mb-4 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
        >
          ← Back
        </button>
      )}

      {/* Question + options */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={question.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold mb-6 text-[var(--foreground)]">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const element = ELEMENTS[option.element];
              const isSelected = selectedOption === option.element;

              return (
                <motion.button
                  key={idx}
                  onClick={() => handleSelect(option.element)}
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-200",
                    "flex items-center gap-4",
                    "hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5",
                    isSelected
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 shadow-md"
                      : "border-[var(--border)] bg-[var(--card)]"
                  )}
                >
                  <span
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0",
                      isSelected
                        ? "text-white"
                        : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                    )}
                    style={isSelected ? { backgroundColor: element.color } : undefined}
                  >
                    {letter}
                  </span>
                  <span className="flex-1 text-[var(--foreground)]">
                    {option.text}
                  </span>
                  <span className="text-xl shrink-0">{element.emoji}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
