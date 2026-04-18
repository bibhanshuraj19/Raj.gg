import { useInView } from "react-intersection-observer";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Projects from "@/components/sections/index/Projects";
import Contact from "@/components/sections/index/Contact";
import Footer from "@/components/sections/index/Footer";

export default function IndexPage() {
  const { ref: descRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative min-h-screen bg-surface noise-overlay">
      <Navbar />
      <main className="relative z-10">
        <Hero inView={inView} descRef={descRef} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
