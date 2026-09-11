export default function CtaBand() {
  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl text-accent-dark md:text-4xl">
            ¿Tienes un problema legal?
          </h2>
          <p className="mt-3 max-w-md text-accent-dark/80">
            Contacta con nosotros y pongámonos manos a la obra para
            solucionarlo.
          </p>
        </div>
        <a
          href="#contacto"
          className="rounded-sm bg-accent-dark px-8 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Contactar ahora
        </a>
      </div>
    </section>
  );
}
