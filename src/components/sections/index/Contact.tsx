import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl w-full mx-auto px-6 sm:px-8 mt-36 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl p-10 sm:p-14 lg:p-16"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(6, 6, 6, 0.9) 40%, rgba(255, 255, 255, 0.015) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        {/* Ambient glow — CSS only, no JS animation */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative">
          <span className="section-number">05 // Contact</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-4">
            <span className="text-on-surface">Let&apos;s work </span>
            <span className="gradient-text-static">together</span>
            <span className="text-on-surface">.</span>
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant max-w-lg leading-relaxed mb-8">
            Open to AI engineering roles, research collaborations, and interesting projects.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              href="mailto:bibhanshuraj@icloud.com"
              className="gradient-cta text-sm font-display"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              bibhanshuraj@icloud.com
            </motion.a>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link href="https://www.linkedin.com/in/bibhanshu-raj-64b547283/" target="_blank" className="glass-cta text-sm font-label">LinkedIn</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link href="https://github.com/bibhanshuraj19" target="_blank" className="glass-cta text-sm font-label">GitHub</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
