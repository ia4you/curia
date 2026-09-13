import { Scale, GraduationCap, BookOpen, Home } from "lucide-react";

const features = [
  {
    icon: Scale,
    titulo: "Asesoramiento legal rápido",
    texto: "Respuesta ágil ante cualquier consulta, sin esperas innecesarias.",
  },
  {
    icon: GraduationCap,
    titulo: "Abogadas expertas",
    texto:
      "Estefanía Pérez y Saro Morales, colegiadas y especializadas en cada área.",
  },
  {
    icon: BookOpen,
    titulo: "Más de 15 años de experiencia",
    texto: "Trayectoria consolidada resolviendo conflictos reales.",
  },
  {
    icon: Home,
    titulo: "Derecho civil y mercantil",
    texto:
      "Divorcios, desahucios, incumplimientos contractuales y administración de fincas.",
  },
];

export default function FeatureIcons() {
  return (
    <section className="relative z-10 -mt-16 md:-mt-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.titulo}
              className="bg-white p-8 text-center shadow-[0_10px_40px_-15px_rgba(15,43,39,0.25)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <item.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-ink">
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
