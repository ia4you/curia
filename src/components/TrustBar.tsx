const datos = [
  { valor: "15+", etiqueta: "años de experiencia" },
  { valor: "2", etiqueta: "abogadas fundadoras" },
  { valor: "Trato cercano", etiqueta: "y honesto" },
  { valor: "Las Palmas", etiqueta: "de Gran Canaria" },
];

export default function TrustBar() {
  return (
    <section className="bg-sand py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 text-center md:grid-cols-4">
        {datos.map((dato) => (
          <div
            key={dato.etiqueta}
            className="px-6 md:border-l md:border-border-soft md:first:border-l-0"
          >
            <p className="font-serif text-4xl text-accent md:text-5xl">
              {dato.valor}
            </p>
            <p className="mt-1 text-xs text-ink-soft">{dato.etiqueta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
