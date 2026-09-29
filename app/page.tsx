import ScrollBackground from "@/components/background/ScrollBackground";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Journey from "@/components/journey/Journey";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F7F4EC] text-[#0E0E0E] dark:bg-[#070707] dark:text-[#FFFFFF]">
      <ScrollBackground />

      <Navbar />

      <Hero />

      <About />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}