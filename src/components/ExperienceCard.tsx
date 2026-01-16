import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export interface Experience {
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export default function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.div
      className="pb-8 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ amount: 0.3, once: true }}
    >
      {/* Content card */}
      <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-lg border border-accent shadow-xl shadow-background hover:shadow-2xl transition-shadow duration-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              {experience.role}
            </h3>
            <p className="text-base md:text-lg font-semibold text-foreground/90 mt-1">
              {experience.company}
            </p>
          </div>
        </div>

        {/* Location and Date */}
        <div className="flex flex-col sm:flex-row gap-3 text-sm text-foreground/80 mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="text-base text-foreground/90">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
