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
      <div className="surface-card p-6 relative overflow-hidden">
        <div className="relative">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-base font-semibold text-on-surface font-display">
                  {experience.role}
                </h3>
                {isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-label font-medium bg-emerald-dim text-emerald">
                    <Zap className="w-2.5 h-2.5" />
                    Active
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-accent mt-1 font-label">
                {experience.company}
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant font-label mb-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-accent/50" />
              {experience.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-accent/50" />
              {experience.startDate} — {experience.endDate}
            </span>
          </div>

          <div className="surface-separator mb-5" />

          {/* Achievements */}
          <ul className="space-y-3">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-3 h-3 mt-1.5 shrink-0 text-accent/40" />
                <span className="text-sm text-on-surface-variant leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
