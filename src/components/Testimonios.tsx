import fs from "fs";
import path from "path";
import Image from "next/image";

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
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          Lo que dicen de nosotros
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonios.map((t) => (
            <div key={t.autor} className="border-t-2 border-accent pt-6">
              <p className="font-serif text-lg italic leading-relaxed text-ink">
                &ldquo;{t.texto}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                {hasAvatar && (
                  <Image
                    src="/images/avatar-testimonio.jpg"
                    alt={t.autor}
                    width={96}
                    height={96}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <p className="text-sm text-ink-soft">{t.autor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
