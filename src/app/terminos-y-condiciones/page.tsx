import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Curia Abogados",
  description:
    "Términos y condiciones de uso del sitio web de Curia Abogados en Las Palmas de Gran Canaria.",
  alternates: {
    canonical: `${SITE_URL}/terminos-y-condiciones`,
  },
};

export default function Page() {
  return (
    <LegalPage
      title="Términos y Condiciones"
      updated="14 de septiembre de 2026"
      sections={[
        {
          heading: "1. Aceptación de las condiciones",
          paragraphs: [
            "El acceso y la utilización de este sitio web atribuyen la condición de usuario e implican la aceptación plena de los términos y condiciones aquí recogidos. Si no está de acuerdo con ellos, le rogamos que no utilice este sitio web.",
          ],
        },
        {
          heading: "2. Objeto del sitio web",
          paragraphs: [
            "Este sitio web tiene carácter informativo y tiene como finalidad dar a conocer los servicios de Curia Abogados y facilitar el contacto con el despacho. La información contenida en el sitio web no constituye asesoramiento legal y no sustituye la consulta directa con nuestro equipo profesional.",
          ],
        },
        {
          heading: "3. Condiciones de uso",
          paragraphs: [
            "El usuario se compromete a utilizar el sitio web y sus contenidos conforme a la ley y a estas condiciones, y a facilitar información veraz en los formularios de contacto que se pongan a su disposición.",
          ],
        },
        {
          heading: "4. Propiedad intelectual",
          paragraphs: [
            "Todos los contenidos de este sitio web (textos, imágenes, marcas, logotipos, diseño y código fuente) son propiedad de Curia Abogados o se utilizan con la correspondiente autorización, y están protegidos por la normativa de propiedad intelectual e industrial aplicable. Queda prohibida su reproducción, distribución o modificación con fines comerciales sin autorización previa.",
          ],
        },
        {
          heading: "5. Exclusión de responsabilidad",
          paragraphs: [
            "Curia Abogados no garantiza la disponibilidad continuada del sitio web ni la ausencia de errores en sus contenidos, y no se hace responsable de los daños que pudieran derivarse del uso del sitio web o de la imposibilidad de acceder a él.",
          ],
        },
        {
          heading: "6. Modificación de las condiciones",
          paragraphs: [
            "Curia Abogados podrá modificar en cualquier momento estos términos y condiciones. Las modificaciones serán publicadas en esta misma página.",
          ],
        },
        {
          heading: "7. Legislación aplicable",
          paragraphs: [
            "Estas condiciones se rigen por la legislación española. Cualquier controversia derivada del acceso o uso de este sitio web se someterá a los juzgados y tribunales competentes conforme a derecho.",
          ],
        },
      ]}
    />
  );
}
