import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-6xl w-full mx-auto px-6 pt-24 pb-8">
      <div className="surface-separator mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-label text-xs text-on-surface-variant/40">
          &copy; {new Date().getFullYear()} Bibhanshu Raj
        </p>
        <p className="font-label text-xs text-on-surface-variant/40">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
