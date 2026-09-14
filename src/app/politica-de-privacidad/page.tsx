import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad | Curia Abogados",
  description:
    "Política de privacidad de Curia Abogados: cómo tratamos tus datos personales conforme al RGPD y la LOPDGDD, y cómo ejercer tus derechos.",
  alternates: {
    canonical: `${SITE_URL}/politica-de-privacidad`,
  },
};

export default function Page() {
  return (
    <LegalPage
      title="Política de Privacidad"
      updated="14 de septiembre de 2026"
      sections={[
        {
          heading: "1. Responsable del tratamiento",
          paragraphs: [
            "El responsable del tratamiento de los datos personales recogidos a través de este sitio web es Curia Abogados, con domicilio en C/ León y Castillo 39, 5B, Las Palmas de Gran Canaria. Puede contactar con nosotros en info@curiaabogados.es para cualquier cuestión relacionada con la protección de sus datos.",
          ],
        },
        {
          heading: "2. Finalidad del tratamiento",
          paragraphs: [
            "Los datos que nos facilita a través del formulario de contacto se utilizan exclusivamente para gestionar su consulta y, en su caso, prestarle los servicios legales solicitados. No utilizamos sus datos para ninguna otra finalidad sin su consentimiento expreso.",
          ],
        },
        {
          heading: "3. Legitimación",
          paragraphs: [
            "La base legal para el tratamiento de sus datos es el consentimiento que nos otorga al enviar sus datos a través de nuestros formularios, así como, en su caso, la ejecución de la relación profesional que se establezca entre usted y el despacho.",
          ],
        },
        {
          heading: "4. Conservación de los datos",
          paragraphs: [
            "Sus datos se conservarán durante el tiempo necesario para atender su consulta o, si se formaliza una relación profesional, durante el tiempo que esta se mantenga y conforme a los plazos de conservación exigidos por la normativa aplicable.",
          ],
        },
        {
          heading: "5. Destinatarios",
          paragraphs: [
            "No cedemos sus datos personales a terceros, salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio solicitado.",
          ],
        },
        {
          heading: "6. Sus derechos",
          paragraphs: [
            "De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), usted puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición, dirigiéndose por escrito a info@curiaabogados.es o a la dirección postal indicada más arriba, adjuntando copia de un documento que acredite su identidad.",
          ],
        },
        {
          heading: "7. Seguridad de los datos",
          paragraphs: [
            "Curia Abogados adopta las medidas técnicas y organizativas razonables para proteger sus datos personales frente a accesos no autorizados, pérdida o alteración, de acuerdo con la normativa vigente en materia de protección de datos.",
          ],
        },
      ]}
    />
  );
}
