import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function TechBadge({ title, icon, link }: { title: string; icon: ReactNode; link: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Link
        href={link}
        target="_blank"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest hover:bg-white/[0.06] transition-all duration-400 ease-smooth group/badge shrink-0 hover:shadow-[0_4px_20px_rgba(255,255,255,0.04)]"
      >
        {icon}
        <span className="text-xs font-label font-medium text-on-surface-variant group-hover/badge:text-on-surface transition-colors duration-400 whitespace-nowrap">
          {title}
        </span>
      </Link>
    </motion.div>
  );
}
