import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-28 pt-20 md:grid-cols-2 md:pb-40 md:pt-24">
        <div className="relative z-10">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Asesoría legal
          </p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Despacho de abogados en Las Palmas de Gran Canaria
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Nos avala la experiencia de más de 15 años ayudando a solucionar
            los conflictos que se originan en la vida cotidiana de las
            personas, con un trato cercano, honesto y profesional.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-block bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Pedir consulta online
          </a>
        </div>

        <div className="relative order-first h-[320px] md:order-none md:h-[520px]">
          <Image
            src="/images/equipo.png"
            alt="Estefanía Pérez y Saro Morales, abogadas de Curia Abogados"
            fill
            preload
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
