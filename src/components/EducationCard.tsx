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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ amount: 0.3, once: true }}
    >
      <div className="surface-card p-6 relative overflow-hidden">
        <div className="relative">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-on-surface font-display">{education.degree}</h3>
              <p className="text-sm font-medium text-accent mt-0.5 font-label">{education.institution}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant font-label mb-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-accent/50" />
              {education.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-accent/50" />
              {education.graduationDate}
            </span>
          </div>

          {education.courses.length > 0 && (
            <>
              <div className="surface-separator mb-5" />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-3 h-3 text-on-surface-variant/60" />
                  <span className="font-label text-xs font-semibold text-on-surface-variant/60 uppercase tracking-[0.15em]">
                    Relevant Courses
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <span
                      key={course}
                      className="tech-chip"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
