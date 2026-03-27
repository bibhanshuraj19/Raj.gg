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
    <section id="certifications" className="max-w-7xl w-full mx-auto px-6 sm:px-8 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <span className="section-number">04 // Certifications</span>
      </motion.div>

      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link
              href={cert.credentialUrl}
              target="_blank"
              className="surface-card flex items-center gap-4 p-5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/90 p-2 flex items-center justify-center shrink-0">
                <img src={cert.issuerLogo} alt={cert.issuer} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-on-surface group-hover:text-white transition-colors duration-300 font-display truncate">
                  {cert.title}
                </h4>
                <p className="font-label text-xs text-on-surface-variant/60 mt-0.5">
                  {cert.issuer} &middot; {cert.issueDate}
                </p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-on-surface-variant/30 group-hover:text-on-surface transition-colors duration-300 shrink-0" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
