import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b border-border-soft bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="text-sm text-accent-dark">
            Las Palmas de Gran Canaria &mdash; desde hace más de 15 años
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-ink md:text-6xl">
            Primero en el tiempo,
            <br />
            <span className="italic text-accent-dark">mejor en el Derecho.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Somos Estefanía Pérez y Saro Morales. Ayudamos a solucionar los
            conflictos que se originan en la vida cotidiana de las personas,
            con un trato cercano, honesto y profesional.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-dark transition-opacity hover:opacity-90"
            >
              Pedir consulta online
            </a>
            <a
              href="tel:+34928248581"
              className="rounded-sm border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-dark hover:text-accent-dark"
            >
              Llamar ahora &mdash; 928 248 581
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <Image
            src="/images/hero-socias.jpg"
            alt="Estefanía Pérez y Saro Morales, socias fundadoras de Curia Abogados, en su despacho"
            width={600}
            height={720}
            className="h-full w-full rounded-sm object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
