import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo: string;
  issueDate: string;
  credentialUrl: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: "python-bootcamp",
      title: "The Complete Python Bootcamp From Zero to Hero in Python",
      issuer: "Udemy",
      issuerLogo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      issueDate: "2024",
      credentialUrl: "https://www.udemy.com/certificate/UC-a384f64f-a4a7-49d2-979e-61f01ddc4fed/",
    },
  ];

  return (
    <section id="certifications" className="max-w-6xl w-full mx-auto px-6 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <span className="section-number">05 // Credentials</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
          <span className="gradient-text-static">Certifications</span>
        </h2>
      </motion.div>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={cert.credentialUrl}
              target="_blank"
              className="surface-card flex items-center gap-5 p-5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/90 p-2.5 flex items-center justify-center shrink-0">
                <img
                  src={cert.issuerLogo}
                  alt={cert.issuer}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-on-surface group-hover:text-accent transition-colors font-display truncate">
                  {cert.title}
                </h4>
                <p className="font-label text-xs text-on-surface-variant mt-1">
                  {cert.issuer} &middot; {cert.issueDate}
                </p>
              </div>

              <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-accent transition-colors shrink-0" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
