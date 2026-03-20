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
      <div className="neon-card p-5 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer pointer-events-none rounded-2xl" />

        <div className="relative">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple/10 border border-purple/15 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-purple" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-text font-display">{education.degree}</h3>
              <p className="text-sm font-medium text-cyan mt-0.5 font-mono">{education.institution}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-[11px] text-text-dim font-mono mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-purple/60" />
              {education.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-cyan/60" />
              {education.graduationDate}
            </span>
          </div>

          {education.courses.length > 0 && (
            <>
              <div className="hud-line mb-4" />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-3 h-3 text-text-dim" />
                  <span className="text-[10px] font-mono font-medium text-text-dim uppercase tracking-[0.15em]">
                    Relevant Courses
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {education.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-text-dim bg-bg-tertiary border border-border-subtle hover:border-purple/20 hover:text-purple transition-all duration-300"
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
