const especialidades = [
  {
    titulo: "Divorcios",
    texto:
      "Disolución del matrimonio, a solicitud de uno o de los dos cónyuges, con acompañamiento en cada paso del proceso.",
  },
  {
    titulo: "Guarda y custodia",
    texto:
      "Acuerdos y procedimientos sobre el cuidado de los hijos, priorizando siempre su bienestar.",
  },
  {
    titulo: "Despidos",
    texto:
      "Defensa de trabajadores ante despidos improcedentes o nulos y reclamación de indemnizaciones.",
  },
  {
    titulo: "Robos o hurtos",
    texto:
      "Asistencia en denuncias, comisaría y juzgado ante sustracción de bienes.",
  },
  {
    titulo: "Estafas",
    texto:
      "Actuación penal y civil frente a fraudes y engaños patrimoniales.",
  },
  {
    titulo: "Accidentes de tráfico",
    texto:
      "Reclamación de indemnizaciones por lesiones y daños derivados de siniestros viales.",
  },
  {
    titulo: "Acoso",
    texto:
      "Puede darse en cualquier ámbito y lo puede sufrir cualquier persona, sin distinción social o económica.",
  },
  {
    titulo: "Desahucios",
    texto:
      "Desalojo de inquilinos de vivienda o local comercial por orden judicial.",
  },
  {
    titulo: "Violencia de género",
    texto:
      "Todo acto que pueda causar daño físico, sexual o psicológico a la mujer.",
  },
];

export default function Especialidades() {
  return (
    <section id="areas" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Nuestras especialidades
          </h2>
          <p className="mt-4 text-ink-soft">
            Procedimientos civiles, penales y mercantiles. Cada caso se
            estudia de forma individual, con la cercanía de un despacho
            pequeño y la solidez de más de 15 años de ejercicio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((item) => (
            <div
              key={item.titulo}
              className="rounded-sm border border-border-soft bg-background p-8"
            >
              <div className="h-[3px] w-10 bg-accent" />
              <h3 className="mt-4 font-serif text-xl text-ink">{item.titulo}</h3>
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
