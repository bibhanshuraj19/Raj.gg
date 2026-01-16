import AboutCard from "@/components/AboutCard";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import EducationCard, { Education } from "@/components/EducationCard";
import type { Tech } from "../../../../typings";
import { motion } from "framer-motion";
import { useState } from "react";

type TabType = "experience" | "education" | "extracurricular";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("experience");
  let mlTech: Tech[] = [
    { title: "Python", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />, link: "https://www.python.org/" },
    { title: "TensorFlow", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />, link: "https://www.tensorflow.org/" },
    { title: "PyTorch", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" />, link: "https://pytorch.org/" },
    { title: "Scikit-Learn", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" />, link: "https://scikit-learn.org/" },
    { title: "Keras", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" />, link: "https://keras.io/" },
    { title: "Hugging Face", icon: <img alt="" draggable={false} className="h-6" src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" />, link: "https://huggingface.co/" },
    { title: "LangChain", icon: <img alt="" draggable={false} className="h-6" src="https://python.langchain.com/img/brand/wordmark.png" />, link: "https://www.langchain.com/" },
    { title: "OpenAI", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" />, link: "https://openai.com/" },
    { title: "XGBoost", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" />, link: "https://xgboost.readthedocs.io/" }
  ]

  let datascienceTech: Tech[] = [
    { title: "NumPy", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" />, link: "https://numpy.org/" },
    { title: "Pandas", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" />, link: "https://pandas.pydata.org/" },
    { title: "Matplotlib", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" />, link: "https://matplotlib.org/" },
    { title: "Seaborn", icon: <img alt="" draggable={false} className="h-6" src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" />, link: "https://seaborn.pydata.org/" },
    { title: "Jupyter", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" />, link: "https://jupyter.org/" },
    { title: "OpenCV", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" />, link: "https://opencv.org/" }
  ]

  let mlOpsTech: Tech[] = [
    { title: "Docker", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />, link: "https://www.docker.com/" },
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "GitHub", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "FastAPI", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />, link: "https://fastapi.tiangolo.com/" },
    { title: "Cursor", icon: <img alt="" draggable={false} className="h-6" src="https://www.cursor.com/brand/icon.svg" />, link: "https://www.cursor.com/" },
    { title: "Claude", icon: <img alt="" draggable={false} className="h-6" src="https://www.anthropic.com/_next/static/media/claude-icon.2f97c85e.svg" />, link: "https://www.anthropic.com/claude" },
    { title: "VS Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "Antigravity", icon: <img alt="" draggable={false} className="h-6" src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ulz8hjyyqdsqvvxnwznj" />, link: "https://antigravity.com/" },
    { title: "Linux", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />, link: "https://www.linux.org/" },
    { title: "PostgreSQL", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />, link: "https://www.postgresql.org/" },
    { title: "MongoDB", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />, link: "https://www.mongodb.com/" },
    { title: "Kubernetes", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" />, link: "https://kubernetes.io/" }
  ]

  const experiences: Experience[] = [
    {
      company: "SmartLink Holdings",
      location: "Goa, Verna",
      role: "Intern",
      startDate: "May 2024",
      endDate: "Jul 2024",
      achievements: [
        "Engineered a warehouse inventory system using Python and PostgreSQL, replacing manual Excel sheets and reducing parts logging time by an estimated 40%",
        "Tested and validated a computer vision-based PCB error detection tool using live camera feeds, improving accuracy and reliability of automated defect identification"
      ]
    }
  ]

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
        "Object-Oriented Programming"
      ]
    }
  ]

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-3xl md:text-4xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="AI/ML Journey"
            description="I'm passionate about artificial intelligence and machine learning, with a focus on building intelligent systems that solve real-world problems. My journey spans from classical ML algorithms to cutting-edge deep learning and LLMs. I specialize in developing end-to-end ML pipelines, from data preprocessing to model deployment, with experience in computer vision, NLP, and generative AI."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="ML/AI Frameworks"
            description="Core frameworks and libraries I use for building, training, and deploying machine learning models and AI applications."
            tech={mlTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Data Science Stack"
            description="Tools and libraries I leverage for data analysis, visualization, and scientific computing in ML workflows."
            tech={datascienceTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard
            title="MLOps & Infrastructure"
            description="Technologies I use for ML model deployment, experiment tracking, version control, and production infrastructure."
            tech={mlOpsTech}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
        </ul>

        {/* Tab Section */}
        <div id="experience" className="mt-16">
          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-primary to-secondary text-foreground shadow-lg scale-105"
                  : "bg-background/50 text-foreground/60 hover:text-foreground/80 hover:bg-background/70"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-primary to-secondary text-foreground shadow-lg scale-105"
                  : "bg-background/50 text-foreground/60 hover:text-foreground/80 hover:bg-background/70"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("extracurricular")}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === "extracurricular"
                  ? "bg-gradient-to-r from-primary to-secondary text-foreground shadow-lg scale-105"
                  : "bg-background/50 text-foreground/60 hover:text-foreground/80 hover:bg-background/70"
              }`}
            >
              Extracurricular
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} index={index} />
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {education.map((edu, index) => (
                  <EducationCard key={index} education={edu} index={index} />
                ))}
              </motion.div>
            )}

            {activeTab === "extracurricular" && (
              <motion.div
                key="extracurricular"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center py-12"
              >
                <p className="text-xl text-foreground/60">Coming soon...</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
