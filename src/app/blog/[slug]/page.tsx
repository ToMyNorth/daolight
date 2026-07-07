import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import BlogPost from "@/components/blog/BlogPost";
import { siteConfig } from "@/lib/siteConfig";

const OG_DEFAULT = `${siteConfig.url}/og-default.png`;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const canonicalUrl = `/blog/${post.slug}`;
  const ogImage = post.image ? `${siteConfig.url}${post.image}` : OG_DEFAULT;
  const ogTitle = `${post.title} | Dao Light Blog`;
  const ogDescription = post.excerpt || post.description;

  return {
    title: `${post.title} | Dao Light Blog`,
    description: ogDescription,

    // ── Open Graph ──────────────────────────────────────────────────────
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `${siteConfig.url}${canonicalUrl}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.publishedDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author],
    },

    // ── Twitter Card ─────────────────────────────────────────────────────
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },

    // ── Canonical ───────────────────────────────────────────────────────
    alternates: { canonical: canonicalUrl },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)
    .map((p) => ({ slug: p.slug, title: p.title }));

  // ── BlogPosting JSON-LD ─────────────────────────────────────────────
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;
  const ogImage = post.image ? `${siteConfig.url}${post.image}` : OG_DEFAULT;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || post.description,
    url: postUrl,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/og-default.png`,
      },
    },
    image: ogImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "en",
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      {/* JSON-LD BlogPosting schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      <BlogPost post={post} relatedPosts={relatedPosts} />
    </main>
  );
}
