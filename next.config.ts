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

// IMPORTANTE — pendiente para el cambio de dominio a curiaabogados.es:
// Los redirects .html de abajo solo están activos en este despliegue de
// curia.turel.es. Cuando el dominio definitivo entre en producción, hay que
// verificar que estas mismas reglas (o su equivalente) se configuren también
// ahí — si no, las URLs antiguas indexadas de curiaabogados.es quedarán sin
// redirección real y se perderá el valor SEO que este archivo pretende
// preservar. Los canonical tags (src/lib/site.ts) ya apuntan a
// curiaabogados.es de forma anticipada, pero eso no sustituye tener los
// redirects funcionando en el dominio real.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/wp4og0sd/**",
      },
    ],
  },
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
