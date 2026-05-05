export default function Experience() {
  const experiences = [
    {
      company: "Makunai Global",
      role: "AI Engineer & Lead Developer",
      period: "Jan 2025 — Present",
      description:
        "Architecting production-grade voice agent systems — end-to-end pipeline from speech recognition to response generation. Building scalable backend powering real-time voice AI using FastAPI, WebSockets, and cloud-native services.",
    },
    {
      company: "SmartLink Holdings",
      role: "Engineering Intern",
      period: "May 2024 — Jul 2024",
      description:
        "Engineered a warehouse inventory system using Python and PostgreSQL, reducing parts logging time by ~40%. Validated a computer vision-based PCB error detection tool using live camera feeds.",
    },

  ];

  return (
    <section
      id="experience"
      className="max-w-6xl w-full mx-auto px-6 sm:px-8 py-20"
    >
      <div className="separator mb-20" />

      <h2
        className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Where I&apos;ve Worked
      </h2>
      <p className="text-sm mb-14" style={{ color: "var(--text-muted)" }}>
        From building voice agents to scaling AI at production.
      </p>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="group py-8 transition-colors duration-200"
            style={{
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {exp.company}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {exp.role}
                </p>
              </div>
              <span
                className="text-xs font-mono shrink-0 mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                {exp.period}
              </span>
            </div>

            <p
              className="text-sm leading-relaxed max-w-3xl"
              style={{ color: "var(--text-secondary)" }}
            >
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
