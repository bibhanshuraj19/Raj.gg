import AboutCard from "@/components/AboutCard";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import EducationCard, { Education } from "@/components/EducationCard";
import type { Tech } from "../../../../typings";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TextScramble, ScrollVelocityMarquee, SectionDivider, RevealOnScroll } from "@/components/AnimationUtils";

type TabType = "experience" | "education";

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
    { title: "Docker", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />, link: "https://www.docker.com/" },
    { title: "Git", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "PostgreSQL", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />, link: "https://www.postgresql.org/" },
    { title: "FastAPI", icon: <img alt="" draggable={false} className="h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />, link: "https://fastapi.tiangolo.com/" },
  ];

  const allTech = [...programmingTech, ...mlFrameworksTech, ...dataMLOpsTech];

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
  ];

  return (
    <section id="about" className="max-w-7xl w-full mx-auto px-8 mt-20">
      {/* ─── Scrolling Tech Marquee ─── */}
      <RevealOnScroll>
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="section-number">
              <TextScramble text="01 // TECH STACK" delay={200} speed={25} />
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-2">
              <span className="text-on-surface">Tools I work with</span>
            </h2>
          </motion.div>

          {/* Infinite scrolling tech ribbon */}
          <ScrollVelocityMarquee baseVelocity={-1.5} className="py-6">
            {allTech.map((t) => (
              <motion.a
                key={t.title}
                href={t.link}
                target="_blank"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container-high/80 ghost-border shrink-0 group hover:bg-white/[0.06] transition-all duration-400"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <span className="w-6 h-6 flex items-center justify-center">{t.icon}</span>
                <span className="text-sm font-label font-medium text-on-surface-variant group-hover:text-on-surface transition-colors duration-400 whitespace-nowrap">
                  {t.title}
                </span>
              </motion.a>
            ))}
          </ScrollVelocityMarquee>

          {/* Second row going opposite direction */}
          <ScrollVelocityMarquee baseVelocity={1.2} className="py-2">
            {[...allTech].reverse().map((t) => (
              <motion.a
                key={`rev-${t.title}`}
                href={t.link}
                target="_blank"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container/80 ghost-border shrink-0 group hover:bg-white/[0.06] transition-all duration-400"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <span className="w-6 h-6 flex items-center justify-center">{t.icon}</span>
                <span className="text-sm font-label font-medium text-on-surface-variant group-hover:text-on-surface transition-colors duration-400 whitespace-nowrap">
                  {t.title}
                </span>
              </motion.a>
            ))}
          </ScrollVelocityMarquee>
        </div>
      </RevealOnScroll>

      <SectionDivider />

      {/* ─── Tech Stack Cards ─── */}
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AboutCard title="Languages" description="Core programming languages for ML and data engineering." tech={programmingTech} direction="left" span={1} delay={0.1} />
          <AboutCard title="ML / DL Frameworks" description="Frameworks for building, training, and deploying models and AI applications." tech={mlFrameworksTech} direction="right" span={1} delay={0.15} />
          <div className="md:col-span-2">
            <AboutCard title="Infrastructure & MLOps" description="Tools for data processing, deployment, CI/CD, and production infrastructure." tech={dataMLOpsTech} direction="bottom" span={2} delay={0.1} />
          </div>
        </div>
      </RevealOnScroll>

      <SectionDivider />

      {/* ─── Experience & Education ─── */}
      <div id="experience" className="mt-8">
        <RevealOnScroll>
          <motion.div className="mb-12">
            <span className="section-number">
              <TextScramble text="02 // BACKGROUND" delay={200} speed={25} />
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
              <span className="text-on-surface">Experience & Education</span>
            </h2>
          </motion.div>
        </RevealOnScroll>

        <div className="flex gap-1 p-1.5 rounded-xl bg-surface-container ghost-border mb-10 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-label font-medium transition-all duration-400 ease-smooth ${
                activeTab === tab.key
                  ? "text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg bg-white/[0.06]"
                  transition={{ type: "spring", bounce: 0.12, duration: 0.6 }}
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
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {education.map((edu, index) => (
                <EducationCard key={index} education={edu} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
