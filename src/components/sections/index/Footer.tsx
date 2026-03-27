import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="max-w-7xl w-full mx-auto px-8 pt-20 pb-12">
      {/* Animated line draw from center */}
      <motion.div
        className="accent-line mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <motion.p
          className="font-label text-sm text-on-surface-variant/30"
          whileHover={{ color: "rgba(255,255,255,0.5)" }}
          transition={{ duration: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Bibhanshu Raj
        </motion.p>
        <motion.p
          className="font-label text-sm text-on-surface-variant/30"
          whileHover={{ color: "rgba(255,255,255,0.5)" }}
          transition={{ duration: 0.3 }}
        >
          Built with Next.js + Tailwind + Framer Motion
        </motion.p>
      </motion.div>
    </footer>
  );
}
