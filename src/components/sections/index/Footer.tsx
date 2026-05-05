import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-5xl w-full mx-auto px-6 sm:px-8 pt-16 pb-8">
      <div className="separator mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} Built with Precision.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/bibhanshuraj19"
            target="_blank"
            className="text-xs transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/bibhanshu-raj-64b547283/"
            target="_blank"
            className="text-xs transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/bibhanshuraj19"
            target="_blank"
            className="text-xs transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            X
          </Link>
        </div>

        <span
          className="text-xs font-semibold tracking-wide"
          style={{ color: "var(--text-primary)" }}
        >
          RAJ.GG
        </span>
      </div>
    </footer>
  );
}
