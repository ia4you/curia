import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section id="equipo" className="bg-accent py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-6">
          <h2 className="font-serif text-3xl text-accent-dark md:text-4xl">
            Quiénes somos
          </h2>
          <p className="mt-6 leading-relaxed text-accent-dark/80">
            El despacho de Curia Abogados nace de la pasión por el Derecho de
            dos abogadas que deciden compartir su camino jurídico con el
            objetivo de ayudar a solucionar todo tipo de conflictos que se
            originan en la vida cotidiana de las personas.
          </p>
          <p className="mt-4 leading-relaxed text-accent-dark/80">
            Somos Estefanía Pérez y Saro Morales y, en este camino, estaremos
            junto a ti.
          </p>

          <img
            src="/images/equipo.png"
            alt="Equipo de Curia Abogados"
            className="mt-8 w-full rounded-sm object-cover"
          />

          <div className="mt-8 flex gap-10 border-t border-accent-dark/20 pt-8">
            <div>
              <p className="font-serif text-2xl text-accent-dark">Estefanía Pérez</p>
              <p className="text-sm text-accent-dark/70">Socia fundadora</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-accent-dark">Saro Morales</p>
              <p className="text-sm text-accent-dark/70">Socia fundadora</p>
            </div>
          </div>
        </div>

        <div id="fincas" className="md:col-span-6">
          <div className="h-full rounded-sm border border-accent-dark/10 bg-background p-10">
            <Image
              src="/images/edificio-fincas.jpg"
              alt="Ilustración de un edificio gestionado por administración de fincas"
              width={400}
              height={299}
              className="w-full rounded-sm object-cover"
            />
            <h3 className="mt-6 font-serif text-2xl text-ink">
              Administradores de fincas
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Gestionamos eficazmente su comunidad de propietarios: desde la
              administración de cuentas bancarias y cobro de cuotas, hasta la
              gestión de morosidad y la búsqueda de personal cualificado para
              el edificio.
            </p>
            <a
              href="#contacto"
              className="mt-6 inline-block text-sm font-medium text-accent-dark underline underline-offset-4"
            >
              Saber más sobre este servicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
