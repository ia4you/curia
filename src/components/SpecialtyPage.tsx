import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import SpecialtyHero from "@/components/SpecialtyHero";
import { renderBold } from "@/lib/renderBold";
import type { SpecialtyContent } from "@/lib/specialties";

function IntroWithImage({ data }: { data: SpecialtyContent }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={data.introImage ?? "/images/equipo-consulta.webp"}
          alt={data.introImageAlt ?? "Abogada de Curia Abogados en consulta cercana con una clienta"}
          fill
          className="object-cover"
        />
      </div>
      <div>
        {data.intro.map((paragraph, i) => (
          <p key={i} className="mb-5 text-lg leading-relaxed text-ink-soft last:mb-0">
            {renderBold(paragraph)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function SpecialtyPage({ data }: { data: SpecialtyContent }) {
  return (
    <main>
      <Header />
      <SpecialtyHero title={data.title} navLabel={data.navLabel} />

      {data.practiceAreas ? (
        <article className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
            <IntroWithImage data={data} />

            <div className="mt-16 space-y-14">
              {data.practiceAreas.map((area) => (
                <div
                  key={area.title}
                  className="border-t border-border-soft pt-10 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <area.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl text-ink">{area.title}</h2>
                      <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </article>
      ) : data.cardSections ? (
        <article className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
            <IntroWithImage data={data} />

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {data.cardSections.map((card) => (
                <div
                  key={card.title}
                  className="border border-border-soft bg-white p-8 shadow-none transition-colors duration-200 hover:border-accent hover:bg-accent/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <card.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif text-lg text-ink">{card.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ) : (
        <article className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
            <div className="mx-auto max-w-3xl">
              {data.intro.map((paragraph, i) => (
                <p key={i} className="mb-5 leading-relaxed text-ink-soft">
                  {renderBold(paragraph)}
                </p>
              ))}

              {data.sectionTitle && (
                <h2 className="mt-10 font-serif text-2xl text-ink md:text-3xl">
                  {data.sectionTitle}
                </h2>
              )}
              <div className="mt-6 space-y-6">
                {data.subtopics?.map((subtopic) => (
                  <div key={subtopic.title}>
                    <h3 className="font-serif text-lg text-ink">{subtopic.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {renderBold(subtopic.text)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-5">
                {data.processParagraphs?.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-ink-soft">
                    {renderBold(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      )}

      <section className="bg-accent py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/contacto-equipo.webp"
                alt="Saro Morales y Estefanía Pérez, fundadoras de Curia Abogados"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-xl uppercase tracking-wide text-ink md:text-2xl">
                {data.advantagesTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {data.advantages.map((advantage) => (
                  <li key={advantage} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ink" />
                    <span className="text-ink/90">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
