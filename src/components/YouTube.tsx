export default function YouTubeSection() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <p className="text-sm text-accent-dark">Canal Curia</p>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              Derecho explicado en vídeo
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              En nuestro canal de YouTube resolvemos las dudas legales más
              habituales: divorcios, desahucios, despidos y mucho más, con el
              mismo trato cercano que en el despacho.
            </p>
            <a
              href="https://www.youtube.com/@curia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-sm border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-dark hover:text-accent-dark"
            >
              Ver canal en YouTube
            </a>
          </div>

          <div className="md:col-span-7">
            <div className="aspect-video w-full overflow-hidden rounded-sm border border-border-soft">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/videoseries?list=REEMPLAZAR_CON_ID_DE_PLAYLIST_O_UPLOADS"
                title="Canal de YouTube Curia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
