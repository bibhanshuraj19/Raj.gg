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
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4">
      <motion.nav
        className={`flex h-14 max-w-6xl w-full rounded-xl px-6 transition-all duration-500 ease-smooth ${
          scrolled
            ? "glass-strong shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                alt="Logo"
                draggable={false}
                className="h-8 w-8 rounded-full ring-1 ring-white/10"
                src="/me.png"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald rounded-full border-2 border-surface" />
            </div>
            <span className="font-display font-semibold text-sm text-on-surface tracking-wide">
              Raj.gg
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-1.5 text-sm font-label text-on-surface-variant hover:text-on-surface transition-all duration-400 ease-smooth rounded-md hover:bg-white/[0.04]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Link
              draggable={false}
              href="/Resume.pdf"
              download="Raj_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-label text-on-surface-variant hover:text-on-surface transition-all duration-400 ease-smooth rounded-md hover:bg-white/[0.04]"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Link>
            <Link
              draggable={false}
              href="https://github.com/bibhanshuraj19/raj.gg"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-label text-on-surface-variant/60 hover:text-on-surface transition-all duration-400 ease-smooth rounded-md hover:bg-white/[0.04]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Source
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden p-2 text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          className="fixed inset-x-6 top-20 glass-strong rounded-xl p-4 sm:hidden z-50 border border-outline-variant"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-3 text-left text-sm font-label text-on-surface-variant hover:text-on-surface hover:bg-white/[0.04] rounded-lg transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
            <div className="surface-separator my-2" />
            <Link
              href="/Resume.pdf"
              download="Raj_Resume.pdf"
              className="flex items-center gap-2 px-4 py-3 text-sm font-label text-on-surface-variant hover:text-on-surface hover:bg-white/[0.04] rounded-lg transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
