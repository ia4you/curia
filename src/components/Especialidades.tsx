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
    <section id="especialidades" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center gap-3">
          <span className="h-3 w-3 bg-accent" />
          <h2 className="font-serif text-3xl uppercase text-ink md:text-4xl">
            Nuestras especialidades
          </h2>
        </div>

        <div className="mt-14 grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((item) => (
            <div key={item.titulo}>
              <item.icon className="mx-auto h-10 w-10 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-lg uppercase tracking-wide text-ink">
                {item.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
