"use client";

import { useState } from "react";
import Link from "next/link";
import { hexagrams } from "@/data/hexagrams";

export default function HexagramGrid() {
  const [query, setQuery] = useState("");

  const filtered = hexagrams.filter((h) => {
    const q = query.toLowerCase();
    return (
      h.nameEnglish.toLowerCase().includes(q) ||
      h.namePinyin.toLowerCase().includes(q) ||
      h.name.includes(q) ||
      String(h.number).includes(q)
    );
  });

  return (
    <div>
      {/* ── Search ──────────────────────────────────────────────────── */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name, pinyin, number…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
      </div>

      {/* ── Grid ────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {filtered.map((h) => (
          <Link
            key={h.number}
            href={`/hexagram/${h.number}`}
            className="group flex flex-col items-center rounded-xl border border-[var(--border)] p-3 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
          >
            <span className="text-3xl mb-1">{h.symbol}</span>
            <span className="text-xs font-bold text-[var(--foreground)]">#{h.number}</span>
            <span className="text-xs text-[var(--muted-foreground)] text-center leading-tight mt-1 group-hover:text-[var(--color-primary)] transition-colors">
              {h.nameEnglish}
            </span>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--muted-foreground)] py-12">
          No hexagrams found for &ldquo;{query}&rdquo;
        </p>
      )}
    </div>
  );
}
