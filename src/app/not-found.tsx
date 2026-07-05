import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-6xl">☯</div>
      <h1 className="mb-4 text-3xl font-bold text-[var(--foreground)]">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-[var(--muted-foreground)]">
        This path does not exist. The wisdom you seek may be found elsewhere.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        Return to Dao Light
      </Link>
    </div>
  );
}
