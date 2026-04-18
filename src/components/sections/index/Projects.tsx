import { motion, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, Calendar, Building2, ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  location: string;
  technologies: { name: string }[];
  highlights: string[];
  impact?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouse}
      className="surface-card p-7 sm:p-8 group cursor-default relative overflow-hidden"
    >
      <motion.div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          x: spotlightX, y: spotlightY,
          translateX: "-50%", translateY: "-50%",
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          <motion.div
            animate={hovered ? { x: 2, y: -2, opacity: 1 } : { x: 0, y: 0, opacity: 0.15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ArrowUpRight className="w-5 h-5 shrink-0 text-on-surface" />
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-label text-on-surface-variant/60 mb-4">
          <span>{project.role}</span>
          <span className="opacity-30">·</span>
          <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{project.location}</span>
          <span className="opacity-30">·</span>
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.date}</span>
        </div>

        {project.impact && (
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-label font-medium bg-white/[0.04] text-on-surface-variant border border-white/[0.06] group-hover:bg-white/[0.07] group-hover:text-on-surface transition-all duration-300">
              {project.impact}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech.name} className="tech-chip !text-xs !py-1 !px-2.5">{tech.name}</span>
          ))}
        </div>

        <ul className="space-y-2">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="w-3 h-3 mt-1.5 shrink-0 text-on-surface-variant/25" />
              <span className="text-sm text-on-surface-variant leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
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
        { name: "Python" }, { name: "Deepgram" }, { name: "OpenAI" },
        { name: "FastAPI" }, { name: "WebSockets" }, { name: "Pinecone" }, { name: "Redis" },
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
      technologies: [{ name: "Python" }, { name: "OpenAI" }, { name: "FastAPI" }],
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
      technologies: [{ name: "Python" }, { name: "LangChain" }, { name: "OpenAI" }, { name: "PostgreSQL" }],
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
      technologies: [{ name: "Python" }, { name: "LangChain" }, { name: "NVIDIA NeMo" }, { name: "Hugging Face" }],
      highlights: [
        "RAG architecture for precise answers from research papers",
        "NVIDIA NeMo Guardrails for content safety and quality",
        "Custom RAGAS metrics for response quality evaluation",
      ],
    },
  ];

  return (
    <section id="projects" className="max-w-5xl w-full mx-auto px-6 sm:px-8 mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl tracking-tight mb-8"
      >
        What I&apos;ve built
      </motion.h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
