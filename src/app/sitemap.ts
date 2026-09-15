import type { MetadataRoute } from "next";
import { specialtySlugs } from "@/lib/specialties";
import { SITE_URL } from "@/lib/site";
import { prisma } from "@/lib/prisma";

const legalSlugs = ["aviso-legal", "politica-de-privacidad", "cookies", "terminos-y-condiciones"];

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
    orderBy: { createdAt: "desc" },
  });

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
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.5,
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
