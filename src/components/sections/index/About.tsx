export default function About() {
  return (
    <section id="about" className="max-w-6xl w-full mx-auto px-6 sm:px-8 py-20">
      <div className="separator mb-20" />

      <h2
        className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Building AI That Ships
      </h2>
      <p
        className="text-sm mb-12"
        style={{ color: "var(--text-muted)" }}
      >
        Not just research — production systems that scale.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 space-y-5">
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--text-secondary)" }}
          >
            I&apos;m Bibhanshu Raj, an AI engineer currently at Makunai Global.
            I specialize in building end-to-end machine learning systems — from
            training custom models to deploying them at scale.
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--text-secondary)" }}
          >
            My work spans voice agents, RAG pipelines, and production ML
            infrastructure. I believe the best AI isn&apos;t the most complex —
            it&apos;s the one that reliably ships value to users.
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--text-secondary)" }}
          >
            When I&apos;m not building voice agent systems or optimizing inference
            pipelines, you&apos;ll find me exploring new ML research and contributing
            to practical AI engineering.
          </p>
        </div>

        <div className="md:col-span-2 flex items-start justify-center">
          <div className="w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden border border-[var(--border)]">
            <img
              src="/me.png"
              alt="Bibhanshu Raj"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
