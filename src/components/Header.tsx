"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import { dropdownSpecialties } from "@/lib/specialties";

type NavLink = {
  href: string;
  label: string;
  submenu?: { href: string; label: string }[];
};

const links: NavLink[] = [
  { href: "/", label: "Portada" },
  { href: "/areas-de-derecho", label: "Áreas de derecho" },
  { href: "/administradores-de-fincas", label: "Administradores de fincas" },
  {
    href: "/#especialidades",
    label: "Especialidades",
    submenu: dropdownSpecialties.map((specialty) => ({
      href: `/${specialty.slug}`,
      label: specialty.navLabel,
    })),
  },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "Sobre nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="hidden border-b border-border-soft bg-white md:block">
        <div className="flex justify-end gap-6 px-6 py-2 text-xs text-ink-soft md:px-12 lg:px-20">
          <a
            href="mailto:info@curiaabogados.es"
            className="flex items-center gap-1.5 hover:text-accent"
          >
            <Mail className="h-3.5 w-3.5" />
            info@curiaabogados.es
          </a>
          <a
            href="tel:+34928248581"
            className="flex items-center gap-1.5 py-3.5 px-2 hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            928 248 581
          </a>
        </div>
      </div>

      <div className="sticky top-0 z-50 border-b border-border-soft bg-white">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Curia Abogados"
              width={136}
              height={36}
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-7 md:flex">
            {links.map((link) =>
              link.submenu ? (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 max-h-[70vh] min-w-[240px] -translate-y-1 overflow-y-auto border border-border-soft bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-ink-soft hover:bg-sand hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <a
            href="/#contacto"
            className="hidden shrink-0 items-center gap-2 bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-accent-dark transition-opacity hover:opacity-90 md:flex"
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
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm text-ink-soft"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="ml-4 flex flex-col gap-1 border-l border-border-soft pl-3">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="py-1.5 text-sm text-ink-soft"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="mailto:info@curiaabogados.es"
              className="mt-2 flex items-center gap-1.5 py-1 text-sm text-ink-soft"
            >
              <Mail className="h-4 w-4" /> info@curiaabogados.es
            </a>
            <a
              href="tel:+34928248581"
              className="-mx-1 flex items-center gap-1.5 px-1 py-3.5 text-sm text-ink-soft"
            >
              <Phone className="h-4 w-4" /> 928 248 581
            </a>
            <a
              href="/#contacto"
              className="mt-3 inline-block bg-accent px-4 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-accent-dark"
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
