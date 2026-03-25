import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/bibhanshuraj19" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bibhanshu-raj-64b547283/" },
  { label: "YouTube", href: "https://www.youtube.com/@raj19-cxz" },
  { label: "X", href: "https://x.com/bibhanshuraj19" },
  { label: "Discord", href: "https://discord.gg/26YyDqkCcg" },
];

export default function Footer() {
  return (
    <footer className="max-w-6xl w-full mx-auto px-6 pt-28 pb-10">
      <div className="surface-separator mb-8" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className="font-label text-xs text-on-surface-variant hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Attribution */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-label text-on-surface-variant/50">
          <span>Built with Next.js</span>
          <span className="hidden sm:inline">·</span>
          <span>&copy; {new Date().getFullYear()} Raj.gg. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
