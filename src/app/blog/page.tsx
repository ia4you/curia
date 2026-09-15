import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import SpecialtyHero from "@/components/SpecialtyHero";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | Curia Abogados",
  description:
    "Artículos y novedades legales de Curia Abogados, despacho de abogados en Las Palmas de Gran Canaria.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <Header />
      <SpecialtyHero title="Blog" navLabel="Blog" />

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          {posts.length === 0 ? (
            <p className="text-center text-ink-soft">Todavía no hay artículos publicados.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
