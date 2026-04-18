import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["about", "projects", "experience", "contact"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) current = id;
      }
      setActiveSection(current);
    };
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
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4">
        <motion.nav
          className={`flex h-14 max-w-5xl w-full rounded-xl px-6 transition-all duration-500 ease-smooth ${
            scrolled
              ? "glass-strong shadow-[0_4px_24px_rgba(0,0,0,0.4)] border border-white/[0.04]"
              : "bg-transparent"
          }`}
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between w-full">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative">
                <img
                  alt="Logo"
                  draggable={false}
                  className="h-8 w-8 rounded-full ring-1 ring-white/10"
                  src="/me.png"
                />
                <motion.div
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald rounded-full border-2 border-surface"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="font-display text-sm text-on-surface tracking-wide">
                Raj.gg
              </span>
            </motion.div>

            <div className="hidden sm:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3 py-1.5 text-sm font-label transition-all duration-300 ease-smooth rounded-md ${
                    activeSection === link.id
                      ? "text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/[0.04]"
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-md bg-white/[0.06]"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center">
              <motion.div whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                <Link
                  draggable={false}
                  href="/Resume.pdf"
                  download="Raj_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-label text-on-surface-variant hover:text-on-surface transition-all duration-300 ease-smooth rounded-md hover:bg-white/[0.04]"
                >
                  <Download className="w-3.5 h-3.5" />
                  Resume
                </Link>
              </motion.div>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden p-2 text-on-surface-variant hover:text-on-surface transition-colors duration-300"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm sm:hidden z-40"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                className="fixed inset-x-6 top-20 glass-strong rounded-xl p-4 sm:hidden z-50 border border-white/[0.04]"
                initial={{ opacity: 0, y: -12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.95 }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className="px-4 py-3 text-left text-sm font-label text-on-surface-variant hover:text-on-surface hover:bg-white/[0.04] rounded-lg transition-all duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      {link.label}
                    </motion.button>
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
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
