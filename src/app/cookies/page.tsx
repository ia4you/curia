import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Cookies | Curia Abogados",
  description:
    "Política de cookies de Curia Abogados: qué cookies utiliza este sitio web y cómo puedes gestionarlas desde tu navegador.",
  alternates: {
    canonical: `${SITE_URL}/cookies`,
  },
};

export default function Page() {
  return (
    <LegalPage
      title="Política de Cookies"
      updated="14 de septiembre de 2026"
      sections={[
        {
          heading: "1. Qué son las cookies",
          paragraphs: [
            "Las cookies son pequeños archivos de texto que un sitio web almacena en el navegador del usuario para recordar información sobre su visita, como sus preferencias o el correcto funcionamiento de ciertas partes de la página.",
          ],
        },
        {
          heading: "2. Cookies utilizadas en este sitio web",
          paragraphs: [
            "Este sitio web utiliza únicamente cookies técnicas o necesarias para su funcionamiento básico. Actualmente no empleamos cookies de analítica, personalización o publicidad de terceros. Si en el futuro incorporamos herramientas de analítica u otros servicios que requieran cookies adicionales, actualizaremos esta política y solicitaremos su consentimiento cuando sea necesario.",
          ],
        },
        {
          heading: "3. Cómo gestionar las cookies",
          paragraphs: [
            "Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de privacidad de su navegador. Tenga en cuenta que deshabilitar determinadas cookies puede afectar al correcto funcionamiento de algunas partes del sitio web.",
          ],
        },
        {
          heading: "4. Cambios en esta política",
          paragraphs: [
            "Curia Abogados podrá modificar esta política de cookies para adaptarla a futuros cambios en el sitio web o a nuevas exigencias legales. Le recomendamos revisar esta página periódicamente.",
          ],
        },
      ]}
    />
  );
}
