import { motion, useMotionValue, useSpring } from "framer-motion";
import TechBadge from "@/components/TechBadge";
import { Tech } from "../../typings";
import { useRef } from "react";

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

  const handleLeave = () => { spotlightOpacity.set(0); };

  const axis = direction === "top" || direction === "bottom" ? "Y" : "X";
  const sign = direction === "top" || direction === "left" ? "-" : "";

  return (
    <motion.div
      initial={{ opacity: 0, transform: `translate${axis}(${sign}20px)` }}
      whileInView={{ opacity: 1, transform: `translate${axis}(0px)` }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ amount: 0.1, once: true }}
      className="h-full"
    >
      <div
        ref={ref}
        className="surface-card h-full p-6 group relative overflow-hidden"
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
      >
        {/* Cursor Spotlight — GPU-friendly, no filter:blur */}
        <motion.div
          className="absolute pointer-events-none z-0 rounded-full"
          style={{
            x: spotlightX,
            y: spotlightY,
            translateX: "-50%",
            translateY: "-50%",
            width: 250,
            height: 250,
            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            opacity: spotlightOpacity,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40 group-hover:bg-on-surface transition-colors duration-300" />
            <h3 className="font-display font-semibold text-sm text-on-surface-variant group-hover:text-on-surface transition-colors duration-300 uppercase tracking-wider">
              {title}
            </h3>
          </div>
          <p className="text-sm text-on-surface-variant/70 leading-relaxed">{description}</p>
          {tech && (
            <>
              <div className="my-4 surface-separator" />
              <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: delay + 0.2 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <TechBadge title={t.title} icon={t.icon} link={t.link} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
