import { motion } from "framer-motion";
import Divider from "@/components/Divider";
import TechBadge from "@/components/TechBadge";
import Marquee from "react-fast-marquee";
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
      initial={{ transform: `translate${axis}(${sign}24px)`, opacity: 0 }}
      whileInView={{ transform: `translate${axis}(0px)`, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.1, once: true }}
      className="h-full"
    >
      <div className="neon-card h-full p-5 rounded-2xl group">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_6px_var(--neon-cyan)]" />
          <h3 className="font-semibold text-sm font-mono text-text group-hover:text-cyan transition-colors duration-300 uppercase tracking-wider">
            {title}
          </h3>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          {description}
        </p>
        {tech && (
          <>
            <div className="my-3">
              <Divider />
            </div>
            <Marquee pauseOnHover speed={40} className="py-1">
              <div className="flex gap-2 pr-2">
                {tech.map((t) => (
                  <TechBadge key={t.title} title={t.title} icon={t.icon} link={t.link} />
                ))}
              </div>
            </Marquee>
          </>
        )}
      </div>
    </motion.div>
  );
}
