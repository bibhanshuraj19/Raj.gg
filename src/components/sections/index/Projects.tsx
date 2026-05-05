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

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-7 sm:p-8 group cursor-default">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-lg sm:text-xl font-bold" style={{ color: "var(--text-primary)" }}>
          {project.title}
        </h3>
        <ArrowUpRight className="w-5 h-5 shrink-0 opacity-15 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "var(--text-primary)" }} />
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mb-4" style={{ color: "var(--text-tertiary)" }}>
        <span>{project.role}</span>
        <span className="opacity-30">·</span>
        <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{project.location}</span>
        <span className="opacity-30">·</span>
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.date}</span>
      </div>

      {project.impact && (
        <div className="mb-4">
          <span className="chip">{project.impact}</span>
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map(tech => (
          <span key={tech.name} className="chip !text-xs">{tech.name}</span>
        ))}
      </div>

      <ul className="space-y-2">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2">
            <ChevronRight className="w-3 h-3 mt-1.5 shrink-0" style={{ color: "var(--text-tertiary)" }} />
            <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "voice-agent", title: "Production Voice Agent Platform", role: "AI Engineer & Lead Developer", date: "2025", location: "Makunai Global",
      impact: "Sub-second latency in production",
      technologies: [{ name: "Python" }, { name: "Deepgram" }, { name: "OpenAI" }, { name: "FastAPI" }, { name: "WebSockets" }, { name: "Pinecone" }, { name: "Redis" }],
      highlights: ["Real-time STT/TTS voice agent with Deepgram + OpenAI response generation", "RAG pipeline with Pinecone for context-aware voice conversations", "FastAPI + WebSockets backend with sub-second response times", "Led end-to-end architecture from speech recognition to deployment"],
    },
    {
      id: "ai-evaluation-bot", title: "AI-Powered Evaluation Bot", role: "ML Developer", date: "2024", location: "Academic Project",
      impact: "95% accuracy, 60% time saved",
      technologies: [{ name: "Python" }, { name: "OpenAI" }, { name: "FastAPI" }],
      highlights: ["95% grading accuracy across 200+ student submissions", "Automated 85% of evaluation steps, cutting grading time by 60%", "Intelligent rubric matching and automated feedback generation"],
    },
    {
      id: "rag-chatbot", title: "Multi-Document RAG Chatbot", role: "AI Engineer", date: "2024", location: "Research Project",
      impact: "500+ docs, 95% retrieval accuracy",
      technologies: [{ name: "Python" }, { name: "LangChain" }, { name: "OpenAI" }, { name: "PostgreSQL" }],
      highlights: ["Contextual Q&A over 500+ academic documents with 95% accuracy", "40% improvement in user satisfaction through claim validation", "Vector similarity search for efficient document retrieval"],
    },
    {
      id: "learning-agent", title: "LLM-Powered Learning Agent", role: "ML Engineer", date: "2025", location: "Academic Project",
      impact: "NeMo Guardrails + RAGAS metrics",
      technologies: [{ name: "Python" }, { name: "LangChain" }, { name: "NVIDIA NeMo" }, { name: "Hugging Face" }],
      highlights: ["RAG architecture for precise answers from research papers", "NVIDIA NeMo Guardrails for content safety and quality", "Custom RAGAS metrics for response quality evaluation"],
    },
  ];

  return (
    <section id="projects" className="max-w-5xl w-full mx-auto px-6 sm:px-8 mt-28">
      <p className="section-label mb-8">Featured Projects</p>
      <div className="space-y-4">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
