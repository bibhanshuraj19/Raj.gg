import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl w-full mx-auto px-6 mt-32 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl p-10 sm:p-14"
        style={{
          background: "linear-gradient(135deg, rgba(0, 245, 255, 0.06) 0%, rgba(14, 14, 14, 0.8) 40%, rgba(100, 179, 255, 0.04) 100%)",
          border: "1px solid rgba(0, 245, 255, 0.1)",
        }}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-tertiary/[0.03] rounded-full blur-[80px] pointer-events-none" />

        <div className="relative">
          <span className="section-number">05 // Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            <span className="text-on-surface">Let&apos;s work </span>
            <span className="gradient-text-static">together</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="text-base text-on-surface-variant max-w-lg leading-relaxed mb-8">
            Open to AI engineering roles, research collaborations, and interesting projects.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="mailto:bibhanshuraj@icloud.com" className="gradient-cta text-sm font-display">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              bibhanshuraj@icloud.com
            </a>
            <Link
              href="https://www.linkedin.com/in/bibhanshu-raj-64b547283/"
              target="_blank"
              className="glass-cta text-sm font-label"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/bibhanshuraj19"
              target="_blank"
              className="glass-cta text-sm font-label"
            >
              GitHub
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
