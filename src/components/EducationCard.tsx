import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export interface Education {
  institution: string;
  location: string;
  degree: string;
  major: string;
  graduationDate: string;
  courses: string[];
}

export default function EducationCard({ education, index }: { education: Education; index: number }) {
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
            <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              {education.degree}
            </h3>
          </div>
        </div>

        {/* Location and Date */}
        <div className="flex flex-col sm:flex-row gap-3 text-sm text-foreground/80 mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{education.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{education.graduationDate}</span>
          </div>
        </div>

        {/* Courses */}
        {education.courses.length > 0 && (
          <div className="mt-3">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-foreground/80" />
              <span className="font-semibold text-sm text-foreground/90">Relevant Courses:</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {education.courses.join(", ")}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
