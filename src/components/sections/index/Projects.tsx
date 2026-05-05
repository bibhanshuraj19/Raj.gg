interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group py-8 transition-colors duration-200"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <h3
        className="text-lg sm:text-xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        {project.title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-5 max-w-3xl"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
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
      description:
        "Real-time STT/TTS voice agent with Deepgram + OpenAI response generation. RAG pipeline with Pinecone for context-aware voice conversations. FastAPI + WebSockets backend with sub-second response times. Handles concurrent sessions at scale.",
      technologies: ["Python", "Deepgram", "OpenAI", "FastAPI", "WebSockets", "Pinecone", "Redis"],
    },
    {
      id: "ai-evaluation-bot",
      title: "AI-Powered Evaluation Bot",
      description:
        "95% grading accuracy across 200+ student submissions. Automated 85% of evaluation steps, cutting grading time by 60%. Intelligent rubric matching and automated feedback generation.",
      technologies: ["Python", "OpenAI", "FastAPI"],
    },
    {
      id: "rag-chatbot",
      title: "Multi-Document RAG Chatbot",
      description:
        "Contextual Q&A over 500+ academic documents with 95% retrieval accuracy. 40% improvement in user satisfaction through claim validation. Vector similarity search for efficient document retrieval.",
      technologies: ["Python", "LangChain", "OpenAI", "PostgreSQL"],
    },
    {
      id: "learning-agent",
      title: "LLM-Powered Learning Agent",
      description:
        "RAG architecture for precise answers from research papers. NVIDIA NeMo Guardrails for content safety and quality. Custom RAGAS metrics for response quality evaluation.",
      technologies: ["Python", "LangChain", "NVIDIA NeMo", "Hugging Face"],
    },
  ];

  return (
    <section id="projects" className="max-w-6xl w-full mx-auto px-6 sm:px-8 py-20">
      <div className="separator mb-20" />

      <h2
        className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        What I&apos;ve Built
      </h2>
      <p
        className="text-sm mb-6"
        style={{ color: "var(--text-muted)" }}
      >
        A selection of AI-powered products and tools.
      </p>

      <div>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
