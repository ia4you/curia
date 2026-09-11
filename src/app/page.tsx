import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Especialidades from "@/components/Especialidades";
import QuienesSomos from "@/components/QuienesSomos";
import Testimonios from "@/components/Testimonios";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Especialidades />
      <QuienesSomos />
      <Testimonios />
      <CtaBand />
      <Footer />
    </main>
  );
}
