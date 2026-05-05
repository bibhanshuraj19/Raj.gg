export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl w-full mx-auto px-6 sm:px-8 mt-28 mb-8">
      <h2
        className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Get in touch
      </h2>

      <p
        className="text-sm sm:text-base max-w-lg leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        Currently open for new opportunities. Whether you have a question or
        just want to say hi, I&apos;ll try my best to get back to you.
      </p>

      <a href="mailto:bibhanshuraj@icloud.com" className="btn-primary">
        Say Hello
      </a>
    </section>
  );
}
