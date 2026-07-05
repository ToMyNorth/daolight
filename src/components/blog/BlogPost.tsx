import Link from "next/link";
import { categoryColors } from "@/data/blogPosts";
import { cn } from "@/lib/utils";

export default function BlogPost({
  post,
  relatedPosts,
}: {
  post: {
    title: string;
    date: string;
    readingTime: string;
    category: string;
    content: string;
  };
  relatedPosts: { slug: string; title: string }[];
}) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-[700px]">
      <style>{`
        .blog-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: var(--foreground);
          line-height: 1.3;
        }
        .blog-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: var(--foreground);
          line-height: 1.4;
        }
        .blog-content p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
          color: var(--muted-foreground);
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .blog-content ul {
          list-style-type: disc;
        }
        .blog-content ol {
          list-style-type: decimal;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
          color: var(--muted-foreground);
        }
        .blog-content strong {
          color: var(--foreground);
          font-weight: 600;
        }
        .blog-content em {
          font-style: italic;
        }
      `}</style>
      {/* Header */}
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-[var(--foreground)] md:text-4xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted-foreground)]">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
          <span>·</span>
          <span
            className={cn(
              "inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium",
              categoryColors[post.category] ?? "bg-gray-500/20 text-gray-400 border-gray-500/30"
            )}
          >
            {post.category}
          </span>
        </div>
      </header>

      {/* Content */}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* CTA */}
      <div className="my-10 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 p-6 text-center">
        <p className="mb-3 text-lg font-semibold text-[var(--foreground)]">
          Ready to experience ancient wisdom?
        </p>
        <Link
          href="/iching"
          className="inline-block rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)]"
        >
          Try our I Ching Oracle
        </Link>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-10 border-t border-[var(--border)] pt-8">
          <h2 className="mb-6 text-xl font-semibold text-[var(--foreground)]">
            You might also like
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group rounded-lg border border-[var(--border)] bg-[var(--card)]/60 p-4 transition-all hover:border-[var(--color-primary)]/40"
              >
                <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--color-primary-light)] transition-colors">
                  {rp.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--color-primary)] hover:underline"
        >
          ← Back to All Articles
        </Link>
      </div>
    </article>
  );
}
