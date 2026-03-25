import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl w-full mx-auto px-6 mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="section-number">05 // Contact</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-3">
          <span className="text-on-surface">Let&apos;s work together</span>
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
      </motion.div>
    </section>
  );
}
