export default function Footer() {
  return (
    <footer className="max-w-5xl w-full mx-auto px-6 sm:px-8 pt-12 pb-8">
      <div className="separator mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          &copy; {new Date().getFullYear()} Bibhanshu Raj
        </p>
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
