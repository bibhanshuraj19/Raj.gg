import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RAGChatbot() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Multi-Document RAG Chatbot with Claim Validation
          </h1>
          <p className="text-lg text-foreground/80">LangChain | GPT-3.5 | Python</p>
        </motion.div>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg border border-accent shadow-xl"
        >
          <h2 className="text-xl font-bold mb-3">Project Overview</h2>
          <p className="text-base text-foreground/90 leading-relaxed mb-6">
            Built a sophisticated retrieval-augmented generation (RAG) chatbot using LangChain and GPT-3.5 that enables contextual question-answering over 500+ academic documents with a claim validation engine for enhanced accuracy and reliability.
          </p>

          <h2 className="text-xl font-bold mb-3 mt-8">Key Achievements</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg mt-1">•</span>
              <span className="text-base text-foreground/90">
                <strong>95% Answer Accuracy:</strong> Engineered a retrieval-augmented generation (RAG) chatbot using LangChain and GPT-3.5, enabling contextual Q&A over 500+ academic documents with 95% accuracy in source-grounded answers.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-1">•</span>
              <span className="text-foreground/90">
                <strong>40% Satisfaction Improvement:</strong> Enabled dynamic, multi-turn conversations with a claim validation engine that retrieves, verifies, and synthesizes information across documents, improving conversation flow and user satisfaction by an estimated 40%.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-1">•</span>
              <span className="text-foreground/90">
                <strong>Query Optimization:</strong> Designed and implemented logic for handling diverse queries, restructuring 80% of indirect queries into actionable ones and maintaining user trust with reliable fallback responses.
              </span>
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-3 mt-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-2 text-sm bg-background rounded-lg border border-accent">LangChain</span>
            <span className="px-3 py-2 text-sm bg-background rounded-lg border border-accent">GPT-3.5</span>
            <span className="px-3 py-2 text-sm bg-background rounded-lg border border-accent">Python</span>
            <span className="px-3 py-2 text-sm bg-background rounded-lg border border-accent">RAG</span>
            <span className="px-3 py-2 text-sm bg-background rounded-lg border border-accent">Vector DB</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
