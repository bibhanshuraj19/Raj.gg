import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ExternalLink, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
      <motion.nav
        className={`flex h-12 max-w-3xl w-full rounded-xl px-4 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-[0_4px_30px_-4px_rgba(56,189,248,0.06)]"
            : "bg-transparent border border-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <div className="relative">
              <img
                alt="Logo"
                draggable={false}
                className="h-7 w-7 rounded-full ring-1 ring-cyan/20"
                src="/me.png"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald rounded-full border border-bg" />
            </div>
            <span className="text-xs font-mono text-cyan/60 ml-2 hidden sm:block">~/raj</span>
            <div className="hidden sm:flex items-center gap-0.5 ml-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-2.5 py-1 text-xs font-mono text-text-dim hover:text-cyan transition-all duration-300 rounded-md hover:bg-cyan/5"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <Link
              draggable={false}
              href="/Resume.pdf"
              download="Raj_Resume.pdf"
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-text-dim hover:text-text transition-colors rounded-md hover:bg-white/5"
            >
              <Download className="w-3 h-3" />
              resume
            </Link>
            <Link
              draggable={false}
              href="https://github.com/bibhanshuraj19/raj.gg"
              target="_blank"
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-cyan/70 hover:text-cyan transition-colors rounded-md hover:bg-cyan/5"
            >
              <ExternalLink className="w-3 h-3" />
              src
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden p-1.5 text-text-dim hover:text-cyan transition-colors"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          className="fixed inset-x-4 top-16 glass-strong rounded-xl p-3 sm:hidden z-50"
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-2.5 text-left text-xs font-mono text-text-dim hover:text-cyan hover:bg-cyan/5 rounded-lg transition-colors"
              >
                <span className="text-cyan/30 mr-2">&gt;</span>
                {link.label}
              </button>
            ))}
            <div className="hud-line my-2" />
            <Link
              href="/Resume.pdf"
              download="Raj_Resume.pdf"
              className="flex items-center gap-2 px-3 py-2.5 text-xs font-mono text-text-dim hover:text-text hover:bg-white/5 rounded-lg transition-colors"
            >
              <Download className="w-3 h-3" />
              resume.pdf
            </Link>
            <Link
              href="https://github.com/bibhanshuraj19/raj.gg"
              target="_blank"
              className="flex items-center gap-2 px-3 py-2.5 text-xs font-mono text-cyan/70 hover:text-cyan hover:bg-cyan/5 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              source
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
