import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcedimientosCards from "@/components/ProcedimientosCards";
import QuienesSomos from "@/components/QuienesSomos";
import Especialidades from "@/components/Especialidades";
import Testimonios from "@/components/Testimonios";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProcedimientosCards />
      <QuienesSomos />
      <Especialidades />
      <Testimonios />
      <CtaBand />
      <Footer />
    </main>
  );
}
