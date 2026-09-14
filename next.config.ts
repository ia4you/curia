import type { NextConfig } from "next";
import { specialtySlugs } from "./src/lib/specialties";

// Slugs that never had real content on the original site (confirmed soft-404s)
// but are redirected defensively in case they were ever crawled/indexed.
const retiredSlugs = [
  "acoso",
  "desahucios",
  "violencia-de-genero",
  "incumplimientos-contractuales",
  "accidentes-de-trafico",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...specialtySlugs.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
      ...retiredSlugs.map((slug) => ({
        source: `/${slug}.html`,
        destination: "/areas-de-derecho",
        permanent: true,
      })),
      {
        source: "/nuestro-equipo.html",
        destination: "/#equipo",
        permanent: true,
      },
      {
        source: "/contacto.html",
        destination: "/#contacto",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
