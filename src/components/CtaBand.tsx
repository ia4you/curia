export default function CtaBand() {
  return (
    <section className="bg-sand py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 bg-ink px-8 py-12 md:flex-row md:items-center md:px-12">
          <div>
            <h2 className="font-serif text-3xl uppercase text-white md:text-4xl">
              ¿Tienes un problema?
            </h2>
            <p className="mt-3 max-w-md text-white/60">
              Contacta con nosotros y pongámonos manos a la obra para
              solucionarlo.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
