export default function Footer() {
  return (
    <footer id="contacto" className="bg-accent-dark py-16 text-white/90">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl text-white">Curia Abogados</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Queremos ayudarte a solucionar todo tipo de conflictos que se
              originan en la vida cotidiana de las personas. En este camino,
              estaremos junto a ti.
            </p>
            <div className="mt-6 flex gap-4 text-sm">
              <a
                href="https://www.facebook.com/Curia-Abogados-104618574853391"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/74266128/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/curiaabogados/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@curia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent"
              >
                YouTube
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm text-white/50">Contacto</p>
            <a
              href="tel:+34928248581"
              className="mt-3 block text-sm text-white/90 hover:text-accent"
            >
              928 248 581
            </a>
            <a
              href="tel:+34679721167"
              className="mt-1 block text-sm text-white/90 hover:text-accent"
            >
              679 721 167
            </a>
            <a
              href="mailto:info@curiaabogados.es"
              className="mt-3 block text-sm text-white/90 hover:text-accent"
            >
              info@curiaabogados.es
            </a>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm text-white/50">Dirección</p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              C/ León y Castillo 39, 5B
              <br />
              Las Palmas de Gran Canaria
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Curia Abogados. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/80">Aviso legal</a>
            <a href="#" className="hover:text-white/80">Política de privacidad</a>
            <a href="#" className="hover:text-white/80">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
