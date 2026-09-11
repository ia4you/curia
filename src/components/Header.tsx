"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#areas", label: "Áreas de derecho" },
  { href: "#fincas", label: "Administradores de fincas" },
  { href: "#equipo", label: "Sobre nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Curia Abogados" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+34928248581" className="text-sm text-ink-soft hover:text-ink">
            928 248 581
          </a>
          <a
            href="#contacto"
            className="rounded-sm bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Consulta online
          </a>
        </div>

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
            className="mt-2 inline-block rounded-sm bg-accent px-4 py-2 text-center text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Consulta online
          </a>
        </nav>
      )}
    </header>
  );
}
