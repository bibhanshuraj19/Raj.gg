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
    { label: "Work", id: "projects" },
    { label: "About", id: "about" },
    { label: "Stack", id: "stack" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl w-full mx-auto flex h-14 px-6 sm:px-8 items-center justify-between">
        {/* Logo / Name */}
        <span
          className="font-semibold text-sm tracking-wide cursor-pointer"
          style={{ color: "var(--text-primary)" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          RAJ.GG
        </span>

        {/* Center Nav Links */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-3 py-1.5 text-sm rounded-md transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Side - Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            draggable={false}
            href="/Resume.pdf"
            download="Bibhanshu_Raj_Resume.pdf"
            className="flex items-center gap-1.5 text-sm transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </Link>
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-1.5 text-sm rounded-md font-medium transition-all duration-200"
            style={{
              color: "var(--accent)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-2 transition-colors duration-200"
          style={{ color: "var(--text-secondary)" }}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm sm:hidden z-40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-x-0 top-14 p-4 sm:hidden z-50 bg-[#0a0a0a] border-b border-[#1a1a1a]">
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
              <button
                onClick={() => scrollTo("contact")}
                className="px-4 py-3 text-left text-sm rounded-lg transition-colors duration-200 hover:bg-white/[0.04]"
                style={{ color: "var(--accent)" }}
              >
                Contact
              </button>
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
