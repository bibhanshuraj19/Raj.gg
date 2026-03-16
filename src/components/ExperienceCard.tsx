import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

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
      className="relative pb-10 last:pb-0 group"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ amount: 0.2, once: true }}
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-accent/60 to-transparent last:hidden" />

      <div className="relative bg-gradient-to-br from-primary to-secondary p-5 md:p-6 rounded-xl border border-accent/80 shadow-xl shadow-background/50 hover:shadow-2xl hover:border-accent transition-all duration-300 hover:-translate-y-0.5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <Briefcase className="w-5 h-5 shrink-0" />
                {experience.role}
              </h3>
              {isCurrent && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <p className="text-base md:text-lg font-semibold text-foreground/90 mt-1.5">
              {experience.company}
            </p>
          </div>
        </div>

        {/* Location and Date */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/70 mb-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 shrink-0" />
            <span>
              {experience.startDate} — {experience.endDate}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-accent/40 mb-4" />

        {/* Achievements */}
        <ul className="space-y-3">
          {experience.achievements.map((achievement, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-2.5 text-sm md:text-base text-foreground/85 leading-relaxed"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.08 }}
              viewport={{ once: true }}
            >
              <ChevronRight className="w-4 h-4 mt-1 shrink-0 text-accent" />
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
