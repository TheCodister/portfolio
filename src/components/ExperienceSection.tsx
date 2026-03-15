import type { Experience } from "@/types/portfolio";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { TerminalCard } from "./TerminalCard";

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="py-20">
      <SectionHeader title="EXPERIENCE" />
      <div className="space-y-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          >
            <TerminalCard title={exp.company}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <span className="font-mono text-sm text-secondary">{exp.role}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {exp.startDate} → {exp.endDate} // {exp.location}
                </span>
              </div>
              <ul className="space-y-1 mb-4">
                {exp.description.map((line, j) => (
                  <li key={j} className="font-mono text-sm text-foreground py-2">
                    <span className="text-muted-foreground mr-2">$</span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="pixel-badge text-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </TerminalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
