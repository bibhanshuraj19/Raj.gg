import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Award } from "lucide-react";

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
    <section id="certifications" className="max-w-3xl w-full mx-auto px-6 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent" />
          <h2 className="text-[11px] font-mono font-medium text-cyan uppercase tracking-[0.25em]">
            // Credentials
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-purple/30 to-transparent" />
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          <span className="gradient-text-static">Certifications</span>
        </h3>
      </motion.div>

      <div className="space-y-3">
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
              className="group neon-card flex items-center gap-4 p-4 rounded-2xl"
            >
              <div className="w-11 h-11 rounded-xl bg-white/90 p-2 flex items-center justify-center shrink-0">
                <img
                  src={cert.issuerLogo}
                  alt={cert.issuer}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-text group-hover:text-cyan transition-colors truncate font-display">
                  {cert.title}
                </h4>
                <p className="text-[11px] text-text-dim font-mono mt-1">
                  {cert.issuer} &middot; {cert.issueDate}
                </p>
              </div>

              <ExternalLink className="w-3.5 h-3.5 text-text-dim group-hover:text-cyan transition-colors shrink-0" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
