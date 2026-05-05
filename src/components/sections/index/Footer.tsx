export default function Footer() {
  return (
    <footer className="max-w-6xl w-full mx-auto px-6 sm:px-8 pt-8 pb-8">
      <div className="separator mb-6" />
      <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
        &copy; {new Date().getFullYear()} Bibhanshu Raj. All rights reserved.
      </p>
    </footer>
  );
}
