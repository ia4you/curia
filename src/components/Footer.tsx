import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-accent-dark py-16 text-white/90">
      <svg
        className="absolute top-0 left-0 h-16 w-full text-sand md:h-20"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,20 C1200,90 900,0 600,50 C360,90 150,30 0,60 Z"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 pt-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/logo.png"
              alt="Curia Abogados"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Queremos ayudarte a solucionar todo tipo de conflictos que se
              originan en la vida cotidiana de las personas. En este camino,
              estaremos junto a ti.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/Curia-Abogados-104618574853391"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/74266128/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/curiaabogados/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm uppercase tracking-wide text-white/50">Contacto</p>
            <a
              href="tel:+34928248581"
              className="mt-3 flex items-center gap-2 text-sm text-white/90 hover:text-white"
            >
              <Phone className="h-4 w-4" /> 928 248 581
            </a>
            <a
              href="tel:+34679721167"
              className="mt-2 flex items-center gap-2 text-sm text-white/90 hover:text-white"
            >
              <Phone className="h-4 w-4" /> 679 721 167
            </a>
            <a
              href="mailto:info@curiaabogados.es"
              className="mt-2 flex items-center gap-2 text-sm text-white/90 hover:text-white"
            >
              <Mail className="h-4 w-4" /> info@curiaabogados.es
            </a>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-wide text-white/50">Dirección</p>
            <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-white/90">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                C/ León y Castillo 39, 5B
                <br />
                Las Palmas de Gran Canaria
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white/80">Cookies</a>
            <a href="#" className="hover:text-white/80">Aviso Legal</a>
            <a href="#" className="hover:text-white/80">Política de Privacidad</a>
            <a href="#" className="hover:text-white/80">Términos y condiciones</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Curia Abogados. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
