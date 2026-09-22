import ScrollBackground from "@/components/background/ScrollBackground";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Journey from "@/components/journey/Journey";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#BEB7A4] text-[#000000] dark:bg-[#000000] dark:text-[#FFFFFC]">
      <ScrollBackground />

      <Navbar />

      <Hero />

      <About />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
    </main>
  );
}