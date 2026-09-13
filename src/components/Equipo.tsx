import Image from "next/image";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const equipo = [
  {
    nombre: "Estefanía Pérez",
    objectPosition: "18% 25%",
  },
  {
    nombre: "Saro Morales",
    objectPosition: "82% 25%",
  },
];

const socials = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/Curia-Abogados-104618574853391" },
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/74266128/" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/curiaabogados/" },
];

export default function Equipo() {
  return (
    <section id="equipo" className="scroll-mt-20 bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Sobre nosotros
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">Nuestro equipo</h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-8 sm:grid-cols-2">
          {equipo.map((member) => (
            <div
              key={member.nombre}
              className="relative aspect-[3/4] overflow-hidden bg-white shadow-[0_10px_40px_-15px_rgba(15,43,39,0.25)]"
            >
              <Image
                src="/images/equipo.png"
                alt={`${member.nombre}, abogada de Curia Abogados`}
                fill
                className="object-cover"
                style={{ objectPosition: member.objectPosition }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent px-6 pb-6 pt-20">
                <h3 className="font-serif text-xl text-white">{member.nombre}</h3>
                <p className="text-xs uppercase tracking-widest text-white/70">Abogada</p>
                <div className="mt-3 flex gap-2">
                  {socials.map(({ Icon, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-accent"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
