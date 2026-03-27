import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="max-w-7xl w-full mx-auto px-6 sm:px-8 pt-16 pb-8">
      <motion.div
        className="accent-line mb-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
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
