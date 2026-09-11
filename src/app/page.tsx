import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Especialidades from "@/components/Especialidades";
import QuienesSomos from "@/components/QuienesSomos";
import Testimonios from "@/components/Testimonios";
import YouTubeSection from "@/components/YouTube";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Especialidades />
      <QuienesSomos />
      <Testimonios />
      <YouTubeSection />
      <Footer />
    </main>
  );
}
