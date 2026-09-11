import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section id="equipo" className="relative overflow-hidden bg-accent py-24 md:py-32">
      <svg
        className="absolute top-0 left-0 h-16 w-full text-background md:h-24"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,40 C1140,110 780,10 420,70 C240,100 100,60 0,90 Z"
        />
      </svg>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden border-4 border-white/40"
            style={{ borderRadius: "3rem 1rem 3rem 1rem" }}
          >
            <Image
              src="/images/equipo.png"
              alt="Estefanía Pérez y Saro Morales, socias fundadoras de Curia Abogados"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-white/70" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Sobre nosotros
            </p>
          </div>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase text-white md:text-4xl">
            Quiénes somos
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/90">
            El despacho de Curia Abogados nace de la pasión por el Derecho de
            dos abogadas que deciden compartir su camino jurídico con el
            objetivo de ayudar a solucionar todo tipo de conflictos que se
            originan en la vida cotidiana de las personas. Somos Estefanía
            Pérez y Saro Morales y, en este camino, estaremos junto a ti.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-block bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-accent-dark transition-opacity hover:opacity-90"
          >
            Saber más
          </a>
        </div>
      </div>

      <div id="fincas" className="relative mx-auto mt-16 max-w-6xl px-6">
        <div className="rounded-sm border border-white/25 bg-white/10 p-8 backdrop-blur-sm md:p-10">
          <h3 className="font-serif text-xl font-bold uppercase text-white md:text-2xl">
            Administradores de fincas
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/85">
            Gestionamos eficazmente su comunidad de propietarios: desde la
            administración de cuentas bancarias y cobro de cuotas, hasta la
            gestión de morosidad y la búsqueda de personal cualificado para
            el edificio.
          </p>
          <a
            href="#contacto"
            className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-white underline underline-offset-4 hover:text-white/80"
          >
            Saber más sobre este servicio
          </a>
        </div>
      </div>
    </section>
  );
}
