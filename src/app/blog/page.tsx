import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

const title = "Blog | Curia Abogados";
const description =
  "Artículos y actualidad legal del despacho Curia Abogados en Las Palmas de Gran Canaria.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    url: `${SITE_URL}/blog`,
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main>
      <Header />

      <section className="bg-sand py-12 md:py-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          <h1 className="font-serif text-3xl text-ink md:text-4xl">Blog</h1>
          <p className="mt-2 text-ink-soft">Actualidad y análisis legal de Curia Abogados.</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          {posts.length === 0 ? (
            <p className="text-ink-soft">Todavía no hay artículos publicados.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border-soft bg-background transition hover:shadow-md"
                >
                  {post.coverImageUrl && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand">
                      <Image
                        src={post.coverImageUrl}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-xs text-ink-soft">
                      {post.createdAt.toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h2 className="mt-2 font-serif text-lg text-ink">{post.title}</h2>
                    {post.excerpt && (
                      <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
