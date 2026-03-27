import { motion } from "framer-motion";
import Link from "next/link";
import { TextScramble, RevealOnScroll } from "@/components/AnimationUtils";

/* ─── Word-by-word reveal ─── */
function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, rotateX: -40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: delay + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ display: "inline-block", marginRight: "0.3em", transformOrigin: "bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Floating Particles ─── */
function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: `${5 + Math.random() * 90}%`,
    y: `${5 + Math.random() * 90}%`,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/[0.04]"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl w-full mx-auto px-8 mt-40 mb-12">
      <RevealOnScroll>
        <motion.div
          className="relative overflow-hidden rounded-3xl p-12 sm:p-16 lg:p-20 gradient-border-rotate"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(6, 6, 6, 0.9) 35%, rgba(6, 6, 6, 0.95) 65%, rgba(255, 255, 255, 0.02) 100%)",
          }}
        >
          <FloatingParticles />

          <motion.div
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <span className="section-number">
              <TextScramble text="05 // CONTACT" delay={200} speed={25} />
            </span>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
              <WordReveal text="Let's work" className="text-on-surface" delay={0.2} />
              {" "}
              <WordReveal text="together" className="gradient-text-static" delay={0.5} />
              <motion.span
                className="text-on-surface"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 500, damping: 12 }}
                viewport={{ once: true }}
              >
                .
              </motion.span>
            </h2>

            <motion.p
              className="text-lg sm:text-xl text-on-surface-variant max-w-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Open to AI engineering roles, research collaborations, and interesting projects.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:bibhanshuraj@icloud.com"
                className="gradient-cta text-base font-display px-8 py-4"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                bibhanshuraj@icloud.com
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <Link href="https://www.linkedin.com/in/bibhanshu-raj-64b547283/" target="_blank" className="glass-cta text-base font-label px-8 py-4">
                  LinkedIn
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <Link href="https://github.com/bibhanshuraj19" target="_blank" className="glass-cta text-base font-label px-8 py-4">
                  GitHub
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
}
