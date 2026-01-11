import ProjectCard, { Project } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "AI-Powered Evaluation Bot",
      technologies: "Python | OpenAI API",
      description: "Achieved 95% grading accuracy across 200+ student submissions with an AI evaluation bot that automated over 85% of evaluation steps, reducing manual grading time by 60%.",
      link: "/projects/ai-evaluation-bot",
      gradient: "bg-gradient-to-br"
    },
    {
      title: "Multi-Document RAG Chatbot",
      technologies: "LangChain | GPT-3.5 | Python",
      description: "Built a RAG chatbot enabling contextual Q&A over 500+ academic documents with 95% accuracy, improving user satisfaction by 40% through intelligent claim validation.",
      link: "/projects/rag-chatbot",
      gradient: "bg-gradient-to-bl"
    },
    {
      title: "LLM Powered Learning Agent",
      technologies: "Python | LangChain | RAG",
      description: "Developed an AI-driven chatbot with RAG architecture for precise answers from research papers, implementing NVIDIA NeMo Guardrails and custom RAGAS metrics for quality.",
      link: "/projects/learning-agent",
      gradient: "bg-gradient-to-tr"
    }
  ];

  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto mb-16">
        <motion.h1
          className="text-center font-bold text-3xl md:text-4xl mt-16 mb-8"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96] }}
          viewport={{ amount: 0.1, once: true }}
        >
          Projects
        </motion.h1>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 0.1} />
          ))}
        </div>
      </section>
    </>
  );
}
