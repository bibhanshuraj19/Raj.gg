import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "BITS Pilani",
      degree: "B.Sc. Computer Science & Information Technology",
      location: "Pilani, India",
      period: "Aug 2022 — Present",
      courses: [
        "Artificial Intelligence",
        "Machine Learning",
        "Operating Systems",
        "Computer Architecture",
        "Data Structures & Algorithms",
        "Database Systems",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="max-w-6xl w-full mx-auto px-6 sm:px-8 py-20"
    >
      <div className="separator mb-20" />

      <h2
        className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Education
      </h2>
      <p className="text-sm mb-14" style={{ color: "var(--text-muted)" }}>
        Academic background and coursework.
      </p>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="rounded-xl px-6 py-6 sm:px-8 sm:py-7 transition-all duration-200"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(52,211,153,0.1)" }}
              >
                <GraduationCap
                  className="w-5 h-5"
                  style={{ color: "var(--accent)" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {edu.institution}
                </h3>
                <p
                  className="text-sm font-medium mt-0.5"
                  style={{ color: "var(--accent)" }}
                >
                  {edu.degree}
                </p>
              </div>
            </div>

            <div
              className="flex flex-wrap gap-4 text-xs mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {edu.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {edu.period}
              </span>
            </div>

            {edu.courses.length > 0 && (
              <>
                <div className="separator mb-5" />
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--text-muted)" }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.15em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Relevant Courses
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span key={course} className="chip">
                      {course}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
