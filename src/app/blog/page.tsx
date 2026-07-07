import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import { siteConfig } from "@/lib/siteConfig";
import { blogPosts } from "@/data/blogPosts";

const BLOG_URL = `${siteConfig.url}/blog`;
const OG_IMAGE = `${siteConfig.url}/og-default.png`;

export const metadata: Metadata = {
  title: "Eastern Wisdom Blog | Dao Light",
  description:
    "Explore I Ching, Tarot, astrology and ancient philosophy. In-depth articles on Eastern wisdom traditions, powered by AI insights.",

  // ── Open Graph ────────────────────────────────────────────────────────
  openGraph: {
    title: "Eastern Wisdom Blog | Dao Light",
    description:
      "Explore I Ching, Tarot, astrology and ancient philosophy. In-depth articles on Eastern wisdom traditions, powered by AI insights.",
    url: BLOG_URL,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Eastern Wisdom Blog – Dao Light" }],
  },

  // ── Twitter Card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Eastern Wisdom Blog | Dao Light",
    description:
      "Explore I Ching, Tarot, astrology and ancient philosophy. In-depth articles on Eastern wisdom traditions, powered by AI insights.",
    images: [OG_IMAGE],
  },

  // ── Canonical ─────────────────────────────────────────────────────────
  alternates: { canonical: "/blog" },
};

// ── JSON-LD Blog schema ──────────────────────────────────────────────────
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Eastern Wisdom Blog",
  description:
    "Explore I Ching, Tarot, astrology and ancient philosophy. In-depth articles on Eastern wisdom traditions, powered by AI insights.",
  url: BLOG_URL,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/og-default.png` },
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
    author: { "@type": "Person", name: post.author },
    image: post.image ? `${siteConfig.url}${post.image}` : OG_IMAGE,
  })),
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      {/* JSON-LD Blog schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

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
