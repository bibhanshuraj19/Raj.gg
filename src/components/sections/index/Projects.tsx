import { motion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  Building2,
  ArrowUpRight,
} from "lucide-react";

interface TechIcon {
  name: string;
}

interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  location: string;
  technologies: TechIcon[];
  highlights: string[];
  impact?: string;
}

const reveal = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-60px 0px" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      {...reveal}
      transition={{ ...reveal.transition, delay: index * 0.04 }}
      className="surface-card p-7 sm:p-8 group relative overflow-hidden"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface group-hover:text-white transition-colors duration-500 ease-out">
          {project.title}
        </h3>
        <ArrowUpRight
          className="w-5 h-5 shrink-0 text-on-surface-variant/50 group-hover:text-on-surface group-hover:-translate-y-px group-hover:translate-x-px transition-all duration-500 ease-out"
          aria-hidden
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-label text-on-surface-variant/55 mb-5">
        <span>{project.role}</span>
        <span className="text-outline-variant/35 select-none">·</span>
        <span className="inline-flex items-center gap-1">
          <Building2 className="w-3 h-3 opacity-70" />
          {project.location}
        </span>
        <span className="text-outline-variant/35 select-none">·</span>
        <span className="inline-flex items-center gap-1">
          <Calendar className="w-3 h-3 opacity-70" />
          {project.date}
        </span>
      </div>

      {project.impact && (
        <p className="mb-5">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-label font-medium border border-outline-variant/40 bg-white/[0.04] text-on-surface-variant group-hover:border-white/12 group-hover:bg-white/[0.06] group-hover:text-on-surface transition-all duration-500 ease-out">
            {project.impact}
          </span>
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech.name} className="tech-chip !text-xs !py-1 !px-2.5">
            {tech.name}
          </span>
        ))}
      </div>

      <ul className="space-y-2.5 border-t border-outline-variant/30 pt-5">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <ChevronRight
              className="w-3.5 h-3.5 mt-0.5 shrink-0 text-on-surface-variant/25"
              aria-hidden
            />
            <span className="text-sm text-on-surface-variant/90 leading-relaxed">
              {highlight}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "voice-agent",
      title: "Production Voice Agent Platform",
      role: "AI Engineer & Lead Developer",
      date: "2025",
      location: "Makunai Global",
      impact: "Sub-second latency in production",
      technologies: [
        { name: "Python" },
        { name: "Deepgram" },
        { name: "OpenAI" },
        { name: "FastAPI" },
        { name: "WebSockets" },
        { name: "Pinecone" },
        { name: "Redis" },
      ],
      highlights: [
        "Real-time STT/TTS voice agent with Deepgram + OpenAI response generation",
        "RAG pipeline with Pinecone for context-aware voice conversations",
        "FastAPI + WebSockets backend with sub-second response times",
        "Led end-to-end architecture from speech recognition to deployment",
      ],
    },
    {
      id: "ai-evaluation-bot",
      title: "AI-Powered Evaluation Bot",
      role: "ML Developer",
      date: "2024",
      location: "Academic Project",
      impact: "95% accuracy, 60% time saved",
      technologies: [
        { name: "Python" },
        { name: "OpenAI" },
        { name: "FastAPI" },
      ],
      highlights: [
        "95% grading accuracy across 200+ student submissions",
        "Automated 85% of evaluation steps, cutting grading time by 60%",
        "Intelligent rubric matching and automated feedback generation",
      ],
    },
    {
      id: "rag-chatbot",
      title: "Multi-Document RAG Chatbot",
      role: "AI Engineer",
      date: "2024",
      location: "Research Project",
      impact: "500+ docs, 95% retrieval accuracy",
      technologies: [
        { name: "Python" },
        { name: "LangChain" },
        { name: "OpenAI" },
        { name: "PostgreSQL" },
      ],
      highlights: [
        "Contextual Q&A over 500+ academic documents with 95% accuracy",
        "40% improvement in user satisfaction through claim validation",
        "Vector similarity search for efficient document retrieval",
      ],
    },
    {
      id: "learning-agent",
      title: "LLM-Powered Learning Agent",
      role: "ML Engineer",
      date: "2025",
      location: "Academic Project",
      impact: "NeMo Guardrails + RAGAS metrics",
      technologies: [
        { name: "Python" },
        { name: "LangChain" },
        { name: "NVIDIA NeMo" },
        { name: "Hugging Face" },
      ],
      highlights: [
        "RAG architecture for precise answers from research papers",
        "NVIDIA NeMo Guardrails for content safety and quality",
        "Custom RAGAS metrics for response quality evaluation",
      ],
    },
  ];

  return (
    <section id="projects" className="max-w-7xl w-full mx-auto px-6 sm:px-8 mt-32">
      <motion.header {...reveal} className="mb-12">
        <span className="section-number">03 // Projects</span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 text-on-surface">
          What I&apos;ve built
        </h2>
      </motion.header>

      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
