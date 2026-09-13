"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle, ChevronDown, Menu, X } from "lucide-react";

const links: { href: string; label: string; submenu?: string[] }[] = [
  { href: "/", label: "Portada" },
  { href: "#especialidades", label: "Áreas de derecho" },
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
  { href: "#about", label: "Sobre nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="hidden border-b border-border-soft bg-white md:block">
        <div className="mx-auto flex max-w-6xl justify-end gap-6 px-6 py-2 text-xs text-ink-soft">
          <a
            href="mailto:info@curiaabogados.es"
            className="flex items-center gap-1.5 hover:text-accent"
          >
            <Mail className="h-3.5 w-3.5" />
            info@curiaabogados.es
          </a>
          <a href="tel:+34928248581" className="flex items-center gap-1.5 hover:text-accent">
            <Phone className="h-3.5 w-3.5" />
            928 248 581
          </a>
        </div>
      </div>

      <div className="sticky top-0 z-50 border-b border-border-soft bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex shrink-0 items-center">
            <img src="/images/logo.png" alt="Curia Abogados" className="h-9 w-auto" />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-7 md:flex">
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
                  <div className="invisible absolute left-0 top-full z-50 min-w-[220px] -translate-y-1 border border-border-soft bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
            className="hidden shrink-0 items-center gap-2 bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90 md:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Consulta online
          </a>

          <button
            className="text-ink md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              href="mailto:info@curiaabogados.es"
              className="mt-2 flex items-center gap-1.5 py-1 text-sm text-ink-soft"
            >
              <Mail className="h-4 w-4" /> info@curiaabogados.es
            </a>
            <a
              href="tel:+34928248581"
              className="flex items-center gap-1.5 py-1 text-sm text-ink-soft"
            >
              <Phone className="h-4 w-4" /> 928 248 581
            </a>
            <a
              href="#contacto"
              className="mt-3 inline-block bg-accent px-4 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-white"
              onClick={() => setOpen(false)}
            >
              Consulta online
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
