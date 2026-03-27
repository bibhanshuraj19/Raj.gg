import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { TextScramble, RevealOnScroll } from "@/components/AnimationUtils";

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
    <section id="certifications" className="max-w-7xl w-full mx-auto px-8 mt-36">
      <RevealOnScroll>
        <motion.div className="mb-10">
          <span className="section-number">
            <TextScramble text="04 // CERTIFICATIONS" delay={200} speed={25} />
          </span>
        </motion.div>
      </RevealOnScroll>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <RevealOnScroll key={cert.id} delay={index * 0.1} direction="right">
            <Link
              href={cert.credentialUrl}
              target="_blank"
              className="surface-card flex items-center gap-5 p-6 group block"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-white/90 p-2.5 flex items-center justify-center shrink-0"
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
              >
                <img src={cert.issuerLogo} alt={cert.issuer} className="w-full h-full object-contain" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-on-surface group-hover:text-white transition-colors duration-400 font-display truncate">
                  {cert.title}
                </h4>
                <p className="font-label text-sm text-on-surface-variant/60 mt-1">
                  {cert.issuer} &middot; {cert.issueDate}
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ExternalLink className="w-4 h-4 text-on-surface-variant/30 group-hover:text-on-surface transition-colors duration-400 shrink-0" />
              </motion.div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
