import { motion, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

/* ─── Text Scramble / Decode Effect ─── */
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]";

export function TextScramble({
  text,
  className,
  delay = 0,
  speed = 30,
  triggerOnView = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  triggerOnView?: boolean;
}) {
  const [displayed, setDisplayed] = useState(text.replace(/./g, " "));
  const [started, setStarted] = useState(!triggerOnView);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!triggerOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = text.length * 3;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const revealed = Math.floor(progress * text.length);

        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < revealed) return text[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplayed(text);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [started, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}

/* ─── Scroll Velocity Marquee ─── */
export function ScrollVelocityMarquee({
  children,
  baseVelocity = 2,
  className,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 60;
    baseX.set(baseX.get() + moveBy);

    // Reset when scrolled past one full set
    if (baseX.get() <= -50) {
      baseX.set(0);
    }
    if (baseX.get() >= 0) {
      baseX.set(-50);
    }
  });

  return (
    <div className={`overflow-hidden ${className || ""}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        style={{ x: useSpring(baseX, { damping: 50, stiffness: 400 }), display: "flex" }}
      >
        {/* Repeat children 4x for seamless loop */}
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex gap-8 shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Animated Section Divider ─── */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={`relative w-full py-16 ${className || ""}`}>
      {/* Center dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        viewport={{ once: true }}
      />
      {/* Left line */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 h-px w-1/3 origin-left"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.12), transparent)",
          transform: "translateY(-50%) rotate(180deg)",
          marginLeft: "-33.33%",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      />
      {/* Right line */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 h-px w-1/3 origin-left"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.12), transparent)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        viewport={{ once: true }}
      />
      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/[0.03]"
          style={{
            left: `${20 + i * 15}%`,
            top: "50%",
            width: 4 + i * 2,
            height: 4 + i * 2,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Elastic Draggable Card Wrapper ─── */
export function ElasticCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      whileDrag={{ scale: 1.02, cursor: "grabbing" }}
      style={{ cursor: "grab" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Reveal on Scroll with Scale ─── */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const dirMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: -60 },
    right: { y: 0, x: 60 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: dirMap[direction].y,
        x: dirMap[direction].x,
        scale: 0.95,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Staggered Container ─── */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerChild = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as number[] },
  },
};
