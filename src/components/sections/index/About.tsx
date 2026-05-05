import Link from "next/link";
import { ReactNode, useState } from "react";
import { MapPin, Calendar, ChevronRight, Zap, GraduationCap, BookOpen } from "lucide-react";

interface Tech { title: string; icon: ReactNode; link: string; }
interface Exp { company: string; location: string; role: string; startDate: string; endDate: string; achievements: string[]; }
interface Edu { institution: string; location: string; degree: string; graduationDate: string; courses: string[]; }

function Badge({ title, icon, link }: Tech) {
  return <Link href={link} target="_blank" className="chip shrink-0">{icon}<span className="whitespace-nowrap">{title}</span></Link>;
}

function SkillGroup({ title, tech }: { title: string; tech: Tech[] }) {
  return (
    <div className="card p-6">
      <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-tertiary)" }}>{title}</h3>
      <div className="flex flex-wrap gap-2">{tech.map(t => <Badge key={t.title} {...t} />)}</div>
    </div>
  );
}

function ExpEntry({ exp }: { exp: Exp }) {
  const active = exp.endDate.toLowerCase() === "present";
  return (
    <div className="relative pl-6">
      <div className="timeline-line" /><div className={`timeline-dot ${active ? "active" : ""}`} />
      <div className="card p-6">
        <div className="flex items-center gap-3 flex-wrap mb-1">
          <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>{exp.role}</h3>
          {active && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ background: "rgba(52,211,153,0.15)", color: "#34d399" }}><Zap className="w-2.5 h-2.5" />Active</span>}
        </div>
        <p className="text-sm font-medium mb-4" style={{ color: "var(--text-secondary)" }}>{exp.company}</p>
        <div className="flex flex-wrap gap-4 text-xs mb-5" style={{ color: "var(--text-tertiary)" }}>
          <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{exp.location}</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{exp.startDate} — {exp.endDate}</span>
        </div>
        <div className="separator mb-5" />
        <ul className="space-y-3">
          {exp.achievements.map((a, i) => (
            <li key={i} className="flex items-start gap-3">
              <ChevronRight className="w-3 h-3 mt-1.5 shrink-0" style={{ color: "var(--text-tertiary)" }} />
              <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EduEntry({ edu }: { edu: Edu }) {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.04)" }}>
          <GraduationCap className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
        </div>
        <div>
          <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>{edu.degree}</h3>
          <p className="text-sm font-medium mt-0.5" style={{ color: "var(--text-secondary)" }}>{edu.institution}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 text-xs mb-5" style={{ color: "var(--text-tertiary)" }}>
        <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{edu.location}</span>
        <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{edu.graduationDate}</span>
      </div>
      {edu.courses.length > 0 && <>
        <div className="separator mb-5" />
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-3 h-3" style={{ color: "var(--text-tertiary)" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--text-tertiary)" }}>Relevant Courses</span>
        </div>
        <div className="flex flex-wrap gap-2">{edu.courses.map(c => <span key={c} className="chip">{c}</span>)}</div>
      </>}
    </div>
  );
}

const ic = (s: string) => <img alt="" draggable={false} className="h-4" src={s} />;

export default function About() {
  const [tab, setTab] = useState<"experience"|"education">("experience");

  const langs: Tech[] = [
    { title: "Python", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"), link: "https://www.python.org/" },
    { title: "C/C++", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"), link: "https://isocpp.org/" },
    { title: "SQL", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"), link: "https://www.mysql.com/" },
  ];
  const ml: Tech[] = [
    { title: "PyTorch", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"), link: "https://pytorch.org/" },
    { title: "TensorFlow", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"), link: "https://www.tensorflow.org/" },
    { title: "Scikit-Learn", icon: ic("https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"), link: "https://scikit-learn.org/" },
    { title: "Hugging Face", icon: ic("https://huggingface.co/front/assets/huggingface_logo-noborder.svg"), link: "https://huggingface.co/" },
    { title: "LangChain", icon: ic("https://cdn.simpleicons.org/langchain/white"), link: "https://www.langchain.com/" },
    { title: "OpenAI API", icon: ic("https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"), link: "https://openai.com/" },
    { title: "NVIDIA NeMo", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg"), link: "https://www.nvidia.com/en-us/ai-data-science/products/nemo/" },
  ];
  const infra: Tech[] = [
    { title: "Pandas", icon: ic("https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg"), link: "https://pandas.pydata.org/" },
    { title: "NumPy", icon: ic("https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg"), link: "https://numpy.org/" },
    { title: "OpenCV", icon: ic("https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg"), link: "https://opencv.org/" },
    { title: "Docker", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"), link: "https://www.docker.com/" },
    { title: "Git", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"), link: "https://git-scm.com/" },
    { title: "PostgreSQL", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"), link: "https://www.postgresql.org/" },
    { title: "FastAPI", icon: ic("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"), link: "https://fastapi.tiangolo.com/" },
  ];

  const exps: Exp[] = [
    { company: "Makunai Global", location: "Noida", role: "AI Engineer & Lead Developer — Voice Agents", startDate: "Jan 2025", endDate: "Present",
      achievements: ["Architecting production-grade voice agent systems — end-to-end pipeline from speech recognition to response generation", "Building scalable backend powering real-time voice AI using FastAPI, WebSockets, and cloud-native services", "Leading cross-functional efforts across ML, backend, and product teams to ship reliable voice agent products"] },
    { company: "SmartLink Holdings", location: "Goa, Verna", role: "Intern", startDate: "May 2024", endDate: "Jul 2024",
      achievements: ["Engineered a warehouse inventory system using Python and PostgreSQL, reducing parts logging time by ~40%", "Validated a computer vision-based PCB error detection tool using live camera feeds"] },
  ];

  const edus: Edu[] = [
    { institution: "BITS Pilani", location: "Pilani, India", degree: "B.Sc. Computer Science & Information Technology", graduationDate: "Aug 2022 - Present",
      courses: ["Artificial Intelligence", "Machine Learning", "Operating Systems", "Computer Architecture", "Data Structures & Algorithms", "Database Systems"] },
  ];

  return (
    <section id="about" className="max-w-5xl w-full mx-auto px-6 sm:px-8 mt-12">
      <p className="section-label mb-8">Skills & Tools</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillGroup title="Languages" tech={langs} />
        <SkillGroup title="ML / DL Frameworks" tech={ml} />
        <div className="md:col-span-2"><SkillGroup title="Infrastructure & MLOps" tech={infra} /></div>
      </div>
      <div className="separator my-20" />
      <div id="experience">
        <p className="section-label mb-8">Experience & Education</p>
        <div className="flex gap-1 p-1 rounded-xl mb-8 w-fit" style={{ background: "var(--surface-card)", border: "1px solid var(--border)" }}>
          {(["experience", "education"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} className="px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200"
              style={{ color: tab === t ? "var(--text-primary)" : "var(--text-secondary)", background: tab === t ? "rgba(255,255,255,0.06)" : "transparent" }}>{t}</button>
          ))}
        </div>
        {tab === "experience" && <div className="space-y-4">{exps.map((e, i) => <ExpEntry key={i} exp={e} />)}</div>}
        {tab === "education" && <div>{edus.map((e, i) => <EduEntry key={i} edu={e} />)}</div>}
      </div>
    </section>
  );
}
