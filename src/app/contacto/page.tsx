import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | Curia Abogados",
  description:
    "Ponte en contacto con Curia Abogados en Las Palmas de Gran Canaria: teléfono, email, dirección y formulario de contacto.",
  alternates: {
    canonical: `${SITE_URL}/contacto`,
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
