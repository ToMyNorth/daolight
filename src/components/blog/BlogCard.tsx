import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import { categoryColors } from "@/data/blogPosts";
import { cn } from "@/lib/utils";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="flex h-full flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)]/60 p-6 transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:bg-[var(--card)]/80 hover:shadow-lg hover:shadow-[var(--color-primary)]/5">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium",
              categoryColors[post.category] ?? "bg-gray-500/20 text-gray-400 border-gray-500/30"
            )}
          >
            {post.category}
          </span>
          <span className="text-xs text-[var(--muted-foreground)]">{post.readingTime}</span>
        </div>

        <h2 className="text-lg font-semibold leading-snug text-[var(--foreground)] group-hover:text-[var(--color-primary-light)] transition-colors">
          {post.title}
        </h2>

        <p className="text-sm leading-relaxed text-[var(--muted-foreground)] line-clamp-3 flex-1">
          {post.description}
        </p>

        <time
          dateTime={post.date}
          className="text-xs text-[var(--muted-foreground)]/70"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </article>
    </Link>
  );
}
