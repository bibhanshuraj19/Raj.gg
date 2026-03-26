import { motion } from "framer-motion";
import Divider from "@/components/Divider";
import TechBadge from "@/components/TechBadge";
import { Tech } from "../../typings";

interface AboutCardProps {
  title: string;
  description: string;
  tech?: Tech[];
  direction: "top" | "bottom" | "left" | "right";
  span: 1 | 2;
  delay: number;
  gradient?: string;
}

export default function AboutCard({ title, description, tech, direction, span, delay }: AboutCardProps) {
  const axis = direction === "top" || direction === "bottom" ? "Y" : "X";
  const sign = direction === "top" || direction === "left" ? "-" : "";

  return (
    <motion.div
      initial={{ transform: `translate${axis}(${sign}20px)`, opacity: 0 }}
      whileInView={{ transform: `translate${axis}(0px)`, opacity: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ amount: 0.1, once: true }}
      className="h-full"
    >
      <div className="surface-card h-full p-6 group">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40 group-hover:bg-on-surface transition-colors duration-500" />
          <h3 className="font-display font-semibold text-sm text-on-surface-variant group-hover:text-on-surface transition-colors duration-500 uppercase tracking-wider">
            {title}
          </h3>
        </div>
        <p className="text-sm text-on-surface-variant/70 leading-relaxed">
          {description}
        </p>
        {tech && (
          <>
            <div className="my-4 surface-separator" />
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <TechBadge key={t.title} title={t.title} icon={t.icon} link={t.link} />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
