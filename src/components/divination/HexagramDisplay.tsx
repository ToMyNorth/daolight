"use client";

import { motion } from "framer-motion";
import type { Hexagram } from "@/data/hexagrams";

interface HexagramDisplayProps {
  hexagram: Hexagram;
}

export default function HexagramDisplay({ hexagram }: HexagramDisplayProps) {
  const svgWidth = 160;
  const svgHeight = 200;
  const lineHeight = 8;
  const lineGap = 24;
  const gapWidth = 16;
  const lineFullWidth = 120;
  const lineHalfWidth = (lineFullWidth - gapWidth) / 2;
  const startX = (svgWidth - lineFullWidth) / 2;

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {/* Hexagram name */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-5xl mb-3">{hexagram.symbol}</div>
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-1">
          {hexagram.name}{" "}
          <span className="text-[var(--muted-foreground)] text-xl">
            {hexagram.namePinyin}
          </span>
        </h2>
        <p className="text-xl text-[var(--color-accent)]">
          {hexagram.nameEnglish}
        </p>
      </motion.div>

      {/* SVG Hexagram drawing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="mx-auto"
        >
          {/* Draw lines from bottom to top (index 0 = bottom) */}
          {hexagram.lines.map((line, i) => {
            const y = svgHeight - (i + 1) * lineGap - lineHeight / 2;
            const isYang = line === 1;
            const isDivider = i === 2; // between lower and upper trigrams

            return (
              <g key={i}>
                {/* Divider line between upper and lower trigrams */}
                {isDivider && (
                  <motion.line
                    x1={startX - 10}
                    y1={y + lineGap / 2 + 4}
                    x2={startX + lineFullWidth + 10}
                    y2={y + lineGap / 2 + 4}
                    stroke="var(--border)"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.2 }}
                  />
                )}
                {isYang ? (
                  <motion.rect
                    x={startX}
                    y={y}
                    width={lineFullWidth}
                    height={lineHeight}
                    rx={2}
                    fill="var(--color-accent)"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + (5 - i) * 0.15,
                    }}
                    style={{ transformOrigin: "center" }}
                  />
                ) : (
                  <g>
                    <motion.rect
                      x={startX}
                      y={y}
                      width={lineHalfWidth}
                      height={lineHeight}
                      rx={2}
                      fill="var(--color-primary)"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + (5 - i) * 0.15,
                      }}
                      style={{ transformOrigin: "right center" }}
                    />
                    <motion.rect
                      x={startX + lineHalfWidth + gapWidth}
                      y={y}
                      width={lineHalfWidth}
                      height={lineHeight}
                      rx={2}
                      fill="var(--color-primary)"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + (5 - i) * 0.15,
                      }}
                      style={{ transformOrigin: "left center" }}
                    />
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Trigram labels */}
      <motion.div
        className="flex gap-8 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="text-center">
          <span className="text-[var(--muted-foreground)]">Upper: </span>
          <span className="font-medium text-[var(--foreground)]">
            {hexagram.upperTrigram}
          </span>
        </div>
        <div className="text-center">
          <span className="text-[var(--muted-foreground)]">Lower: </span>
          <span className="font-medium text-[var(--foreground)]">
            {hexagram.lowerTrigram}
          </span>
        </div>
      </motion.div>

      {/* Judgment */}
      <motion.div
        className="max-w-lg text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <h3 className="text-sm uppercase tracking-wider text-[var(--muted-foreground)] mb-2">
          Judgment
        </h3>
        <p className="text-[var(--foreground)] leading-relaxed italic">
          &ldquo;{hexagram.judgment}&rdquo;
        </p>
      </motion.div>

      {/* Image / Symbolic meaning */}
      <motion.div
        className="max-w-lg text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <h3 className="text-sm uppercase tracking-wider text-[var(--muted-foreground)] mb-2">
          Image
        </h3>
        <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
          &ldquo;{hexagram.image}&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
