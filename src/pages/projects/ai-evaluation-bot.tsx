import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AIEvaluationBot() {
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
            AI-Powered Evaluation Bot
          </h1>
          <p className="text-xl text-foreground/80 mb-4">Python | OpenAI API</p>
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
            Developed an intelligent evaluation system that leverages the OpenAI API to automatically grade student code submissions, assess logic, syntax, and efficiency while providing personalized feedback.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Key Achievements</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-1">•</span>
              <span className="text-foreground/90">
                <strong>95% Grading Accuracy:</strong> Attained exceptional accuracy across 200+ student submissions by engineering an AI evaluation bot using Python and the OpenAI API to assess code logic, syntax, and efficiency.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-1">•</span>
              <span className="text-foreground/90">
                <strong>85% Automation Rate:</strong> Automated over 85% of evaluation steps, reducing manual grading time by 60% during the coding mid-semester exam test setup.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-1">•</span>
              <span className="text-foreground/90">
                <strong>Intelligent Feedback System:</strong> Created an intelligent feedback tool in Python that analyzed student submissions, highlighted logical errors, and provided tailored improvement tips—accelerating learning and reducing manual review time.
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">Python</span>
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">OpenAI API</span>
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">GPT</span>
            <span className="px-4 py-2 bg-background rounded-lg border border-accent">Automation</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
