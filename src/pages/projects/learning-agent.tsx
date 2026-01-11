import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LearningAgent() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-20">
        {/* Back Button */}
        <Link href="/#projects">
          <motion.button
            className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </motion.button>
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LLM Powered Student Learning Agent
          </h1>
          <p className="text-xl text-foreground/80 mb-4">Python | LangChain | RAG</p>
        </motion.div>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg border border-accent shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">
            Developed an AI-driven chatbot leveraging Python, LangChain, and RAG architecture to provide students with precise, context-aware answers sourced directly from research papers, significantly improving information retrieval and understanding.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Key Achievements</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-1">•</span>
              <span className="text-foreground/90">
                <strong>Context-Aware AI System:</strong> Engineered an AI-driven chatbot with Python, LangChain and RAG architecture to provide users with precise, context-aware answers sourced directly from research papers, improving information retrieval and understanding.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-1">•</span>
              <span className="text-foreground/90">
                <strong>NVIDIA NeMo Guardrails:</strong> Implemented NVIDIA NeMo Guardrails for strict topic compliance, ensuring the AI stays on-topic and provides relevant educational content while maintaining safe and appropriate interactions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-1">•</span>
              <span className="text-foreground/90">
                <strong>RAGAS Quality Metrics:</strong> Applied custom RAGAS (Retrieval Augmented Generation Assessment) metrics to evaluate factual accuracy, relevance, and explanatory depth of AI-generated answers, ensuring high-quality educational responses.
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">Python</span>
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">LangChain</span>
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">RAG</span>
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">NVIDIA NeMo</span>
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">RAGAS</span>
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">LLM</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
