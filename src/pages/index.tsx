import Head from "next/head";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Projects from "@/components/sections/index/Projects";
import Certifications from "@/components/sections/index/Certifications";
import Contact from "@/components/sections/index/Contact";
import Footer from "@/components/sections/index/Footer";

export default function IndexPage() {
  const { ref: descRef, inView } = useInView({ threshold: 0.1 });

  return (
    <>
      <Head>
        <title>Raj.gg — Bibhanshu Raj</title>
        <meta
          name="description"
          content="Bibhanshu Raj — AI/ML Engineer. Building production AI systems — voice agents, RAG pipelines, and ML infrastructure that work at scale."
        />
      </Head>

      <Navbar />

      <main className="relative min-h-screen">
        <Hero inView={inView} descRef={descRef} />
        <About />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
