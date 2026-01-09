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
      className="relative pl-8 pb-8 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ amount: 0.3, once: true }}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-accent shadow-lg" />
        <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent mt-1" />
      </div>

      {/* Content card */}
      <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-lg border border-accent shadow-xl shadow-background hover:shadow-2xl transition-shadow duration-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              {experience.role}
            </h3>
            <p className="text-lg font-semibold text-foreground/90 mt-1">
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
            <li key={idx} className="flex items-start gap-2 text-foreground/90">
              <span className="text-accent font-bold mt-1">•</span>
              <span className="flex-1">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
