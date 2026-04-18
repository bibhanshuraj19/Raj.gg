import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="max-w-5xl w-full mx-auto px-6 sm:px-8 pt-12 pb-8">
      <div className="accent-line mb-6" />
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="font-label text-xs text-on-surface-variant/30">
          &copy; {new Date().getFullYear()} Bibhanshu Raj
        </p>
        <p className="font-label text-xs text-on-surface-variant/30">
          Built with Next.js + Tailwind
        </p>
      </motion.div>
    </footer>
  );
}
