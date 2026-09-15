import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import SpecialtyHero from "@/components/SpecialtyHero";
import PortableTextBody from "@/components/PortableTextBody";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { urlForImage } from "@/lib/sanity";
import { SITE_URL } from "@/lib/site";

export const revalidate = 60;

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;

  return {
    title: `${title} | Curia Abogados`,
    description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      <Header />
      <SpecialtyHero title={post.title} navLabel="Blog" />

      <article className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-ink-soft">
              {formatDate(post.publishedAt)}
              {post.author ? ` · ${post.author}` : ""}
            </p>

            {post.mainImage && (
              <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image
                  src={urlForImage(post.mainImage.asset).width(1600).height(900).fit("crop").url()}
                  alt={post.mainImage.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 768px"
                  className="object-cover"
                  preload
                />
              </div>
            )}

            <div className="mt-10">
              <PortableTextBody value={post.body} />
            </div>
          </div>
        </div>
      </article>

      <CtaBand />
      <Footer />
    </main>
  );
}
