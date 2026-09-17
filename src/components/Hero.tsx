import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent">
      <div
        className="relative h-72 w-full sm:h-96 md:absolute md:inset-y-0 md:right-0 md:h-full md:w-1/2 lg:w-[55%]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)",
        }}
      >
        <Image
          src="/images/hero-oficina.webp"
          alt="Estefanía Pérez y Saro Morales en el despacho de Curia Abogados"
          fill
          preload
          fetchPriority="high"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 55vw"
          className="object-cover object-[65%_30%]"
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
          href="/contacto"
          className="mt-8 inline-block bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark"
        >
          Pedir consulta online
        </a>
      </div>
    </section>
  );
}
