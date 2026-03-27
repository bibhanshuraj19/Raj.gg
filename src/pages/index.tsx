import { useInView } from "react-intersection-observer";

import Navbar from "@/components/Navbar";
import MouseGlow from "@/components/MouseGlow";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Projects from "@/components/sections/index/Projects";
import Certifications from "@/components/sections/index/Certifications";
import Contact from "@/components/sections/index/Contact";
import Footer from "@/components/sections/index/Footer";

export default function IndexPage() {
  const { ref: descRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative min-h-screen bg-surface noise-overlay">
      {/* Aurora ambient background */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Dot grid pattern */}
      <div className="fixed inset-0 dot-grid pointer-events-none z-0 opacity-60" />

      {/* Cursor glow */}
      <MouseGlow />

      <Navbar />
      <main className="relative z-10">
        <Hero inView={inView} descRef={descRef} />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
