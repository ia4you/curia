import type { NextConfig } from "next";
import { specialtySlugs } from "./src/lib/specialties";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...specialtySlugs.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
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
