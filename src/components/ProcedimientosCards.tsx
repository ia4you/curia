import { Briefcase, Handshake, Landmark } from "lucide-react";

const procedimientos = [
  {
    icon: Briefcase,
    titulo: "Procedimientos civiles",
    texto:
      "Divorcios, guarda y custodia, desahucios y demás conflictos que se originan en la vida cotidiana de las personas.",
  },
  {
    icon: Handshake,
    titulo: "Procedimientos penales",
    texto:
      "Defensa y acusación en delitos como estafas, robos, acoso o violencia de género, con acompañamiento en cada fase del proceso.",
  },
  {
    icon: Landmark,
    titulo: "Procedimientos mercantiles",
    texto:
      "Reclamaciones e incumplimientos contractuales entre empresas y particulares, con soluciones ágiles y efectivas.",
  },
];

export default function ProcedimientosCards() {
  return (
    <section id="areas" className="relative z-10 -mt-20 md:-mt-28">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-3">
        {procedimientos.map((item) => (
          <div
            key={item.titulo}
            className="bg-ink px-8 py-10 text-center shadow-xl"
            style={{ clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0 100%)" }}
          >
            <item.icon className="mx-auto h-10 w-10 text-accent" strokeWidth={1.5} />
            <h3 className="mt-5 font-serif text-lg uppercase tracking-wide text-white">
              {item.titulo}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {item.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
