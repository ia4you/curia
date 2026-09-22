import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const areas = [
  { label: "Divorcio", href: "/divorcio" },
  { label: "Guarda y Custodia", href: "/guarda-y-custodia" },
  { label: "Despidos", href: "/despidos" },
  { label: "Robos o Hurtos", href: "/robos-o-hurtos" },
  { label: "Estafas", href: "/estafas" },
  { label: "Lesiones", href: "/lesiones" },
];

const enlaces = [
  { label: "Blog", href: "/blog" },
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Cookies", href: "/cookies" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
];

export default function Footer() {
  return (
    <footer className="bg-accent-dark text-white/90">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Curia Abogados"
              width={136}
              height={36}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/90">
              Despacho de abogados en Las Palmas de Gran Canaria. Queremos
              ayudarte a solucionar todo tipo de conflictos que se originan en
              la vida cotidiana de las personas.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+34928248581"
                  className="-mx-1 flex items-center gap-2 px-1 py-3.5 hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" /> 928 248 581
                </a>
              </li>
              <li>
                <ObfuscatedEmail
                  user="info"
                  domain="curiaabogados.es"
                  className="flex items-center gap-2 hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                </ObfuscatedEmail>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  C/ León y Castillo 39, 5B
                  <br />
                  Las Palmas de Gran Canaria
                </span>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Áreas de derecho
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {areas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="hover:text-accent">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Enlaces
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {enlaces.map((enlace) => (
                <li key={enlace.href}>
                  <Link href={enlace.href} className="hover:text-accent">
                    {enlace.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-6 text-center text-xs text-white/90">
          &copy; {new Date().getFullYear()} Curia Abogados. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
