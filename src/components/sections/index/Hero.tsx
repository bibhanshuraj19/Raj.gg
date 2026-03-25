import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const socials = [
  {
    href: "https://github.com/bibhanshuraj19",
    label: "GitHub",
    icon: <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  },
  {
    href: "https://www.linkedin.com/in/bibhanshu-raj-64b547283/",
    label: "LinkedIn",
    icon: <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    href: "https://www.youtube.com/@raj19-cxz",
    label: "YouTube",
    icon: <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
  {
    href: "https://x.com/bibhanshuraj19",
    label: "X",
    icon: <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
  },
  {
    href: "https://discord.gg/26YyDqkCcg",
    label: "Discord",
    icon: <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ inView, descRef }: { inView: boolean; descRef: any }) {
  return (
    <section className="relative max-w-6xl w-full mx-auto px-6 pt-40 pb-24" ref={descRef}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative"
      >
        {/* Section label */}
        <motion.div variants={item} className="mb-8">
          <span className="section-number">The Luminescent Architect</span>
        </motion.div>

        {/* Main Title — large editorial display */}
        <motion.div variants={item} className="mb-8">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="text-on-surface">Hi, I&apos;m </span>
            <span className="gradient-text">Bibhanshu</span>
            <span className="text-on-surface">.</span>
            <br />
            <span className="text-on-surface-variant">Building </span>
            <span className="text-accent">intelligent</span>
            <br />
            <span className="text-on-surface-variant">systems.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={item} className="max-w-2xl mb-10">
          <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed">
            Machine learning engineer based in India, specializing in voice AI,
            RAG systems, and production ML pipelines. Crafting high-performance
            digital experiences with structural integrity and aesthetic precision.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-12">
          <a href="#projects" className="gradient-cta text-base font-display">
            View My Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#contact" className="glass-cta text-base font-label">
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Role Badge + Email */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-8">
          <span className="font-label text-sm font-semibold text-accent tracking-wider uppercase">
            AI / ML Engineer
          </span>
          <span className="text-outline">·</span>
          <a
            href="mailto:bibhanshuraj@icloud.com"
            className="font-label text-sm text-on-surface-variant hover:text-accent transition-colors"
          >
            bibhanshuraj@icloud.com
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={item} className="flex items-center gap-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              aria-label={social.label}
              className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center transition-all duration-300 text-on-surface-variant hover:text-accent hover:bg-accent/10 hover:scale-110 hover:-translate-y-0.5"
            >
              {social.icon}
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="flex flex-col items-center mt-24 gap-3"
      >
        <span className="font-label text-xs text-on-surface-variant/50 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-accent/30 to-transparent" />
      </motion.div>
    </section>
  );
}
