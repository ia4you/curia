import Image from "next/image";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const socials = [
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/Curia-Abogados-104618574853391",
    label: "Facebook",
  },
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/74266128/", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/curiaabogados/", label: "Instagram" },
];

export default function Equipo() {
  return (
    <section id="equipo" className="scroll-mt-20 bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-dark">
            Sobre nosotros
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">Nuestro equipo</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Estefanía Pérez y Saro Morales, socias fundadoras de Curia Abogados.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden shadow-[0_10px_40px_-15px_rgba(15,43,39,0.25)]">
            <Image
              src="/images/equipo-consulta.webp"
              alt="Estefanía Pérez y Saro Morales, socias fundadoras de Curia Abogados, en consulta con una clienta"
              fill
              sizes="(max-width: 900px) 100vw, 896px"
              className="object-cover object-[50%_42%]"
            />
          </div>

          <div className="mt-8 text-center">
            <h3 className="font-serif text-xl text-ink">
              Atención cercana y personalizada en cada consulta
            </h3>
            <div className="mt-4 flex justify-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors hover:bg-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
