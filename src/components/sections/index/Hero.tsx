import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import { TextScramble } from "@/components/AnimationUtils";

const socials = [
  {
    href: "https://github.com/bibhanshuraj19",
    label: "GitHub",
    icon: <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  },
  {
    href: "https://www.linkedin.com/in/bibhanshu-raj-64b547283/",
    label: "LinkedIn",
    icon: <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    href: "https://x.com/bibhanshuraj19",
    label: "X",
    icon: <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
  },
];

/* ─── Magnetic Icon ─── */
function MagneticIcon({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      aria-label={label}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.08)" }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center transition-colors duration-500 ease-smooth text-on-surface-variant hover:text-on-surface"
    >
      {children}
    </motion.a>
  );
}

/* ─── Animated Counter ─── */
function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const numMatch = value.match(/(\d+)/);
    if (!numMatch) { setDisplayed(value); return; }
    const target = parseInt(numMatch[1]);
    const suffix = value.replace(numMatch[1], "");
    let current = 0;
    const step = Math.max(1, Math.floor(target / 20));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(interval); }
      setDisplayed(`${current}${suffix}`);
    }, 40);
    return () => clearInterval(interval);
  }, [started, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="font-display text-3xl sm:text-4xl font-bold text-on-surface">{started ? displayed : ""}</div>
      <div className="font-label text-sm text-on-surface-variant/50 mt-1.5 tracking-wide">{label}</div>
    </motion.div>
  );
}

/* ─── Typewriter ─── */
function useTypewriter(text: string, speed = 35, delay = 1500) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; } else { clearInterval(interval); }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  return displayed;
}

/* ─── Split Text Reveal ─── */
function SplitTextReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -90, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.045,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero({ inView, descRef }: { inView: boolean; descRef: any }) {
  const statusText = useTypewriter("building voice agents @ makunai global", 30, 1800);
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const setRefs = useCallback((el: HTMLElement | null) => {
    sectionRef.current = el;
    if (typeof descRef === 'function') descRef(el);
    else if (descRef && typeof descRef === 'object') (descRef as React.MutableRefObject<HTMLElement | null>).current = el;
  }, [descRef]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const nameScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Mouse-based perspective tilt for the whole hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -4);
    rotateY.set(x * 4);
  };

  const handleMouseLeave = () => { rotateX.set(0); rotateY.set(0); };

  return (
    <section
      className="relative max-w-7xl w-full mx-auto px-8 pt-44 pb-24"
      ref={setRefs}
    >
      {/* Subtle ambient glow */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        ref={heroRef}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Status bar */}
        <motion.div variants={item} className="mb-10">
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-container ghost-border"
            whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.15)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald" />
            </span>
            <span className="font-mono text-sm text-on-surface-variant">
              {statusText}
              <span className="animate-[blink_1s_step-end_infinite] text-on-surface ml-0.5">|</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Name — BIG with parallax */}
        <motion.div style={{ y: nameY, opacity: nameOpacity, scale: nameScale }} className="mb-6">
          <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter leading-[0.9]">
            <SplitTextReveal text="Bibhanshu" className="gradient-text" delay={0.3} />
          </h1>
        </motion.div>

        <motion.div style={{ y: nameY, opacity: nameOpacity, scale: nameScale }} className="mb-12">
          <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter leading-[0.9]">
            <SplitTextReveal text="Raj" className="text-on-surface/60" delay={0.7} />
            <motion.span
              className="text-on-surface"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 500, damping: 12 }}
            >
              .
            </motion.span>
          </h1>
        </motion.div>

        {/* Tagline — BIGGER */}
        <motion.div variants={item} className="mb-14 max-w-2xl">
          <p className="text-xl sm:text-2xl text-on-surface-variant leading-relaxed">
            I build{" "}
            <motion.span
              className="text-on-surface font-medium"
              initial={{ backgroundSize: "0% 2px" }}
              whileInView={{ backgroundSize: "100% 2px" }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              production AI systems
            </motion.span>{" "}
            — voice agents, RAG pipelines, and ML infrastructure that
            work at scale.
          </p>
        </motion.div>

        {/* CTAs — BIGGER */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-20">
          <motion.a
            href="#projects"
            className="gradient-cta text-base font-display px-8 py-4"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            View Projects
            <motion.svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.a>
          <motion.a
            href="mailto:bibhanshuraj@icloud.com"
            className="glass-cta text-base font-label px-8 py-4"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Stats — BIGGER */}
        <motion.div variants={item} className="mb-16">
          <motion.div
            className="inline-flex items-center gap-10 sm:gap-16 px-8 py-6 rounded-2xl bg-surface-container-low/50 ghost-border shimmer"
            whileHover={{ borderColor: "rgba(255,255,255,0.12)", scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <AnimatedStat value="3+" label="AI Projects" delay={1.4} />
            <div className="w-px h-10 bg-outline-variant/30" />
            <AnimatedStat value="1yr" label="Production AI" delay={1.6} />
            <div className="w-px h-10 bg-outline-variant/30" />
            <AnimatedStat value="BITS" label="CS Student" delay={1.8} />
          </motion.div>
        </motion.div>

        {/* Socials — BIGGER + Magnetic */}
        <motion.div variants={item} className="flex items-center gap-4">
          {socials.map((social) => (
            <MagneticIcon key={social.label} href={social.href} label={social.label}>
              {social.icon}
            </MagneticIcon>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
