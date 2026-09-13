import Link from "next/link";

export default function SpecialtyHero({
  title,
  navLabel,
}: {
  title: string;
  navLabel: string;
}) {
  return (
    <section className="bg-sand py-12 md:py-16">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-ink-soft">
          <Link href="/" className="hover:text-accent">
            Inicio
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{navLabel}</span>
        </nav>
        <h1 className="mt-3 font-serif text-3xl text-ink md:text-4xl">{title}</h1>
      </div>
    </section>
  );
}
