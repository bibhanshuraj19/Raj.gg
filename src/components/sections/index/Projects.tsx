interface Project {
  id: string;
  title: string;
  date: string;
  technologies: { name: string }[];
  highlights: string[];
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="py-8 border-b border-[var(--border)] group">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3
          className="text-lg sm:text-xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        <span
          className="text-xs font-mono shrink-0 mt-1.5"
          style={{ color: "var(--text-muted)" }}
        >
          {project.date}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {project.highlights.map((h, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {h}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech.name} className="chip">
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "voice-agent",
      title: "Production Voice Agent Platform",
      date: "2025 - Present",
      technologies: [
        { name: "Python" },
        { name: "Deepgram" },
        { name: "OpenAI" },
        { name: "FastAPI" },
        { name: "WebSockets" },
        { name: "Pinecone" },
      ],
      highlights: [
        "Real-time STT/TTS voice agent with Deepgram + OpenAI response generation.",
        "RAG pipeline with Pinecone for context-aware voice conversations. FastAPI + WebSockets backend with sub-second response times.",
      ],
    },
    {
      id: "ai-evaluation-bot",
      title: "AI-Powered Evaluation Bot",
      date: "2024",
      technologies: [
        { name: "Python" },
        { name: "OpenAI" },
        { name: "FastAPI" },
      ],
      highlights: [
        "95% grading accuracy across 200+ student submissions.",
        "Automated 85% of evaluation steps, cutting grading time by 60%. Intelligent rubric matching and automated feedback generation.",
      ],
    },
    {
      id: "rag-chatbot",
      title: "Multi-Document RAG Chatbot",
      date: "2024",
      technologies: [
        { name: "Python" },
        { name: "LangChain" },
        { name: "OpenAI" },
        { name: "PostgreSQL" },
      ],
      highlights: [
        "Contextual Q&A over 500+ academic documents with 95% accuracy.",
        "40% improvement in user satisfaction through claim validation. Vector similarity search for efficient document retrieval.",
      ],
    },
    {
      id: "learning-agent",
      title: "LLM-Powered Learning Agent",
      date: "2025",
      technologies: [
        { name: "Python" },
        { name: "LangChain" },
        { name: "NVIDIA NeMo" },
        { name: "Hugging Face" },
      ],
      highlights: [
        "RAG architecture for precise answers from research papers.",
        "NVIDIA NeMo Guardrails for content safety and quality. Custom RAGAS metrics for response quality evaluation.",
      ],
    },
  ];

  return (
    <section id="projects" className="max-w-5xl w-full mx-auto px-6 sm:px-8">
      <h2
        className="text-2xl sm:text-3xl font-bold tracking-tight mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        Selected Work
      </h2>

      <div>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
