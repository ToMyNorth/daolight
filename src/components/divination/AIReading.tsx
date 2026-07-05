"use client";

import { useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { motion } from "framer-motion";
import type { Hexagram } from "@/data/hexagrams";

interface AIReadingProps {
  hexagram: Hexagram;
  question: string;
  onCastAgain: () => void;
}

export default function AIReading({
  hexagram,
  question,
  onCastAgain,
}: AIReadingProps) {
  const { messages, append, isLoading } = useChat({
    api: "/api/iching",
  });
  const hasRequested = useRef(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasRequested.current) {
      hasRequested.current = true;
      append({
        role: "user",
        content: JSON.stringify({
          hexagramNumber: hexagram.number,
          hexagramName: `${hexagram.name} ${hexagram.namePinyin} — ${hexagram.nameEnglish}`,
          question: question || null,
        }),
      });
    }
  }, [append, hexagram, question]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const lastMessage = messages[messages.length - 1];
  const isComplete =
    !isLoading && lastMessage && lastMessage.role === "assistant";

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
        <h3 className="text-sm uppercase tracking-wider text-[var(--color-accent)] mb-4 flex items-center gap-2">
          <span className="text-lg">🔮</span> AI Oracle Reading
        </h3>

        {isLoading && messages.length === 0 && (
          <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
            <div className="flex gap-1">
              <motion.div
                className="w-2 h-2 rounded-full bg-[var(--color-accent)]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-[var(--color-accent)]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-[var(--color-accent)]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
              />
            </div>
            <span className="text-sm">Consulting the oracle...</span>
          </div>
        )}

        {/* Streamed messages */}
        {messages.map((msg) => {
          if (msg.role !== "assistant") return null;
          return (
            <div
              key={msg.id}
              className="prose prose-sm dark:prose-invert max-w-none"
            >
              <div
                className="reading-content text-[var(--foreground)] leading-relaxed whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: formatMarkdown(msg.content),
                }}
              />
            </div>
          );
        })}

        {isLoading && messages.length > 0 && (
          <motion.span
            className="inline-block w-2 h-4 bg-[var(--color-accent)] ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        )}

        <div ref={endRef} />

        {/* Cast Again button */}
        {isComplete && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={onCastAgain}
              className="px-8 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Cast Again
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function formatMarkdown(text: string): string {
  return text
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2 text-[var(--color-accent)]">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-5 mb-2 text-[var(--color-accent)]">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");
}
