import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

interface TechIcon {
  name: string;
  icon: string;
}

interface Project {
  id: string;
  title: string;
  shortTitle: string;
  role: string;
  date: string;
  location: string;
  technologies: TechIcon[];
  achievements: string[];
  projectUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "voice-agent",
      title: "Production Voice Agent Platform",
      shortTitle: "Voice Agent",
      role: "AI Engineer & Lead Developer",
      date: "2025",
      location: "Makunai Global",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Deepgram", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      ],
      achievements: [
        "Built a production-grade voice agent platform handling real-time speech-to-text via Deepgram and intelligent response generation through OpenAI.",
        "Designed a RAG pipeline with Pinecone vector database for context-aware, knowledge-grounded voice conversations.",
        "Engineered low-latency backend with FastAPI and WebSockets, achieving sub-second voice response times in production.",
        "Led end-to-end architecture decisions from STT/TTS integration to deployment, serving as lead developer across the voice agent stack.",
      ],
    },
    {
      id: "ai-evaluation-bot",
      title: "AI-Powered Evaluation Bot",
      shortTitle: "AI Eval Bot",
      role: "Machine Learning Developer",
      date: "2024",
      location: "Academic Project",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      ],
      achievements: [
        "Achieved 95% grading accuracy across 200+ student submissions with an AI evaluation bot.",
        "Automated over 85% of evaluation steps, reducing manual grading time by 60%.",
        "Implemented intelligent rubric matching and feedback generation using OpenAI API.",
      ],
    },
    {
      id: "rag-chatbot",
      title: "Multi-Document RAG Chatbot",
      shortTitle: "RAG Chatbot",
      role: "AI Engineer",
      date: "2024",
      location: "Research Project",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      ],
      achievements: [
        "Built a RAG chatbot enabling contextual Q&A over 500+ academic documents with 95% accuracy.",
        "Improved user satisfaction by 40% through intelligent claim validation.",
        "Implemented vector similarity search for efficient document retrieval.",
      ],
    },
    {
      id: "learning-agent",
      title: "LLM Powered Learning Agent",
      shortTitle: "Learning Agent",
      role: "ML Engineer",
      date: "2025",
      location: "Academic Project",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "NVIDIA NeMo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg" },
        { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      ],
      achievements: [
        "Developed an AI-driven chatbot with RAG architecture for precise answers from research papers.",
        "Implemented NVIDIA NeMo Guardrails for content safety and quality control.",
        "Created custom RAGAS metrics for evaluating response quality and relevance.",
      ],
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="max-w-6xl w-full mx-auto px-6 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="section-number">03 // Selected Works</span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-4">
          <span className="gradient-text-static">Digital</span>{" "}
          <span className="text-on-surface">Craftsmanship</span>
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A curated collection of projects that showcase my expertise in AI engineering,
          from production voice agents to advanced RAG systems.
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className={`surface-card p-7 group cursor-pointer transition-all duration-400 ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="font-display text-xl font-bold text-on-surface group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-label text-sm text-accent mt-1">
                  {project.role}
                </p>
              </div>
              <ArrowRight
                className={`w-5 h-5 text-on-surface-variant transition-all duration-300 ${
                  hoveredProject === project.id
                    ? "translate-x-1 text-accent"
                    : ""
                }`}
              />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-on-surface-variant font-label mb-5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-accent/50" />
                {project.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3 h-3 text-accent/50" />
                {project.location}
              </span>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span key={tech.name} className="tech-chip">
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="surface-separator mb-5" />

            {/* Key achievements (show top 2 for grid, all for featured) */}
            <ul className="space-y-2.5">
              {(index === 0 ? project.achievements : project.achievements.slice(0, 2)).map(
                (achievement, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ChevronRight className="w-3 h-3 mt-1.5 shrink-0 text-accent/40" />
                    <span className="text-sm text-on-surface-variant leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                )
              )}
            </ul>

            {/* Links */}
            {(project.projectUrl || project.githubUrl) && (
              <div className="flex items-center gap-3 mt-5">
                {project.projectUrl && (
                  <Link
                    href={project.projectUrl}
                    target="_blank"
                    className="font-label text-sm text-accent hover:underline flex items-center gap-1"
                  >
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="font-label text-sm text-on-surface-variant hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
