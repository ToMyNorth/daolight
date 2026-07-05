import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import BlogPost from "@/components/blog/BlogPost";

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
  return {
    title: `${post.title} | Dao Light Blog`,
    description: post.description,
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

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <BlogPost post={post} relatedPosts={relatedPosts} />
    </main>
  );
}
