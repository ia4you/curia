import fs from "fs";
import path from "path";
import TestimoniosCarousel from "./TestimoniosCarousel";

const hasAvatar = fs.existsSync(
  path.join(process.cwd(), "public", "images", "avatar-testimonio.jpg")
);

const testimonios = [
  {
    texto:
      "Estefanía fue muy atenta y comprometida con el trabajo, con muy buena actitud y paciencia conmigo. Siempre está ahí para resolver dudas y ayudar con el proceso.",
    autor: "Elena M.R.",
  },
  {
    texto:
      "Me han llevado varios asuntos y la experiencia en todos ellos ha sido altamente positiva. Trato cercano y gran profesionalidad.",
    autor: "Lorenzo S.P.",
  },
  {
    texto:
      "Muchas gracias por ayudarme con la recuperación de la vivienda y desalojo de los okupas. Un buen equipo de profesionales y mi abogada muy atenta en todo momento.",
    autor: "Alba M.P.",
  },
];

export default function Testimonios() {
  return <TestimoniosCarousel testimonios={testimonios} hasAvatar={hasAvatar} />;
}
