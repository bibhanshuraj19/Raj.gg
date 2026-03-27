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
      className="group relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ amount: 0.2, once: true }}
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px hidden sm:block">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ transformOrigin: "top" }}
        />
        <motion.div
          className="absolute top-6 -left-[3px] w-[7px] h-[7px] rounded-full border-2 border-white/20 bg-surface"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 500, damping: 20 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="sm:pl-6">
        <motion.div
          className="surface-card p-6 relative overflow-hidden"
          whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.08)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-base font-semibold text-on-surface font-display">
                    {experience.role}
                  </h3>
                  {isCurrent && (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-label font-medium bg-emerald-dim text-emerald"
                    >
                      <Zap className="w-2.5 h-2.5" />
                      Active
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-on-surface-variant mt-1 font-label">
                  {experience.company}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant/60 font-label mb-5">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                {experience.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {experience.startDate} — {experience.endDate}
              </span>
            </div>

            <div className="surface-separator mb-5" />

            <ul className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <ChevronRight className="w-3 h-3 mt-1.5 shrink-0 text-on-surface-variant/30" />
                  <span className="text-sm text-on-surface-variant leading-relaxed">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
