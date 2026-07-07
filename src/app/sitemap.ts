import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { blogPosts } from "@/data/blogPosts";

// All 12 Western zodiac sign slugs (used for /horoscope/[sign] routes)
const ZODIAC_SIGNS = [
  "aries", "taurus", "gemini", "cancer", "leo", "virgo",
  "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static routes with explicit priorities & frequencies ──────────────
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`,             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${siteConfig.url}/iching`,       lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${siteConfig.url}/tarot`,        lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${siteConfig.url}/horoscope`,    lastModified: now, changeFrequency: "daily",   priority: 0.8 },
    { url: `${siteConfig.url}/five-elements`,lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${siteConfig.url}/blog`,         lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${siteConfig.url}/about`,        lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/pricing`,      lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteConfig.url}/privacy`,      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${siteConfig.url}/terms`,        lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // ── /horoscope/[sign] — 12 dynamic routes ───────────────────────────
  const horoscopeEntries: MetadataRoute.Sitemap = ZODIAC_SIGNS.map((sign) => ({
    url: `${siteConfig.url}/horoscope/${sign}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  // ── /blog/[slug] — one entry per published article ────────────────────
  const blogPostEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...horoscopeEntries, ...blogPostEntries];
}
