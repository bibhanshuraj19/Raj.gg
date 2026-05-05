import Link from "next/link";
import { ReactNode } from "react";

interface SkillItem {
  name: string;
  icon: ReactNode;
  link: string;
}

function SkillBadge({ name, icon, link }: SkillItem) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 group"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.background = "var(--bg-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "var(--bg-card)";
      }}
    >
      <span className="w-5 h-5 flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span
        className="text-sm font-medium whitespace-nowrap"
        style={{ color: "var(--text-secondary)" }}
      >
        {name}
      </span>
    </Link>
  );
}

const ic = (src: string) => (
  <img alt="" draggable={false} className="w-5 h-5 object-contain" src={src} />
);

export default function Skills() {
  const aiml: SkillItem[] = [
    {
      name: "PyTorch",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"),
      link: "https://pytorch.org/",
    },
    {
      name: "TensorFlow",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"),
      link: "https://www.tensorflow.org/",
    },
    {
      name: "Scikit-Learn",
      icon: ic("https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"),
      link: "https://scikit-learn.org/",
    },
    {
      name: "Hugging Face",
      icon: ic("https://huggingface.co/front/assets/huggingface_logo-noborder.svg"),
      link: "https://huggingface.co/",
    },
    {
      name: "LangChain",
      icon: ic("https://cdn.simpleicons.org/langchain/white"),
      link: "https://www.langchain.com/",
    },
    {
      name: "OpenAI",
      icon: ic("https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"),
      link: "https://openai.com/",
    },
    {
      name: "NVIDIA NeMo",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg"),
      link: "https://www.nvidia.com/en-us/ai-data-science/products/nemo/",
    },
  ];

  const languages: SkillItem[] = [
    {
      name: "Python",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"),
      link: "https://www.python.org/",
    },
    {
      name: "C/C++",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"),
      link: "https://isocpp.org/",
    },
    {
      name: "SQL",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"),
      link: "https://www.mysql.com/",
    },
    {
      name: "TypeScript",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"),
      link: "https://www.typescriptlang.org/",
    },
  ];

  const infra: SkillItem[] = [
    {
      name: "FastAPI",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"),
      link: "https://fastapi.tiangolo.com/",
    },
    {
      name: "Docker",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"),
      link: "https://www.docker.com/",
    },
    {
      name: "PostgreSQL",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"),
      link: "https://www.postgresql.org/",
    },
    {
      name: "Git",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"),
      link: "https://git-scm.com/",
    },
    {
      name: "Redis",
      icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"),
      link: "https://redis.io/",
    },
    {
      name: "Pinecone",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "https://www.pinecone.io/",
    },
  ];

  const dataSci: SkillItem[] = [
    {
      name: "Pandas",
      icon: ic("https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg"),
      link: "https://pandas.pydata.org/",
    },
    {
      name: "NumPy",
      icon: ic("https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg"),
      link: "https://numpy.org/",
    },
    {
      name: "OpenCV",
      icon: ic("https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg"),
      link: "https://opencv.org/",
    },
  ];

  const categories = [
    { title: "AI / Machine Learning", items: aiml },
    { title: "Languages", items: languages },
    { title: "Infrastructure", items: infra },
    { title: "Data Science", items: dataSci },
  ];

  return (
    <section id="skills" className="max-w-6xl w-full mx-auto px-6 sm:px-8 py-20">
      <div className="separator mb-20" />

      <h2
        className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Tech Stack
      </h2>
      <p
        className="text-sm mb-14"
        style={{ color: "var(--text-muted)" }}
      >
        The tools and technologies I work with daily.
      </p>

      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-5"
              style={{ color: "var(--text-muted)" }}
            >
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => (
                <SkillBadge key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
