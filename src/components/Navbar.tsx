import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
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
      <nav
        className={`flex h-14 max-w-5xl w-full rounded-xl px-6 items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#1e1e1e] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-3">
          <img
            alt="Logo"
            draggable={false}
            className="h-8 w-8 rounded-full ring-1 ring-white/10"
            src="/me.png"
          />
          <span className="font-semibold text-sm tracking-wide" style={{ color: "var(--text-primary)" }}>
            Raj.gg
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-3 py-1.5 text-sm rounded-md transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </button>
          ))}
          <Link
            draggable={false}
            href="/Resume.pdf"
            download="Bibhanshu_Raj_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm ml-2 rounded-md transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-2 transition-colors duration-200"
          style={{ color: "var(--text-secondary)" }}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm sm:hidden z-40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-x-6 top-20 rounded-xl p-4 sm:hidden z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#1e1e1e]">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-4 py-3 text-left text-sm rounded-lg transition-colors duration-200 hover:bg-white/[0.04]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </button>
              ))}
              <div className="separator my-2" />
              <Link
                href="/Resume.pdf"
                download="Bibhanshu_Raj_Resume.pdf"
                className="flex items-center gap-2 px-4 py-3 text-sm rounded-lg transition-colors duration-200 hover:bg-white/[0.04]"
                style={{ color: "var(--text-secondary)" }}
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
