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
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set((y - 0.5) * -10);
    rotateY.set((x - 0.5) * 10);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
    spotlightOpacity.set(1);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    spotlightOpacity.set(0);
  };

  const axis = direction === "top" || direction === "bottom" ? "Y" : "X";
  const sign = direction === "top" || direction === "left" ? "-" : "";

  return (
    <motion.div
      initial={{ transform: `translate${axis}(${sign}20px)`, opacity: 0, filter: "blur(4px)" }}
      whileInView={{ transform: `translate${axis}(0px)`, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ amount: 0.1, once: true }}
      className="h-full"
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        className="surface-card h-full p-6 group relative overflow-hidden"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
      >
        {/* Cursor Spotlight */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            x: spotlightX,
            y: spotlightY,
            translateX: "-50%",
            translateY: "-50%",
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            opacity: spotlightOpacity,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40 group-hover:bg-on-surface transition-colors duration-500"
              whileHover={{ scale: 1.5 }}
            />
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
                {tech.map((t, i) => (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: delay + 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <TechBadge title={t.title} icon={t.icon} link={t.link} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
