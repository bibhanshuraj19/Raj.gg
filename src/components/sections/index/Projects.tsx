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
}

interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  location: string;
  technologies: TechIcon[];
  highlights: string[];
  projectUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "voice-agent",
      title: "Production Voice Agent Platform",
      role: "AI Engineer & Lead Developer",
      date: "2025",
      location: "Makunai Global",
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
        "Production-grade voice agent with real-time STT/TTS via Deepgram and OpenAI response generation",
        "RAG pipeline with Pinecone for context-aware, knowledge-grounded voice conversations",
        "Sub-second response latency using FastAPI + WebSockets backend",
        "Led end-to-end architecture from speech recognition to deployment",
      ],
    },
    {
      id: "ai-evaluation-bot",
      title: "AI-Powered Evaluation Bot",
      role: "ML Developer",
      date: "2024",
      location: "Academic Project",
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
      technologies: [
        { name: "Python" },
        { name: "LangChain" },
        { name: "OpenAI" },
        { name: "PostgreSQL" },
      ],
      highlights: [
        "Contextual Q&A over 500+ academic documents with 95% retrieval accuracy",
        "40% improvement in user satisfaction through intelligent claim validation",
        "Vector similarity search for efficient document retrieval",
      ],
    },
    {
      id: "learning-agent",
      title: "LLM-Powered Learning Agent",
      role: "ML Engineer",
      date: "2025",
      location: "Academic Project",
      technologies: [
        { name: "Python" },
        { name: "LangChain" },
        { name: "NVIDIA NeMo" },
        { name: "Hugging Face" },
      ],
      highlights: [
        "RAG architecture for precise answers from research papers",
        "NVIDIA NeMo Guardrails for content safety and quality control",
        "Custom RAGAS metrics for evaluating response quality and relevance",
      ],
    },
  ];

  return (
    <section id="projects" className="max-w-6xl w-full mx-auto px-6 mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <span className="section-number">03 // Projects</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
          <span className="text-on-surface">What I&apos;ve built</span>
        </h2>
      </motion.div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="surface-card p-6 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display text-lg font-bold text-on-surface group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 mt-1.5 text-xs font-label text-on-surface-variant">
                  <span>{project.role}</span>
                  <span className="text-outline-variant">·</span>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </span>
                </div>
              </div>
              {(project.projectUrl || project.githubUrl) && (
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" className="text-on-surface-variant hover:text-accent transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech.name} className="tech-chip !text-xs !py-1 !px-2.5">
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 mt-1.5 shrink-0 text-accent/40" />
                  <span className="text-sm text-on-surface-variant leading-relaxed">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
