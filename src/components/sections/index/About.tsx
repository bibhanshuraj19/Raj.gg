import AboutCard from "@/components/AboutCard";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import EducationCard, { Education } from "@/components/EducationCard";
import type { Tech } from "../../../../typings";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type TabType = "experience" | "education" | "extracurricular";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  const programmingTech: Tech[] = [
    { title: "Python", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />, link: "https://www.python.org/" },
    { title: "C/C++", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />, link: "https://isocpp.org/" },
    { title: "SQL", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />, link: "https://www.mysql.com/" },
  ];

  const mlFrameworksTech: Tech[] = [
    { title: "PyTorch", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" />, link: "https://pytorch.org/" },
    { title: "TensorFlow", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />, link: "https://www.tensorflow.org/" },
    { title: "Scikit-Learn", icon: <img alt="" draggable={false} className="h-5" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" />, link: "https://scikit-learn.org/" },
    { title: "Hugging Face", icon: <img alt="" draggable={false} className="h-5" src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" />, link: "https://huggingface.co/" },
    { title: "LangChain", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.simpleicons.org/langchain/white" />, link: "https://www.langchain.com/" },
    { title: "OpenAI API", icon: <img alt="" draggable={false} className="h-5" src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" />, link: "https://openai.com/" },
    { title: "NVIDIA NeMo", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg" />, link: "https://www.nvidia.com/en-us/ai-data-science/products/nemo/" },
  ];

  const dataMLOpsTech: Tech[] = [
    { title: "Pandas", icon: <img alt="" draggable={false} className="h-5" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" />, link: "https://pandas.pydata.org/" },
    { title: "NumPy", icon: <img alt="" draggable={false} className="h-5" src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" />, link: "https://numpy.org/" },
    { title: "OpenCV", icon: <img alt="" draggable={false} className="h-5" src="https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" />, link: "https://opencv.org/" },
    { title: "Matplotlib", icon: <img alt="" draggable={false} className="h-5" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" />, link: "https://matplotlib.org/" },
    { title: "Docker", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />, link: "https://www.docker.com/" },
    { title: "Git", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "GitHub Actions", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/features/actions" },
    { title: "PostgreSQL", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />, link: "https://www.postgresql.org/" },
    { title: "Flask", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />, link: "https://flask.palletsprojects.com/" },
    { title: "FastAPI", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />, link: "https://fastapi.tiangolo.com/" },
  ];

  const experiences: Experience[] = [
    {
      company: "Makunai Global",
      location: "Noida",
      role: "AI Engineer & Lead Developer — Voice Agents",
      startDate: "Jan 2025",
      endDate: "Present",
      achievements: [
        "Architecting and leading development of production-grade voice agent systems, overseeing end-to-end pipeline design from speech recognition to response generation",
        "Building scalable backend infrastructure powering real-time voice AI interactions using FastAPI, WebSockets, and cloud-native services",
        "Driving technical direction as lead developer, coordinating cross-functional efforts across ML, backend, and product teams to ship reliable voice agent products",
      ],
    },
    {
      company: "SmartLink Holdings",
      location: "Goa, Verna",
      role: "Intern",
      startDate: "May 2024",
      endDate: "Jul 2024",
      achievements: [
        "Engineered a warehouse inventory system using Python and PostgreSQL, replacing manual Excel sheets and reducing parts logging time by an estimated 40%",
        "Tested and validated a computer vision-based PCB error detection tool using live camera feeds, improving accuracy and reliability of automated defect identification",
      ],
    },
  ];

  const education: Education[] = [
    {
      institution: "BITS Pilani",
      location: "Pilani, India",
      degree: "Bachelor of Computer Science and Information Technology",
      major: "Computer Science and Information Technology",
      graduationDate: "Aug 2022 - Present",
      courses: [
        "Artificial Intelligence",
        "Machine Learning",
        "Operating Systems",
        "Computer Architecture",
        "Foundation of Data Science",
        "Data Structures and Algorithms",
        "Database Systems",
        "Object-Oriented Programming",
      ],
    },
  ];

  const tabs: { key: TabType; label: string }[] = [
    { key: "experience", label: "Experience" },
    { key: "education", label: "Education" },
    { key: "extracurricular", label: "Extra" },
  ];

  return (
    <section id="about" className="max-w-6xl w-full mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="section-number">01 // About Me</span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-4">
          <span className="gradient-text-static">Bridging the gap between</span>
          <br />
          <span className="text-on-surface">Logic and Artistry.</span>
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          My journey in tech began with a curiosity about how intelligent systems are built.
          Today, I specialize in building scalable AI systems, from classical ML to cutting-edge LLMs and voice AI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <AboutCard
            title="AI/ML Journey"
            description="I'm passionate about artificial intelligence and machine learning, with a focus on building intelligent systems that solve real-world problems. My journey spans from classical ML algorithms to cutting-edge deep learning and LLMs. I specialize in developing end-to-end ML pipelines, from data preprocessing to model deployment, with experience in computer vision, NLP, and generative AI."
            direction="top"
            span={2}
            delay={0.1}
          />
        </div>
        <AboutCard
          title="Languages"
          description="Core programming languages for ML applications and data pipelines."
          tech={programmingTech}
          direction="left"
          span={1}
          delay={0.15}
        />
        <AboutCard
          title="ML / DL Frameworks"
          description="Frameworks for building, training, and deploying ML models, LLMs, and AI applications."
          tech={mlFrameworksTech}
          direction="right"
          span={1}
          delay={0.2}
        />
        <div className="md:col-span-2">
          <AboutCard
            title="Data Science & MLOps"
            description="Tools for data analysis, visualization, ML deployment, CI/CD, experiment tracking, and production infrastructure."
            tech={dataMLOpsTech}
            direction="bottom"
            span={2}
            delay={0.1}
          />
        </div>
      </div>

      {/* Experience / Education tabs */}
      <div id="experience" className="mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="section-number">02 // Background</span>
        </motion.div>

        {/* Tab bar */}
        <div className="flex gap-1 p-1 rounded-xl bg-surface-container ghost-border mb-10 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-5 py-2.5 rounded-lg text-sm font-label font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "text-accent"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg bg-accent/8"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {education.map((edu, index) => (
                <EducationCard key={index} education={edu} index={index} />
              ))}
            </motion.div>
          )}

          {activeTab === "extracurricular" && (
            <motion.div
              key="extracurricular"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center py-24"
            >
              <div className="text-center">
                <p className="text-on-surface-variant text-sm font-label">
                  Coming soon...
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
