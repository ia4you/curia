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
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
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
        className="absolute bottom-0 left-0 h-24 w-full text-accent md:h-32"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,160 L0,80 C240,20 480,140 720,90 C960,40 1200,120 1440,60 L1440,160 Z"
        />
      </svg>
    </section>
  );
}
