export default function Hero() {
  return (
    <section className="border-b border-border-soft bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="text-sm text-accent-dark">
            Las Palmas de Gran Canaria &mdash; desde hace más de 15 años
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-ink md:text-6xl">
            Primero en el tiempo,
            <br />
            <span className="italic text-accent-dark">mejor en el Derecho.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Somos Estefanía Pérez y Saro Morales. Ayudamos a solucionar los
            conflictos que se originan en la vida cotidiana de las personas,
            con un trato cercano, honesto y profesional.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Pedir consulta online
            </a>
            <a
              href="tel:+34928248581"
              className="rounded-sm border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-dark hover:text-accent-dark"
            >
              Llamar ahora &mdash; 928 248 581
            </a>
          </div>
        </div>

        <div className="md:col-span-5 md:pt-4">
          <div className="border-l-2 border-accent pl-6">
            <p className="font-serif text-lg italic leading-relaxed text-ink">
              &ldquo;Muchas gracias por ayudarme con la recuperación de la
              vivienda. Un buen equipo de profesionales, siempre atenta para
              pasarme la información que necesitaba.&rdquo;
            </p>
            <p className="mt-4 text-sm text-ink-soft">Alba M.P. &mdash; cliente</p>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border-soft pt-8">
            <div>
              <dt className="text-sm text-ink-soft">Experiencia</dt>
              <dd className="font-serif text-3xl text-ink">15+ años</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-soft">Fundadoras</dt>
              <dd className="font-serif text-3xl text-ink">2 abogadas</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
