import { motion, useMotionValue } from "framer-motion";
import { useState, useRef } from "react";
import {
  ChevronRight,
  Calendar,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { TextScramble, RevealOnScroll, ElasticCard } from "@/components/AnimationUtils";

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
  projectUrl?: string;
  githubUrl?: string;
}

/* ─── Project Card with Cursor Spotlight ─── */
function ProjectCard({ project, index, isFirst }: { project: Project; index: number; isFirst: boolean }) {
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
    <RevealOnScroll delay={index * 0.1}>
      <ElasticCard>
        <motion.div
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouse}
          className="surface-card p-8 sm:p-10 group cursor-default relative overflow-hidden"
          whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {/* Cursor spotlight */}
          <motion.div
            className="absolute pointer-events-none z-0"
            style={{
              x: spotlightX,
              y: spotlightY,
              translateX: "-50%",
              translateY: "-50%",
              width: 400,
              height: 400,
              background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface group-hover:text-white transition-colors duration-500">
                {project.title}
              </h3>
              <motion.div
                animate={hovered ? { x: 3, y: -3, opacity: 1, rotate: 0 } : { x: 0, y: 0, opacity: 0.15, rotate: -45 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <ArrowUpRight className="w-6 h-6 shrink-0 text-on-surface" />
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-label text-on-surface-variant/60 mb-5">
              <span>{project.role}</span>
              <span className="text-outline-variant/40">·</span>
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {project.location}
              </span>
              <span className="text-outline-variant/40">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.date}
              </span>
            </div>

            {project.impact && (
              <motion.div className="mb-5">
                <motion.span
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-label font-semibold bg-white/[0.05] text-on-surface-variant border border-outline-variant/50"
                  animate={hovered ? {
                    borderColor: "rgba(255,255,255,0.2)",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    boxShadow: "0 0 20px rgba(255,255,255,0.04)",
                  } : {}}
                  transition={{ duration: 0.4 }}
                >
                  ⚡ {project.impact}
                </motion.span>
              </motion.div>
            )}

            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  className="tech-chip !text-sm !py-1.5 !px-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + i * 0.04 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>

            <motion.ul
              className="space-y-3 overflow-hidden"
              initial={false}
              animate={{
                height: hovered || isFirst ? "auto" : 0,
                opacity: hovered || isFirst ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {project.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  animate={hovered || isFirst ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronRight className="w-3.5 h-3.5 mt-1.5 shrink-0 text-on-surface-variant/30" />
                  <span className="text-base text-on-surface-variant leading-relaxed">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </ElasticCard>
    </RevealOnScroll>
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
    <section id="projects" className="max-w-7xl w-full mx-auto px-8 mt-36">
      <RevealOnScroll>
        <motion.div className="mb-12">
          <span className="section-number">
            <TextScramble text="03 // PROJECTS" delay={200} speed={25} />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
            <span className="text-on-surface">What I&apos;ve built</span>
          </h2>
        </motion.div>
      </RevealOnScroll>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isFirst={index === 0} />
        ))}
      </div>
    </section>
  );
}
