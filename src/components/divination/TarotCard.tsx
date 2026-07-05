"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { TarotCard as TarotCardType } from "@/data/tarot-cards";

interface TarotCardProps {
  card?: TarotCardType;
  isFlipped?: boolean;
  isReversed?: boolean;
  isSelected?: boolean;
  isSelectable?: boolean;
  onClick?: () => void;
  selectionIndex?: number;
  label?: string;
  delay?: number;
}

export default function TarotCard({
  card,
  isFlipped = false,
  isReversed = false,
  isSelected = false,
  isSelectable = false,
  onClick,
  selectionIndex,
  label,
  delay = 0,
}: TarotCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          {label}
        </span>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        onClick={isSelectable ? onClick : undefined}
        className={cn(
          "relative w-[120px] h-[200px] cursor-pointer perspective-[1000px]",
          "sm:w-[130px] sm:h-[210px]",
          isSelectable && !isSelected && "hover:scale-105 hover:-translate-y-2",
          isSelectable && "transition-transform duration-200",
          isSelected && "ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--background)] rounded-xl",
          !isSelectable && !isFlipped && "pointer-events-none"
        )}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
        >
          {/* Card Back */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#1a0533] border-2 border-[var(--color-accent)]/60 rounded-xl flex items-center justify-center p-2">
              {/* Ornate border */}
              <div className="w-full h-full border border-[var(--color-accent)]/30 rounded-lg flex items-center justify-center relative">
                {/* Corner decorations */}
                <span className="absolute top-1.5 left-2 text-[var(--color-accent)]/50 text-xs">✦</span>
                <span className="absolute top-1.5 right-2 text-[var(--color-accent)]/50 text-xs">✦</span>
                <span className="absolute bottom-1.5 left-2 text-[var(--color-accent)]/50 text-xs">✦</span>
                <span className="absolute bottom-1.5 right-2 text-[var(--color-accent)]/50 text-xs">✦</span>
                {/* Center symbol */}
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl text-[var(--color-accent)]/80">☯</span>
                  <span className="text-[8px] tracking-[0.2em] uppercase text-[var(--color-accent)]/40 font-light">Dao Light</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Front */}
          <div
            className={cn(
              "absolute inset-0 rounded-xl overflow-hidden border-2",
              isReversed
                ? "border-red-500/60 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                : "border-[var(--color-accent)]/60 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
            )}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className={cn("w-full h-full flex flex-col items-center justify-between p-3", isReversed && "rotate-180")}>
              {/* Card number */}
              <div className="text-center">
                <span className="text-[9px] font-mono text-[var(--muted-foreground)]">
                  {card?.arcana === "major"
                    ? `${card.number} — Major Arcana`
                    : `${card?.suit?.charAt(0).toUpperCase()}${card?.suit?.slice(1)} ${card?.number}`
                  }
                </span>
              </div>

              {/* Emoji */}
              <div className="flex-1 flex items-center justify-center">
                <span className="text-4xl">{card?.emoji}</span>
              </div>

              {/* Card name + keywords */}
              <div className="text-center space-y-1">
                <p className="text-[11px] font-bold text-[var(--foreground)] leading-tight">
                  {card?.name}
                </p>
                <span className={cn(
                  "inline-block text-[8px] px-1.5 py-0.5 rounded-full font-medium",
                  isReversed
                    ? "bg-red-500/20 text-red-400"
                    : "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                )}>
                  {isReversed ? "Reversed" : "Upright"}
                </span>
                <p className="text-[8px] text-[var(--muted-foreground)] leading-snug line-clamp-2">
                  {card?.keywords.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Selection badge */}
        {isSelected && selectionIndex !== undefined && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-xs font-bold text-black z-10"
          >
            {selectionIndex + 1}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
