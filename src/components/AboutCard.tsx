import { motion, useMotionValue } from "framer-motion";
import TechBadge from "@/components/TechBadge";
import { Tech } from "../../typings";
import { useRef } from "react";

interface AboutCardProps {
  title: string;
  description?: string;
  tech?: Tech[];
  direction: "top" | "bottom" | "left" | "right";
  span: 1 | 2;
  delay: number;
}

export default function AboutCard({ title, tech, direction, delay }: AboutCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
    spotlightOpacity.set(1);
  };

  const axis = direction === "top" || direction === "bottom" ? "Y" : "X";
  const sign = direction === "top" || direction === "left" ? "-" : "";

  return (
    <motion.div
      initial={{ opacity: 0, transform: `translate${axis}(${sign}16px)` }}
      whileInView={{ opacity: 1, transform: `translate${axis}(0px)` }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ amount: 0.1, once: true }}
      className="h-full"
    >
      <div
        ref={ref}
        className="surface-card h-full p-6 group relative overflow-hidden"
        onMouseMove={handleMouse}
        onMouseLeave={() => spotlightOpacity.set(0)}
      >
        <motion.div
          className="absolute pointer-events-none z-0 rounded-full"
          style={{
            x: spotlightX, y: spotlightY,
            translateX: "-50%", translateY: "-50%",
            width: 250, height: 250,
            background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            opacity: spotlightOpacity,
          }}
        />

        <div className="relative z-10">
          <h3 className="font-label text-xs font-semibold text-on-surface-variant/60 group-hover:text-on-surface-variant transition-colors duration-300 uppercase tracking-wider mb-4">
            {title}
          </h3>
          {tech && (
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <TechBadge key={t.title} title={t.title} icon={t.icon} link={t.link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
