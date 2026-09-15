import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-[1600px] items-center gap-16 px-6 md:grid-cols-2 md:px-12 lg:px-20">
        <div className="relative w-full">
          <div
            aria-hidden="true"
            className="absolute -left-6 -top-6 h-32 w-32 text-accent/50"
            style={{
              backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/equipo-oficina.webp"
              alt="Estefanía Pérez y Saro Morales, socias fundadoras de Curia Abogados, en su despacho"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover object-[55%_center]"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-accent-dark">
            Sobre nosotros
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
            Generamos confianza y somos meticulosas con tu caso.
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">
            El despacho de Curia Abogados nace de la pasión por el Derecho de
            dos abogadas que deciden compartir su camino jurídico con el
            objetivo de ayudar a solucionar todo tipo de conflictos que se
            originan en la vida cotidiana de las personas.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Nos avala la experiencia de más de 15 años ayudando a resolver
            estos conflictos, con un trato cercano, honesto y profesional en
            cada paso del proceso.
          </p>
          <p className="mt-6 font-serif italic text-ink">
            Estefanía Pérez y Saro Morales — Socias fundadoras
          </p>
          <a
            href="#equipo"
            className="mt-8 inline-block bg-ink px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent"
          >
            Conoce al equipo
          </a>
        </div>
      </div>
    </section>
  );
}
