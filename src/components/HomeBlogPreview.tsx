import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function HomeBlogPreview() {
  // The homepage is statically generated; if the database can't be reached
  // at build time (e.g. a build environment without network access to it),
  // fail safe by rendering nothing instead of failing the whole build.
  // `revalidatePath("/")` in the post actions keeps this section fresh
  // afterwards whenever a post is created, edited, or deleted.
  const posts = await prisma.post
    .findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 2,
    })
    .catch(() => []);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-dark">Blog</p>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">Últimas entradas</h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-wide text-accent-dark underline underline-offset-4 hover:text-ink"
          >
            Ver todas
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden border border-border-soft bg-white transition-colors duration-200 hover:border-accent hover:bg-accent/10"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-sand">
                {post.coverImageUrl ? (
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-accent/10">
                    <Image
                      src="/images/logo.png"
                      alt=""
                      width={96}
                      height={26}
                      className="h-6 w-auto opacity-40"
                    />
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs text-ink-soft">
                  {post.createdAt.toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3 className="mt-2 font-serif text-lg text-ink">{post.title}</h3>
                {post.excerpt && (
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
