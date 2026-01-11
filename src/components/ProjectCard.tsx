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
        <div className={`${project.gradient} from-primary to-secondary p-6 rounded-lg border border-accent shadow-xl shadow-background hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col justify-center items-center text-center group min-h-[200px]`}>
          {/* Project Title */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-3">
            {project.title}
          </h3>

          {/* Technologies */}
          <p className="text-sm font-semibold text-foreground/80">
            {project.technologies}
          </p>

          {/* Subtle indicator */}
          <ExternalLink className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors mt-4" />
        </div>
      </Link>
    </motion.div>
  );
}
