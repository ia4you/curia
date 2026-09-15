import type { MetadataRoute } from "next";
import { specialtySlugs } from "@/lib/specialties";
import { SITE_URL } from "@/lib/site";
import { getAllPostSlugs } from "@/lib/blog";

const legalSlugs = ["aviso-legal", "politica-de-privacidad", "cookies", "terminos-y-condiciones"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostSlugs().catch(() => []);

  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...specialtySlugs.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...legalSlugs.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  return routes;
}
