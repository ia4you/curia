import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const title = "Contacto | Curia Abogados";
const description =
  "Ponte en contacto con Curia Abogados en Las Palmas de Gran Canaria: teléfono, email, dirección y formulario de contacto.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  openGraph: {
    url: `${SITE_URL}/contacto`,
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function ContactoPage() {
  return (
    <main>
      <Header />
      <ContactSection />
      <Footer />
    </main>
  );
}
