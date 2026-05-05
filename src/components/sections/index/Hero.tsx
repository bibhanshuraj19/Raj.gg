export default function Hero() {
  return (
    <section className="max-w-6xl w-full mx-auto px-6 sm:px-8 pt-36 sm:pt-44 pb-12">
      {/* Name + Title */}
      <div className="mb-6 fade-in fade-in-delay-1">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          <span style={{ color: "var(--text-primary)" }}>Bibhanshu Raj</span>
        </h1>
        <p
          className="text-lg sm:text-xl mt-2 font-mono"
          style={{ color: "var(--text-muted)" }}
        >
          @bibhanshuraj
        </p>
      </div>

      {/* Description */}
      <p
        className="fade-in fade-in-delay-2 text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
        style={{ color: "var(--text-secondary)" }}
      >
        AI engineer building intelligent systems — from voice agents and RAG
        pipelines to production ML infrastructure.{" "}
        <span style={{ color: "var(--text-primary)" }}>
          Turning research into products.
        </span>
      </p>

      {/* CTAs */}
      <div className="fade-in fade-in-delay-3 flex flex-wrap items-center gap-4 mb-10">
        <a href="#projects" className="btn-primary">
          View Projects
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
        <a href="#contact" className="btn-secondary">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
