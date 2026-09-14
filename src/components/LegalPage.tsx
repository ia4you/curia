import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main>
      <Header />

      <section className="bg-sand py-12 md:py-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          <h1 className="font-serif text-3xl text-ink md:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-ink-soft">Última actualización: {updated}</p>
        </div>
      </section>

      <article className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-xl text-ink">{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
