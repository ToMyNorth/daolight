import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Eastern Wisdom Blog | Dao Light",
  description:
    "Explore I Ching, Tarot, astrology and ancient philosophy. In-depth articles on Eastern wisdom traditions, powered by AI insights.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-[var(--foreground)] md:text-5xl">
          Eastern Wisdom Blog
        </h1>
        <p className="text-lg text-[var(--muted-foreground)]">
          Explore I Ching, Tarot, astrology and ancient philosophy
        </p>
      </div>

      <BlogList />
    </main>
  );
}
