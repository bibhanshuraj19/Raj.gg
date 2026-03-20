import { useInView } from "react-intersection-observer";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Projects from "@/components/sections/index/Projects";
import Certifications from "@/components/sections/index/Certifications";
import Footer from "@/components/sections/index/Footer";

export default function IndexPage() {
  const { ref: descRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative min-h-screen bg-bg scanlines">
      {/* Ambient gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/[0.02] rounded-full blur-[120px]" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero inView={inView} descRef={descRef} />
        <About />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
