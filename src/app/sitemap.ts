import type { MetadataRoute } from "next";
import { specialtySlugs } from "@/lib/specialties";
import { SITE_URL } from "@/lib/site";

const legalSlugs = ["aviso-legal", "politica-de-privacidad", "cookies", "terminos-y-condiciones"];

export default function sitemap(): MetadataRoute.Sitemap {
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
    ...legalSlugs.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  return routes;
}
