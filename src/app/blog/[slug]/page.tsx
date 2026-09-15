import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

function truncate(text: string, length: number): string {
  const plain = text.replace(/<[^>]+>/g, "");
  return plain.length > length ? `${plain.slice(0, length).trimEnd()}…` : plain;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post || !post.published) {
    return { title: "Blog | Curia Abogados" };
  }

  const description = post.excerpt || truncate(post.content, 160);

  return {
    title: `${post.title} | Curia Abogados`,
    description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main>
      <Header />

      <article className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-[900px] px-6 md:px-12">
          <p className="text-sm text-ink-soft">
            {post.createdAt.toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-2 font-serif text-3xl text-ink md:text-4xl">{post.title}</h1>

          {post.coverImageUrl && (
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-sand">
              <Image
                src={post.coverImageUrl}
                alt=""
                fill
                sizes="(min-width: 768px) 900px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <div
            className="mt-10 whitespace-pre-wrap text-base leading-relaxed text-ink-soft [&_strong]:font-semibold [&_strong]:text-ink"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </main>
  );
}
