import type { Education } from "@/types/portfolio";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { TerminalCard } from "./TerminalCard";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="py-20">
      <SectionHeader title="EDUCATION" />
      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          >
            <TerminalCard title={edu.institution}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <span className="font-mono text-sm text-secondary">
                  {edu.degree} — {edu.field}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {edu.startDate} → {edu.endDate}
                </span>
              </div>
              <ul className="space-y-1">
                {edu.achievements.map((a, j) => (
                  <li key={j} className="font-mono text-sm text-foreground">
                    <span className="text-primary mr-2">►</span>
                    {a}
                  </li>
                ))}
              </ul>
            </TerminalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
