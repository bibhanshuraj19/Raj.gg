import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight, Zap } from "lucide-react";

export interface Experience {
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export default function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const isCurrent = experience.endDate.toLowerCase() === "present";

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="neon-card p-5 rounded-2xl relative overflow-hidden">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 animate-shimmer pointer-events-none rounded-2xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-base font-semibold text-text font-display">
                  {experience.role}
                </h3>
                {isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-dim text-emerald border border-emerald/20">
                    <Zap className="w-2.5 h-2.5" />
                    Active
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-cyan mt-1 font-mono">
                {experience.company}
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-[11px] text-text-dim font-mono mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-purple/60" />
              {experience.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-cyan/60" />
              {experience.startDate} — {experience.endDate}
            </span>
          </div>

          <div className="hud-line mb-4" />

          {/* Achievements */}
          <ul className="space-y-2.5">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <ChevronRight className="w-3 h-3 mt-1.5 shrink-0 text-cyan/40" />
                <span className="text-sm text-text-muted leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
