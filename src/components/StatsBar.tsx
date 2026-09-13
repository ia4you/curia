import { Award, Users, Briefcase, HeartHandshake } from "lucide-react";

const stats = [
  { icon: Award, cifra: "15+", etiqueta: "Años de experiencia" },
  { icon: Users, cifra: "2", etiqueta: "Abogadas fundadoras" },
  { icon: Briefcase, cifra: "+500", etiqueta: "Casos gestionados" },
  { icon: HeartHandshake, cifra: "100%", etiqueta: "Trato personalizado" },
];

export default function StatsBar() {
  return (
    <section className="bg-sand py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 bg-white px-8 py-12 shadow-[0_10px_40px_-15px_rgba(15,43,39,0.15)] sm:px-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.etiqueta} className="text-center">
              <stat.icon className="mx-auto h-6 w-6 text-accent" strokeWidth={1.5} />
              <p className="mt-4 font-serif text-3xl text-ink md:text-4xl">{stat.cifra}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft">
                {stat.etiqueta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
