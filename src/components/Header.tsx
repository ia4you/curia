"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const links: { href: string; label: string; submenu?: string[] }[] = [
  { href: "/", label: "Portada" },
  { href: "#areas", label: "Áreas de derecho" },
  { href: "#fincas", label: "Administradores de fincas" },
  {
    href: "#especialidades",
    label: "Especialidades",
    submenu: [
      "Acoso",
      "Desahucios",
      "Violencia de género",
      "Incumplimientos contractuales",
      "Divorcios",
      "Accidentes de tráfico",
    ],
  },
  {
    href: "#equipo",
    label: "Sobre nosotros",
    submenu: ["Estefanía Pérez", "Saro Morales"],
  },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="sticky top-0 z-50 border-b border-border-soft bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Curia Abogados" className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) =>
              link.submenu ? (
                <div key={link.href} className="group relative">
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </a>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[220px] -translate-y-1 rounded-sm border border-border-soft bg-background py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {link.submenu.map((item) => (
                      <a
                        key={item}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-ink-soft hover:bg-sand hover:text-ink"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <a
            href="#contacto"
            className="hidden items-center gap-2 bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90 md:flex"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 88% 100%, 0 100%)" }}
          >
            <MessageCircle className="h-4 w-4" />
            Consulta online
          </a>

          <button
            className="md:hidden"
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 w-6 bg-ink" />
            <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
            <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-border-soft px-6 py-4 md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-2 inline-block bg-accent px-4 py-2 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Consulta online
            </a>
          </nav>
        )}
      </div>

      <div className="hidden border-b border-border-soft bg-sand py-2 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-xs text-ink-soft">
          <div className="flex items-center gap-6">
            <a href="tel:+34928248581" className="flex items-center gap-1.5 hover:text-ink">
              <Phone className="h-3.5 w-3.5 text-accent" />
              928 248 581
            </a>
            <a
              href="mailto:info@curiaabogados.es"
              className="flex items-center gap-1.5 hover:text-ink"
            >
              <Mail className="h-3.5 w-3.5 text-accent" />
              info@curiaabogados.es
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/Curia-Abogados-104618574853391"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/74266128/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/curiaabogados/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
