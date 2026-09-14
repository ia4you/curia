"use client";

import Image from "next/image";

export default function ContactSection() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section id="contacto" className="scroll-mt-20 bg-white">
      <div className="grid md:grid-cols-2">
        <div className="relative order-last hidden min-h-[420px] md:order-first md:block">
          <Image
            src="/images/contacto-equipo.jpg"
            alt="Saro Morales y Estefanía Pérez, fundadoras de Curia Abogados, en su despacho de Las Palmas de Gran Canaria"
            fill
            className="object-cover object-right"
          />
        </div>

        <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="max-w-md">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Contacto</p>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">Consulta gratuita</h2>
            <p className="mt-4 text-ink-soft">
              Cuéntanos tu caso y te responderemos a la mayor brevedad posible.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label htmlFor="nombre" className="sr-only">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  required
                  className="w-full border border-border-soft bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-accent focus:outline-none"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full border border-border-soft bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="sr-only">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full border border-border-soft bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mensaje" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Mensaje"
                  required
                  className="w-full border border-border-soft bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
