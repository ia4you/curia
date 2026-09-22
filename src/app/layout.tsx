import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import BackToTop from "@/components/BackToTop";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public-sans",
  display: "swap",
});

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "Organization"],
  name: "Curia Abogados",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/hero-oficina.webp`,
  description:
    "Despacho de abogados en Las Palmas de Gran Canaria fundado por Estefanía Pérez y Saro Morales, con más de 15 años de experiencia en derecho civil, penal, mercantil y administración de fincas.",
  email: "info@curiaabogados.es",
  telephone: "+34928248581",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle León y Castillo 39, 5B",
    addressLocality: "Las Palmas de Gran Canaria",
    addressRegion: "Las Palmas",
    postalCode: "35003",
    addressCountry: "ES",
  },
  sameAs: [
    "https://www.facebook.com/Curia-Abogados-104618574853391",
    "https://www.linkedin.com/company/74266128/",
    "https://www.instagram.com/curiaabogados/",
  ],
  founder: [
    { "@type": "Person", name: "Estefanía Pérez" },
    { "@type": "Person", name: "Saro Morales" },
  ],
  areaServed: {
    "@type": "City",
    name: "Las Palmas de Gran Canaria",
  },
  priceRange: "$$",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Curia Abogados",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${publicSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
