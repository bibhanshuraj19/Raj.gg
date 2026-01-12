import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

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
  logo: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "ai-evaluation-bot",
      title: "AI-Powered Evaluation Bot",
      shortTitle: "AI Evaluation Bot",
      role: "Machine Learning Developer",
      date: "2024",
      location: "Academic Project",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/white" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" }
      ],
      achievements: [
        "Achieved 95% grading accuracy across 200+ student submissions with an AI evaluation bot.",
        "Automated over 85% of evaluation steps, reducing manual grading time by 60%.",
        "Implemented intelligent rubric matching and feedback generation using OpenAI API."
      ],
      logo: "https://cdn.simpleicons.org/openai/white"
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
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/white" },
        { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/white" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ],
      achievements: [
        "Built a RAG chatbot enabling contextual Q&A over 500+ academic documents with 95% accuracy.",
        "Improved user satisfaction by 40% through intelligent claim validation.",
        "Implemented vector similarity search for efficient document retrieval."
      ],
      logo: "https://cdn.simpleicons.org/langchain/white"
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
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/white" },
        { name: "NVIDIA", icon: "https://cdn.simpleicons.org/nvidia/76B900" },
        { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface" }
      ],
      achievements: [
        "Developed an AI-driven chatbot with RAG architecture for precise answers from research papers.",
        "Implemented NVIDIA NeMo Guardrail for content safety and quality control.",
        "Created custom RAGAS metrics for evaluating response quality and relevance."
      ],
      logo: "https://cdn.simpleicons.org/nvidia/76B900"
    }
  ];

  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="max-w-4xl w-full flex flex-col mx-auto px-4">
      <motion.h1
        className="text-center font-bold text-3xl md:text-4xl mt-16 mb-8"
        initial={{ transform: 'translateY(-30px)', opacity: 0 }}
        whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96] }}
        viewport={{ amount: 0.1, once: true }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-0 min-h-[450px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Left Panel - Project List */}
        <div className="md:w-2/5 flex flex-col border-l border-accent/20">
          {projects.map((project, index) => {
            const isSelected = selectedProject.id === project.id;
            const isHovered = hoveredProject === project.id;
            
            return (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative py-4 px-5 text-left transition-all duration-300 rounded-r-lg ${
                  isSelected
                    ? "text-foreground bg-gradient-to-r from-cyan-500/20 to-transparent"
                    : isHovered
                    ? "text-foreground/90 bg-accent/15"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Active/Hover indicator bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 rounded-r ${
                  isSelected 
                    ? "bg-cyan-400" 
                    : isHovered
                    ? "bg-foreground/40"
                    : "bg-transparent"
                }`} />
                
                <span className={`font-medium text-base transition-colors ${
                  isSelected ? "text-cyan-400" : ""
                }`}>
                  {project.shortTitle}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Right Panel - Project Details */}
        <motion.div
          key={selectedProject.id}
          className="md:w-3/5 py-4 px-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header with Logo and Title */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-secondary border border-accent/30 p-2.5 flex items-center justify-center flex-shrink-0">
              <img 
                src={selectedProject.logo} 
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedProject.title}
                </h2>
                {selectedProject.projectUrl && (
                  <Link
                    href={selectedProject.projectUrl}
                    target="_blank"
                    className="p-1.5 rounded-md hover:bg-accent/30 transition-colors text-foreground/60 hover:text-foreground"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </Link>
                )}
                {selectedProject.githubUrl && (
                  <Link
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="p-1.5 rounded-md hover:bg-accent/30 transition-colors text-foreground/60 hover:text-foreground"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </Link>
                )}
              </div>
              <p className="text-foreground/70 text-base mt-0.5">
                {selectedProject.role}
              </p>
            </div>
          </div>

          {/* Date and Location */}
          <p className="text-cyan-400 font-medium mb-6">
            {selectedProject.date} <span className="text-foreground/40">•</span> {selectedProject.location}
          </p>

          {/* Technologies & Tools */}
          <div className="mb-6">
            <h4 className="text-foreground/80 font-semibold text-base mb-3">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative w-12 h-12 rounded-xl bg-secondary border border-accent/30 p-2.5 flex items-center justify-center hover:border-cyan-500/50 transition-all duration-200 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-6 h-6 object-contain"
                  />
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background border border-accent/50 rounded text-xs text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-4">
            {selectedProject.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-foreground/80"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
              >
                <span className="text-foreground/50 mt-1.5">•</span>
                <span className="text-base leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
