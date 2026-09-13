import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent to-accent-dark">
      <div className="relative h-72 w-full sm:h-96 md:absolute md:inset-y-0 md:right-0 md:h-full md:w-1/2 lg:w-[46%]">
        <Image
          src="/images/equipo.png"
          alt="Estefanía Pérez y Saro Morales, abogadas de Curia Abogados"
          fill
          preload
          className="object-cover object-top saturate-[0.9] contrast-[1.05] md:object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[18%] bg-gradient-to-r from-accent via-accent/40 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-xl px-6 py-16 md:px-12 md:py-28 lg:px-20 lg:py-36">
        <p className="text-sm font-bold uppercase tracking-widest text-accent-dark">
          Asesoría legal
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-accent-dark md:text-5xl lg:text-6xl">
          Despacho de abogados en Las Palmas de Gran Canaria
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink/80">
          Nos avala la experiencia de más de 15 años ayudando a solucionar
          los conflictos que se originan en la vida cotidiana de las
          personas, con un trato cercano, honesto y profesional.
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-block bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark"
        >
          Pedir consulta online
        </a>
      </div>
    </section>
  );
}
