"use client";

import { useState } from "react";
import { blogPosts, categories, type BlogPost } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts: BlogPost[] =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Category filter */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
                : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--color-primary)]/40 hover:text-[var(--foreground)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {sortedPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {sortedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-[var(--muted-foreground)]">
          No articles found in this category.
        </p>
      )}
    </>
  );
}
