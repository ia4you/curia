import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureIcons from "@/components/FeatureIcons";
import AboutSection from "@/components/AboutSection";
import StatsBar from "@/components/StatsBar";
import Especialidades from "@/components/Especialidades";
import Equipo from "@/components/Equipo";
import CtaBand from "@/components/CtaBand";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <CtaBand />
      <ContactSection />
      <Footer />
    </main>
  );
}
