import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl w-full mx-auto px-6 sm:px-8 mt-28 mb-8">
      <div
        className="rounded-2xl p-10 sm:p-14 lg:p-16"
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
          Let&apos;s work{" "}
          <span style={{ color: "var(--text-tertiary)" }}>together</span>.
        </h2>
        <p className="text-base sm:text-lg max-w-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
          Open to AI engineering roles, research collaborations, and interesting projects.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:bibhanshuraj@icloud.com" className="btn-primary">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            bibhanshuraj@icloud.com
          </a>
          <Link href="https://www.linkedin.com/in/bibhanshu-raj-64b547283/" target="_blank" className="btn-secondary">
            LinkedIn
          </Link>
          <Link href="https://github.com/bibhanshuraj19" target="_blank" className="btn-secondary">
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
