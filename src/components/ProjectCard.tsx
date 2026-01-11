import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  technologies: string;
  description: string;
  link: string;
  gradient: string;
}

export default function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ amount: 0.3, once: true }}
    >
      <Link href={project.link}>
        <div className={`${project.gradient} from-primary to-secondary p-6 rounded-lg border border-accent shadow-xl shadow-background hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col group`}>
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="w-5 h-5 text-foreground/60 group-hover:text-accent transition-colors flex-shrink-0" />
          </div>

          {/* Technologies */}
          <p className="text-sm font-semibold text-foreground/80 mb-3">
            {project.technologies}
          </p>

          {/* Description */}
          <p className="text-base text-foreground/90 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* View More Link */}
          <div className="mt-4 text-base text-accent font-semibold group-hover:underline">
            View Details →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
