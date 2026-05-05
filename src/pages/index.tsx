import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Projects from "@/components/sections/index/Projects";
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
