import Head from "next/head";
import Link from "next/link";

function ChatMessage({
  name,
  time,
  avatar,
  variant,
  children,
}: {
  name: string;
  time: string;
  avatar: "raj" | "visitor";
  variant: "raj" | "visitor";
  children: React.ReactNode;
}) {
  return (
    <div className="chat-message">
      <div className={`chat-avatar chat-avatar-${variant}`}>
        {variant === "raj" ? (
          <img alt="Raj" src="/me.png" />
        ) : (
          "Y"
        )}
      </div>
      <div>
        <div className="chat-header">
          <span className="chat-name">{name}</span>
          <span className="chat-time">{time}</span>
        </div>
        <div className="chat-body">{children}</div>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Raj.gg — Bibhanshu Raj</title>
        <meta
          name="description"
          content="Bibhanshu Raj — AI/ML Engineer. Building intelligent systems that think, speak, and learn."
        />
      </Head>

      <div className="max-w-content mx-auto px-5 sm:px-6 pb-6">
        {/* Header */}
        <div className="page-header">
          <h1>Bibhanshu Raj</h1>
          <p>
            <span className="status-dot" />
            building voice agents @ makunai global
          </p>
        </div>

        <hr className="section-divider" />

        {/* Intro conversation */}
        <h2 className="emoji-heading">
          👋 Imagine DMing someone and not knowing what they do...
        </h2>

        <div style={{ marginTop: "1rem" }}>
          <ChatMessage name="You" time="2:15 PM" avatar="visitor" variant="visitor">
            <p>hey</p>
          </ChatMessage>

          <ChatMessage name="Raj" time="2:19 PM" avatar="raj" variant="raj">
            <p>...?</p>
          </ChatMessage>

          <ChatMessage name="You" time="2:20 PM" avatar="visitor" variant="visitor">
            <p>what do you do again?</p>
          </ChatMessage>

          <ChatMessage name="Raj" time="2:20 PM" avatar="raj" variant="raj">
            <p>
              I build <strong>production AI systems</strong> — voice agents,
              RAG pipelines, and ML infrastructure that work at scale
            </p>
          </ChatMessage>
        </div>

        <p
          style={{
            fontSize: "0.9375rem",
            color: "#616061",
            marginTop: "1.25rem",
            lineHeight: 1.6,
          }}
        >
          Instead of going back and forth, here&apos;s everything you&apos;d
          want to know. <strong>Just scroll!</strong> 😄
        </p>

        <hr className="section-divider" />

        {/* Currently */}
        <h2 className="emoji-heading">🟢 What I&apos;m up to</h2>

        <div style={{ marginTop: "1rem" }}>
          <ChatMessage name="Raj" time="now" avatar="raj" variant="raj">
            <p>Currently working as <strong>AI Engineer &amp; Lead Developer</strong> at <strong>Makunai Global</strong>, Noida.</p>
            <div className="experience-block" style={{ marginTop: "0.75rem" }}>
              <h4>Makunai Global</h4>
              <div className="role">AI Engineer &amp; Lead Developer — Voice Agents &middot; Jan 2025 – Present</div>
              <ul>
                <li>
                  Architecting production-grade voice agent systems — end-to-end
                  pipeline from speech recognition to response generation
                </li>
                <li>
                  Building scalable backend powering real-time voice AI using
                  FastAPI, WebSockets, and cloud-native services
                </li>
                <li>
                  Leading cross-functional efforts across ML, backend, and
                  product teams to ship reliable voice agent products
                </li>
              </ul>
            </div>

            <div className="experience-block">
              <h4>SmartLink Holdings</h4>
              <div className="role">Intern &middot; Goa, Verna &middot; May – Jul 2024</div>
              <ul>
                <li>
                  Built warehouse inventory system with Python &amp; PostgreSQL,
                  replacing manual Excel — reduced logging time by ~40%
                </li>
                <li>
                  Validated CV-based PCB error detection tool using live camera
                  feeds, improving automated defect identification
                </li>
              </ul>
            </div>
          </ChatMessage>
        </div>

        <hr className="section-divider" />

        {/* Projects */}
        <h2 className="emoji-heading">🛠 What I&apos;ve built</h2>

        <div style={{ marginTop: "1rem" }}>
          <ChatMessage name="Raj" time="2:21 PM" avatar="raj" variant="raj">
            <p>Here are the highlights:</p>

            <div className="project-block">
              <h4>Production Voice Agent Platform</h4>
              <div className="meta">
                AI Engineer &amp; Lead Developer &middot; Makunai Global &middot; 2025
              </div>
              <ul>
                <li>Real-time STT/TTS voice agent with Deepgram + OpenAI response generation</li>
                <li>RAG pipeline with Pinecone for context-aware voice conversations</li>
                <li>FastAPI + WebSockets backend with sub-second response times</li>
                <li>Led end-to-end architecture from speech recognition to deployment</li>
              </ul>
              <div className="tech-tags">
                {["Python", "Deepgram", "OpenAI", "FastAPI", "WebSockets", "Pinecone", "Redis"].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-block">
              <h4>AI-Powered Evaluation Bot</h4>
              <div className="meta">
                ML Developer &middot; Academic Project &middot; 2024
              </div>
              <ul>
                <li>95% grading accuracy across 200+ student submissions</li>
                <li>Automated 85% of evaluation steps, cutting grading time by 60%</li>
                <li>Intelligent rubric matching and automated feedback generation</li>
              </ul>
              <div className="tech-tags">
                {["Python", "OpenAI", "FastAPI"].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-block">
              <h4>Multi-Document RAG Chatbot</h4>
              <div className="meta">
                AI Engineer &middot; Research Project &middot; 2024
              </div>
              <ul>
                <li>Contextual Q&amp;A over 500+ academic documents with 95% accuracy</li>
                <li>40% improvement in user satisfaction through claim validation</li>
                <li>Vector similarity search for efficient document retrieval</li>
              </ul>
              <div className="tech-tags">
                {["Python", "LangChain", "OpenAI", "PostgreSQL"].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-block">
              <h4>LLM-Powered Learning Agent</h4>
              <div className="meta">
                ML Engineer &middot; Academic Project &middot; 2025
              </div>
              <ul>
                <li>RAG architecture for precise answers from research papers</li>
                <li>NVIDIA NeMo Guardrails for content safety and quality</li>
                <li>Custom RAGAS metrics for response quality evaluation</li>
              </ul>
              <div className="tech-tags">
                {["Python", "LangChain", "NVIDIA NeMo", "Hugging Face"].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </ChatMessage>
        </div>

        <hr className="section-divider" />

        {/* Tech stack */}
        <h2 className="emoji-heading">⚡ Tools I work with</h2>

        <div style={{ marginTop: "1rem" }}>
          <ChatMessage name="Raj" time="2:22 PM" avatar="raj" variant="raj">
            <p><strong>Languages</strong></p>
            <div className="tech-list">
              {["Python", "C/C++", "SQL"].map((t) => (
                <span key={t} className="tech-list-tag">{t}</span>
              ))}
            </div>

            <p style={{ marginTop: "0.75rem" }}><strong>ML / DL Frameworks</strong></p>
            <div className="tech-list">
              {["PyTorch", "TensorFlow", "Scikit-Learn", "Hugging Face", "LangChain", "OpenAI API", "NVIDIA NeMo"].map((t) => (
                <span key={t} className="tech-list-tag">{t}</span>
              ))}
            </div>

            <p style={{ marginTop: "0.75rem" }}><strong>Infrastructure &amp; MLOps</strong></p>
            <div className="tech-list">
              {["Pandas", "NumPy", "OpenCV", "Docker", "Git", "PostgreSQL", "FastAPI"].map((t) => (
                <span key={t} className="tech-list-tag">{t}</span>
              ))}
            </div>
          </ChatMessage>
        </div>

        <hr className="section-divider" />

        {/* Education */}
        <h2 className="emoji-heading">🎓 Education</h2>

        <div style={{ marginTop: "1rem" }}>
          <ChatMessage name="Raj" time="2:23 PM" avatar="raj" variant="raj">
            <div className="education-block">
              <h4>BITS Pilani</h4>
              <div className="meta">
                B.Sc. Computer Science &amp; Information Technology &middot; Aug 2022 – Present &middot; Pilani, India
              </div>
              <div className="courses-list">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Operating Systems",
                  "Computer Architecture",
                  "Foundation of Data Science",
                  "Data Structures & Algorithms",
                  "Database Systems",
                  "Object-Oriented Programming",
                ].map((c) => (
                  <span key={c} className="course-tag">{c}</span>
                ))}
              </div>
            </div>
          </ChatMessage>
        </div>

        <hr className="section-divider" />

        {/* Certifications */}
        <h2 className="emoji-heading">📜 Certifications</h2>

        <div style={{ marginTop: "1rem" }}>
          <ChatMessage name="Raj" time="2:24 PM" avatar="raj" variant="raj">
            <p>
              <Link
                href="https://www.udemy.com/certificate/UC-a384f64f-a4a7-49d2-979e-61f01ddc4fed/"
                target="_blank"
              >
                The Complete Python Bootcamp From Zero to Hero in Python
              </Link>{" "}
              — Udemy, 2024
            </p>
          </ChatMessage>
        </div>

        <hr className="section-divider" />

        {/* Contact */}
        <h2 className="emoji-heading">📬 Let&apos;s connect</h2>

        <div style={{ marginTop: "1rem" }}>
          <ChatMessage name="You" time="2:25 PM" avatar="visitor" variant="visitor">
            <p>cool, how do I reach you?</p>
          </ChatMessage>

          <ChatMessage name="Raj" time="2:25 PM" avatar="raj" variant="raj">
            <p>
              Open to AI engineering roles, research collaborations, and
              interesting projects. Pick your favorite:
            </p>
            <div className="contact-links">
              <a
                href="mailto:bibhanshuraj@icloud.com"
                className="contact-link contact-link-email"
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/bibhanshu-raj-64b547283/"
                target="_blank"
                className="contact-link contact-link-linkedin"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/bibhanshuraj19"
                target="_blank"
                className="contact-link contact-link-github"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <a
                href="https://x.com/bibhanshuraj19"
                target="_blank"
                className="contact-link contact-link-x"
              >
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                X
              </a>
              <a
                href="/Resume.pdf"
                download="Raj_Resume.pdf"
                className="contact-link contact-link-resume"
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Resume
              </a>
            </div>
          </ChatMessage>
        </div>

        <hr className="section-divider" />

        <p
          style={{
            fontSize: "0.875rem",
            color: "#9b9b9b",
            textAlign: "center",
            marginTop: "0.5rem",
          }}
        >
          If you see this and it made you smile — feel free to just say hi. I
          won&apos;t leave you on read. 😉
        </p>

        {/* Footer */}
        <footer className="page-footer">
          <p>&copy; {new Date().getFullYear()} Bibhanshu Raj</p>
          <p>
            Built with{" "}
            <Link href="https://nextjs.org" target="_blank">
              Next.js
            </Link>{" "}
            +{" "}
            <Link href="https://tailwindcss.com" target="_blank">
              Tailwind
            </Link>
            . Inspired by{" "}
            <Link href="https://nohello.net" target="_blank">
              nohello.net
            </Link>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
