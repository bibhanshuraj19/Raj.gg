import { motion } from "framer-motion";
import Link from "next/link";

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
      credentialUrl: "https://www.udemy.com/certificate/UC-a384f64f-a4a7-49d2-979e-61f01ddc4fed/"
    }
  ];

  return (
    <section id="certifications" className="max-w-4xl w-full flex flex-col mx-auto px-4">
      <motion.h1
        className="text-left font-bold text-3xl md:text-4xl mt-16 mb-8"
        initial={{ transform: 'translateY(-30px)', opacity: 0 }}
        whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96] }}
        viewport={{ amount: 0.1, once: true }}
      >
        Certifications
      </motion.h1>

      {/* Certifications List */}
      <div className="flex flex-col">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={cert.credentialUrl}
              target="_blank"
              className="group flex items-center gap-4 py-6 border-t border-accent/30 hover:bg-accent/5 transition-colors"
            >
              {/* Vertical dashed line */}
              <div className="w-px h-14 border-l border-dashed border-accent/40" />

              {/* Logo */}
              <div className="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center flex-shrink-0 shadow-sm">
                <img 
                  src={cert.issuerLogo} 
                  alt={cert.issuer}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-foreground/50 mt-1">
                  <span className="text-foreground/60">@</span> {cert.issuer}
                  <span className="mx-2 text-foreground/30">|</span>
                  {cert.issueDate}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="flex-shrink-0 text-foreground/40 group-hover:text-foreground/70 transition-colors">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                  />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
        
        {/* Bottom border */}
        <div className="border-t border-accent/30" />
      </div>
    </section>
  );
}
