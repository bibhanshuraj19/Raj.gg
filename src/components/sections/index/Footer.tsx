export default function Footer() {
  return (
    <footer className="max-w-3xl w-full mx-auto px-6 pt-24 pb-8">
      <div className="hud-line-bright mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-mono text-text-dim">
          <span className="text-cyan/40">&copy;</span> {new Date().getFullYear()} Bibhanshu Raj
        </p>
        <p className="text-[11px] font-mono text-text-dim">
          <span className="text-cyan/30">built_with</span>{" "}
          <span className="text-text-muted">Next.js</span>
          <span className="text-cyan/20 mx-1">+</span>
          <span className="text-text-muted">Tailwind</span>
          <span className="text-cyan/20 mx-1">+</span>
          <span className="text-text-muted">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
