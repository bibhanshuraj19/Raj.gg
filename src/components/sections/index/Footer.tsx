import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="max-w-6xl w-full mx-auto px-6 pt-16 pb-8">
      {/* Animated line draw */}
      <motion.div
        className="accent-line mb-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <p className="font-label text-xs text-on-surface-variant/30">
          &copy; {new Date().getFullYear()} Bibhanshu Raj
        </p>
        <motion.p
          className="font-label text-xs text-on-surface-variant/30"
          whileHover={{ color: "rgba(255,255,255,0.5)" }}
          transition={{ duration: 0.3 }}
        >
          Built with Next.js + Tailwind
        </motion.p>
      </motion.div>
    </footer>
  );
}
