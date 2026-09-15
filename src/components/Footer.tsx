import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

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
    <footer className="bg-accent text-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo.png"
              alt="Curia Abogados"
              width={136}
              height={36}
              className="h-9 w-auto brightness-0"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/90">
              Despacho de abogados en Las Palmas de Gran Canaria. Queremos
              ayudarte a solucionar todo tipo de conflictos que se originan en
              la vida cotidiana de las personas.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+34928248581"
                  className="-mx-1 flex items-center gap-2 px-1 py-3.5 hover:text-accent-dark"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-dark" /> 928 248 581
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@curiaabogados.es"
                  className="flex items-center gap-2 hover:text-accent-dark"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-dark" /> info@curiaabogados.es
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
                <span>
                  C/ León y Castillo 39, 5B
                  <br />
                  Las Palmas de Gran Canaria
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Áreas de derecho
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {areas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="hover:text-accent-dark">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Enlaces
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {enlaces.map((enlace) => (
                <li key={enlace.href}>
                  <Link href={enlace.href} className="hover:text-accent-dark">
                    {enlace.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ink/15 pt-6 text-center text-xs text-ink">
          &copy; {new Date().getFullYear()} Curia Abogados. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
