import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureIcons from "@/components/FeatureIcons";
import AboutSection from "@/components/AboutSection";
import StatsBar from "@/components/StatsBar";
import Especialidades from "@/components/Especialidades";
import Equipo from "@/components/Equipo";
import HomeBlogPreview from "@/components/HomeBlogPreview";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

// Safety net on top of the on-demand revalidatePath("/") calls in the blog
// admin actions: this page has no dynamic APIs, so Next.js caches it
// indefinitely (Cache-Control: s-maxage=31536000) until revalidated. That
// header is also what any reverse proxy/CDN in front of the app will honor —
// revalidatePath only clears Next's own origin cache, it can't reach a
// caching layer sitting in front of it. A short time-based revalidate keeps
// that external cache window bounded even if an on-demand call doesn't
// propagate for some reason.
export const revalidate = 60;

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureIcons />
      <AboutSection />
      <StatsBar />
      <Especialidades />
      <Equipo />
      <HomeBlogPreview />
      <CtaBand />
      <Footer />
    </main>
  );
}
