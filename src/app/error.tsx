"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-6xl">☯</div>
      <h1 className="mb-4 text-3xl font-bold text-[var(--foreground)]">
        Something Went Wrong
      </h1>
      <p className="mb-8 max-w-md text-[var(--muted-foreground)]">
        The path has taken an unexpected turn. Let us guide you back to balance.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-[var(--border)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
