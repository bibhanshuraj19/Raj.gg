import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Projects from "@/components/sections/index/Projects";
import Skills from "@/components/sections/index/Skills";
import Experience from "@/components/sections/index/Experience";
import Education from "@/components/sections/index/Education";
import Contact from "@/components/sections/index/Contact";
import Footer from "@/components/sections/index/Footer";

export default function IndexPage() {
  return (
    <div className="relative min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
