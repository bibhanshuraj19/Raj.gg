import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Calendar, Building2, ExternalLink, Terminal } from "lucide-react";

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
        { name: "Pinecone", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
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

  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <section id="projects" className="max-w-3xl w-full mx-auto px-6 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent" />
          <h2 className="text-[11px] font-mono font-medium text-cyan uppercase tracking-[0.25em]">
            // Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-purple/30 to-transparent" />
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          <span className="gradient-text-static">What I&apos;ve Built</span>
        </h3>
      </motion.div>

      <motion.div
        className="neon-card flex flex-col md:flex-row rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {/* Left - Tabs */}
        <div className="md:w-[180px] shrink-0 flex md:flex-col flex-row overflow-x-auto md:overflow-visible bg-bg-card md:border-r border-b md:border-b-0 border-border-subtle">
          {projects.map((project) => {
            const isSelected = selectedProject.id === project.id;

            return (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`relative py-3 px-4 text-left transition-all duration-300 whitespace-nowrap md:whitespace-normal ${
                  isSelected
                    ? "text-cyan bg-cyan/5"
                    : "text-text-dim hover:text-text-muted hover:bg-bg-tertiary/30"
                }`}
              >
                <div
                  className={`absolute transition-all duration-300
                    md:left-0 md:top-0 md:bottom-0 md:w-[2px] md:h-auto md:rounded-r
                    left-0 right-0 bottom-0 h-[2px] w-auto rounded-t
                    ${isSelected ? "bg-cyan shadow-[0_0_8px_var(--neon-cyan)]" : "bg-transparent"}`}
                />
                <span className="text-xs font-mono">
                  {isSelected && <span className="text-cyan/40 mr-1">&gt; </span>}
                  {project.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right - Details */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              className="p-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="w-4 h-4 text-cyan/50" />
                <h2 className="text-lg font-bold text-text font-display">
                  {selectedProject.title}
                </h2>
              </div>
              <p className="text-xs text-text-dim font-mono ml-6">{selectedProject.role}</p>

              {/* Links */}
              <div className="flex items-center gap-2 mt-3 ml-6">
                {selectedProject.projectUrl && (
                  <Link href={selectedProject.projectUrl} target="_blank" className="p-1.5 rounded-lg hover:bg-cyan/5 transition-colors text-text-dim hover:text-cyan">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                )}
                {selectedProject.githubUrl && (
                  <Link href={selectedProject.githubUrl} target="_blank" className="p-1.5 rounded-lg hover:bg-cyan/5 transition-colors text-text-dim hover:text-cyan">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </Link>
                )}
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-[11px] text-text-dim font-mono mt-4 mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-cyan/50" />
                  {selectedProject.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3 h-3 text-purple/50" />
                  {selectedProject.location}
                </span>
              </div>

              {/* Tech */}
              <div className="mb-5">
                <p className="text-[10px] font-mono font-medium text-text-dim uppercase tracking-[0.15em] mb-2.5">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, i) => (
                    <motion.span
                      key={tech.name}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-text-dim bg-bg-tertiary border border-border-subtle hover:border-cyan/20 hover:text-cyan transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.15, delay: i * 0.03 }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="hud-line mb-5" />

              {/* Achievements */}
              <ul className="space-y-2.5">
                {selectedProject.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2.5"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + i * 0.05 }}
                  >
                    <ChevronRight className="w-3 h-3 mt-1.5 shrink-0 text-cyan/40" />
                    <span className="text-sm text-text-muted leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
