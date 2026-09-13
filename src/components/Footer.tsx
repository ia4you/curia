import { Phone, Mail, MapPin } from "lucide-react";

const areas = [
  "Acoso",
  "Desahucios",
  "Violencia de género",
  "Incumplimientos contractuales",
  "Divorcios",
  "Accidentes de tráfico",
];

const enlaces = ["Aviso legal", "Política de privacidad", "Cookies", "Términos y condiciones"];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/logo.png"
              alt="Curia Abogados"
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Despacho de abogados en Las Palmas de Gran Canaria. Queremos
              ayudarte a solucionar todo tipo de conflictos que se originan en
              la vida cotidiana de las personas.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="tel:+34928248581" className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-accent" /> 928 248 581
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@curiaabogados.es"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" /> info@curiaabogados.es
                </a>
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

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Áreas de derecho
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {areas.map((area) => (
                <li key={area}>
                  <a href="#especialidades" className="hover:text-white">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Enlaces
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {enlaces.map((enlace) => (
                <li key={enlace}>
                  <a href="#" className="hover:text-white">
                    {enlace}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Curia Abogados. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
