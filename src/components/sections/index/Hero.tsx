import { motion } from "framer-motion";
import Link from "next/link";

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
    href: "https://x.com/bibhanshuraj19",
    label: "X",
    icon: <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ inView, descRef }: { inView: boolean; descRef: any }) {
  return (
    <section className="relative max-w-6xl w-full mx-auto px-6 pt-36 pb-20" ref={descRef}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative"
      >
        {/* Role Badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-label font-semibold bg-accent/8 text-accent tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            AI / ML Engineer
          </span>
        </motion.div>

        {/* Name + Headline */}
        <motion.div variants={item} className="mb-6">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="gradient-text">Bibhanshu Raj</span>
          </h1>
        </motion.div>

        <motion.div variants={item} className="mb-8 max-w-2xl">
          <p className="text-xl sm:text-2xl text-on-surface-variant leading-relaxed font-display font-light">
            Building intelligent systems that{" "}
            <span className="text-accent">think</span>,{" "}
            <span className="text-accent">speak</span>, and{" "}
            <span className="text-accent">learn</span>.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-base text-on-surface-variant/70 max-w-xl leading-relaxed mb-10"
        >
          Machine learning engineer specializing in production voice AI, RAG systems,
          and end-to-end ML pipelines. Currently building at Makunai Global.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-10">
          <a href="#projects" className="gradient-cta text-sm font-display">
            View Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="mailto:bibhanshuraj@icloud.com"
            className="glass-cta text-sm font-label"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={item} className="flex items-center gap-2">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              aria-label={social.label}
              className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center transition-all duration-300 text-on-surface-variant hover:text-accent hover:bg-accent/10"
            >
              {social.icon}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
