import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso Legal | Curia Abogados",
  description:
    "Aviso legal de Curia Abogados: datos identificativos del titular del sitio web, condiciones de uso y propiedad intelectual.",
  alternates: {
    canonical: `${SITE_URL}/aviso-legal`,
  },
};

export default function Page() {
  return (
    <LegalPage
      title="Aviso Legal"
      updated="14 de septiembre de 2026"
      sections={[
        {
          heading: "1. Datos identificativos",
          paragraphs: [
            "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos: el titular de este sitio web es Curia Abogados, con domicilio en C/ León y Castillo 39, 5B, Las Palmas de Gran Canaria. Puede contactar con nosotros a través del correo electrónico info@curiaabogados.es o de los teléfonos 928 248 581 / 679 721 167.",
          ],
        },
        {
          heading: "2. Objeto",
          paragraphs: [
            "Este sitio web tiene como finalidad ofrecer información sobre los servicios profesionales de Curia Abogados y facilitar el contacto con el despacho. El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación de las condiciones recogidas en este aviso legal.",
          ],
        },
        {
          heading: "3. Condiciones de uso",
          paragraphs: [
            "El usuario se compromete a hacer un uso adecuado del sitio web y de los contenidos que en él se ofrecen, de conformidad con la ley, la moral, el orden público y las presentes condiciones, absteniéndose de utilizarlo de forma que pueda impedir, dañar o deteriorar el normal funcionamiento del sitio, los bienes o derechos de Curia Abogados, de sus proveedores, de otros usuarios o de terceros.",
            "La información facilitada a través de los formularios del sitio web debe ser veraz y actualizada. El usuario es responsable de la veracidad de los datos que proporcione.",
          ],
        },
        {
          heading: "4. Propiedad intelectual e industrial",
          paragraphs: [
            "Curia Abogados es titular de todos los derechos de propiedad intelectual e industrial de este sitio web, así como de los elementos contenidos en el mismo (textos, imágenes, marcas, logotipos, combinaciones de colores, estructura y diseño), salvo que se indique lo contrario. Queda prohibida la reproducción, distribución o comunicación pública de la totalidad o parte de los contenidos de este sitio web con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Curia Abogados.",
          ],
        },
        {
          heading: "5. Enlaces a terceros",
          paragraphs: [
            "Este sitio web puede contener enlaces a otros sitios web de terceros. Curia Abogados no se hace responsable del contenido de dichos sitios ni ejerce ningún tipo de control sobre ellos, ni garantiza su disponibilidad técnica, exactitud o legalidad.",
          ],
        },
        {
          heading: "6. Modificaciones",
          paragraphs: [
            "Curia Abogados se reserva el derecho a realizar, sin previo aviso, las modificaciones que considere oportunas en el contenido y estructura del sitio web.",
          ],
        },
        {
          heading: "7. Legislación aplicable",
          paragraphs: [
            "Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someterán a los juzgados y tribunales que correspondan conforme a derecho.",
          ],
        },
      ]}
    />
  );
}
