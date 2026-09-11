import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/equipo.png"
          alt="Equipo de Curia Abogados"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44">
        <p className="text-sm font-bold uppercase tracking-widest text-white">
          Directo, rápido y eficaz
        </p>
        <h1 className="mt-4 font-serif text-5xl font-bold uppercase leading-[1.05] text-accent md:text-7xl">
          Curia Abogados
        </h1>
        <p className="mt-6 max-w-xl font-serif text-2xl italic text-white md:text-3xl">
          &ldquo;Primero en el tiempo, mejor en el Derecho&rdquo;
        </p>
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
          Nos avala la experiencia de más de 15 años ayudando a solucionar los
          conflictos que se originan en la vida cotidiana de las personas, con
          un trato cercano, honesto y profesional.
        </p>
      </div>

      <svg
        className="absolute bottom-0 right-0 h-16 w-1/2 text-accent md:h-24 md:w-1/3"
        viewBox="0 0 400 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M400,0 L400,160 L160,160 Z" />
      </svg>
    </section>
  );
}
