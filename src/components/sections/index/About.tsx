import Link from "next/link";
import { ReactNode, useState } from "react";
import {
  MapPin,
  Calendar,
  ChevronRight,
  Zap,
  GraduationCap,
  BookOpen,
} from "lucide-react";

interface Tech {
  title: string;
  icon: ReactNode;
  link: string;
}
interface Exp {
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}
interface Edu {
  institution: string;
  location: string;
  degree: string;
  graduationDate: string;
  courses: string[];
}

function Badge({ title, icon, link }: Tech) {
  return (
    <Link href={link} target="_blank" className="chip shrink-0">
      {icon}
      <span className="whitespace-nowrap">{title}</span>
    </Link>
  );
}

function ExpEntry({ exp }: { exp: Exp }) {
  const active = exp.endDate.toLowerCase() === "present";
  return (
    <div className="group">
      <div className="flex items-start justify-between gap-4 mb-1">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h3
              className="text-base font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {exp.role}
            </h3>
            <span
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              — {exp.company}
            </span>
          </div>
        </div>
        <span
          className="text-xs font-mono shrink-0 mt-1"
          style={{ color: "var(--text-muted)" }}
        >
          {exp.startDate} - {exp.endDate}
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {exp.achievements.map((a, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {a}
          </p>
        ))}
      </div>
    </div>
  );
}

function EduEntry({ edu }: { edu: Edu }) {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <GraduationCap
            className="w-5 h-5"
            style={{ color: "var(--text-secondary)" }}
          />
        </div>
        <div>
          <h3
            className="text-base font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {edu.degree}
          </h3>
          <p
            className="text-sm font-medium mt-0.5"
            style={{ color: "var(--text-secondary)" }}
          >
            {edu.institution}
          </p>
        </div>
      </div>
      <div
        className="flex flex-wrap gap-4 text-xs mb-5"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3 h-3" />
          {edu.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3 h-3" />
          {edu.graduationDate}
        </span>
      </div>
      {edu.courses.length > 0 && (
        <>
          <div className="separator mb-5" />
          <div className="flex items-center gap-2 mb-3">
            <BookOpen
              className="w-3 h-3"
              style={{ color: "var(--text-muted)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: "var(--text-muted)" }}
            >
              Relevant Courses
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {edu.courses.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const ic = (s: string) => (
  <img alt="" draggable={false} className="h-4" src={s} />
);

export default function About() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  const langs: Tech[] = [
    {
      title: "Python",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      ),
      link: "https://www.python.org/",
    },
    {
      title: "C/C++",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      ),
      link: "https://isocpp.org/",
    },
    {
      title: "SQL",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      ),
      link: "https://www.mysql.com/",
    },
  ];
  const ml: Tech[] = [
    {
      title: "PyTorch",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
      ),
      link: "https://pytorch.org/",
    },
    {
      title: "TensorFlow",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
      ),
      link: "https://www.tensorflow.org/",
    },
    {
      title: "Scikit-Learn",
      icon: ic(
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
      ),
      link: "https://scikit-learn.org/",
    },
    {
      title: "Hugging Face",
      icon: ic(
        "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
      ),
      link: "https://huggingface.co/",
    },
    {
      title: "LangChain",
      icon: ic("https://cdn.simpleicons.org/langchain/white"),
      link: "https://www.langchain.com/",
    },
    {
      title: "OpenAI API",
      icon: ic(
        "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
      ),
      link: "https://openai.com/",
    },
    {
      title: "NVIDIA NeMo",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg"
      ),
      link: "https://www.nvidia.com/en-us/ai-data-science/products/nemo/",
    },
  ];
  const infra: Tech[] = [
    {
      title: "Pandas",
      icon: ic(
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg"
      ),
      link: "https://pandas.pydata.org/",
    },
    {
      title: "NumPy",
      icon: ic(
        "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg"
      ),
      link: "https://numpy.org/",
    },
    {
      title: "OpenCV",
      icon: ic(
        "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg"
      ),
      link: "https://opencv.org/",
    },
    {
      title: "Docker",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      ),
      link: "https://www.docker.com/",
    },
    {
      title: "Git",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      ),
      link: "https://git-scm.com/",
    },
    {
      title: "PostgreSQL",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      ),
      link: "https://www.postgresql.org/",
    },
    {
      title: "FastAPI",
      icon: ic(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
      ),
      link: "https://fastapi.tiangolo.com/",
    },
  ];

  const exps: Exp[] = [
    {
      company: "Makunai Global",
      location: "Noida",
      role: "AI Engineer & Lead Developer — Voice Agents",
      startDate: "Jan 2025",
      endDate: "Present",
      achievements: [
        "Architecting production-grade voice agent systems — end-to-end pipeline from speech recognition to response generation.",
        "Building scalable backend powering real-time voice AI using FastAPI, WebSockets, and cloud-native services.",
        "Leading cross-functional efforts across ML, backend, and product teams to ship reliable voice agent products.",
      ],
    },
    {
      company: "SmartLink Holdings",
      location: "Goa, Verna",
      role: "Intern",
      startDate: "May 2024",
      endDate: "Jul 2024",
      achievements: [
        "Engineered a warehouse inventory system using Python and PostgreSQL, reducing parts logging time by ~40%.",
        "Validated a computer vision-based PCB error detection tool using live camera feeds.",
      ],
    },
  ];

  const edus: Edu[] = [
    {
      institution: "BITS Pilani",
      location: "Pilani, India",
      degree: "B.Sc. Computer Science & Information Technology",
      graduationDate: "Aug 2022 - Present",
      courses: [
        "Artificial Intelligence",
        "Machine Learning",
        "Operating Systems",
        "Computer Architecture",
        "Data Structures & Algorithms",
        "Database Systems",
      ],
    },
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="max-w-5xl w-full mx-auto px-6 sm:px-8">
        <h2
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-10"
          style={{ color: "var(--text-primary)" }}
        >
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-3 space-y-5">
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I approach AI engineering with a systems-first philosophy. Models
              should be deployed reliably, not just trained well. Therefore,
              performance, scalability, and clean architecture are paramount.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              My background is rooted in deep learning and production ML, but my
              current focus bridges robust AI backend architecture with
              real-time, low-latency voice agent systems.
            </p>
          </div>

          <div className="md:col-span-2 flex items-center justify-center">
            <div className="w-full max-w-[200px] aspect-square rounded-2xl overflow-hidden border border-[var(--border)]">
              <img
                src="/me.png"
                alt="Bibhanshu Raj"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="separator mb-20" />
      </section>

      {/* Selected Work / Projects heading is handled separately */}

      {/* Stack Section */}
      <section id="stack" className="max-w-5xl w-full mx-auto px-6 sm:px-8 mt-20">
        <h2
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-10"
          style={{ color: "var(--text-primary)" }}
        >
          Stack
        </h2>

        <div className="space-y-6">
          {/* Languages */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {langs.map((t) => (
                <Badge key={t.title} {...t} />
              ))}
            </div>
          </div>

          {/* ML / DL */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              ML / DL Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {ml.map((t) => (
                <Badge key={t.title} {...t} />
              ))}
            </div>
          </div>

          {/* Infra */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Infrastructure & MLOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {infra.map((t) => (
                <Badge key={t.title} {...t} />
              ))}
            </div>
          </div>
        </div>

        <div className="separator my-20" />

        {/* Experience */}
        <div id="experience">
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            Experience
          </h2>

          <div className="space-y-10">
            {exps.map((e, i) => (
              <ExpEntry key={i} exp={e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
