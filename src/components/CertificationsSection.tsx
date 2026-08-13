import type { Certification } from "@/types/portfolio";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { TerminalCard } from "./TerminalCard";

interface CertificationsSectionProps {
  certifications: Certification[];
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="py-20">
      <SectionHeader title="CERTIFICATIONS" />
      <div className="space-y-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          >
            <TerminalCard>
              <div className="flex items-start gap-3">
                <Award size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <span className="prose-text text-sm font-medium">{cert.title}</span>
                    <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                  <div className="prose-text text-xs text-secondary mt-1">{cert.issuer}</div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors mt-2 inline-flex items-center gap-1"
                    >
                      <ExternalLink size={12} /> verify credential
                    </a>
                  )}
                </div>
              </div>
            </TerminalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
