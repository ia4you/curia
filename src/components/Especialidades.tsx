import { Siren, Home, HeartCrack, FileWarning, Split, Car } from "lucide-react";

const especialidades = [
  {
    icon: Siren,
    titulo: "Acoso",
    texto:
      "Puede darse en cualquier ámbito y lo puede sufrir cualquier persona, sin distinción social o económica.",
  },
  {
    icon: Home,
    titulo: "Desahucios",
    texto: "Desalojo de inquilinos de vivienda o local comercial por orden judicial.",
  },
  {
    icon: HeartCrack,
    titulo: "Violencia de género",
    texto: "Todo acto que pueda causar daño físico, sexual o psicológico a la mujer.",
  },
  {
    icon: FileWarning,
    titulo: "Incumplimientos contractuales",
    texto:
      "Reclamación de daños y perjuicios derivados del incumplimiento de acuerdos entre particulares o empresas.",
  },
  {
    icon: Split,
    titulo: "Divorcios",
    texto:
      "Disolución del matrimonio, a solicitud de uno o de los dos cónyuges, con acompañamiento en cada paso del proceso.",
  },
  {
    icon: Car,
    titulo: "Accidentes de tráfico",
    texto:
      "Reclamación de indemnizaciones por lesiones y daños derivados de siniestros viales.",
  },
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Especialidades
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
            Nuestras áreas de práctica
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Acompañamos a nuestros clientes en los conflictos legales más
            habituales de la vida cotidiana, con un trato cercano y directo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((item) => (
            <div
              key={item.titulo}
              className="border border-border-soft bg-white p-8 text-center shadow-none transition-shadow hover:shadow-[0_10px_40px_-15px_rgba(15,43,39,0.2)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <item.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-serif text-lg text-ink">{item.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.texto}</p>
            </div>
          ))}
        </div>

        <div id="fincas" className="mt-16 scroll-mt-24 border border-border-soft bg-sand p-8 md:p-10">
          <h3 className="font-serif text-xl text-ink md:text-2xl">
            Administradores de fincas
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Gestionamos eficazmente su comunidad de propietarios: desde la
            administración de cuentas bancarias y cobro de cuotas, hasta la
            gestión de morosidad y la búsqueda de personal cualificado para
            el edificio.
          </p>
          <a
            href="#contacto"
            className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-accent underline underline-offset-4 hover:text-ink"
          >
            Saber más sobre este servicio
          </a>
        </div>
      </div>
    </section>
  );
}
