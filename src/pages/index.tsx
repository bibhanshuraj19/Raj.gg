import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Projects from "@/components/sections/index/Projects";
import Certifications from "@/components/sections/index/Certifications";
import Footer from "@/components/sections/index/Footer";
import { GridPattern } from "@/components/GridPattern";

export default function IndexPage() {
  const { ref: descRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero inView={inView} descRef={descRef} />
        <About />
        <Projects />
        <Certifications />
      </main>
      <Footer />
      <GridPattern width={50} height={50} x={-1} y={-1} className="z-[-5]" />
    </div>
  );
}
