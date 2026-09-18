// Production domain this site will live at. Used for canonical tags and the
// sitemap. Currently deployed at curia.turel.es, but canonicals already
// declare the definitive curiaabogados.es URLs ahead of the domain migration
// (see the note in next.config.ts about the .html redirects that also need
// to move over at that point).
export const SITE_URL = "https://curiaabogados.es";

export const SITE_TITLE = "Curia Abogados | Las Palmas de Gran Canaria";
export const SITE_DESCRIPTION =
  "Despacho de abogados en Las Palmas de Gran Canaria. Más de 15 años de experiencia en derecho civil, penal, mercantil y administración de fincas.";

// Default social share image, reused wherever a page doesn't have a more
// specific image of its own (specialty pages, blog posts without a cover).
export const DEFAULT_OG_IMAGE = {
  url: "/images/hero-oficina.webp",
  width: 1077,
  height: 976,
  alt: "Estefanía Pérez y Saro Morales en el despacho de Curia Abogados",
};
