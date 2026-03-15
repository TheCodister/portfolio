import type { Skills } from "@/types/portfolio";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

interface SkillsSectionProps {
  skills: Skills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = [
    { label: "LANGUAGES", items: skills.languages, color: "text-primary" },
    { label: "FRAMEWORKS", items: skills.frameworks, color: "text-secondary" },
    { label: "METHODOLOGIES", items: skills.methodologies, color: "text-accent" },
  ];

  return (
    <section className="py-20">
      <SectionHeader title="TECHNICAL_SKILLS" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="terminal-card transition-all duration-200"
          >
            <div className="terminal-title-bar">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
              <span className="ml-2 text-xl font-mono text-muted-foreground">{cat.label}</span>
            </div>
            <div className="p-4 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className={`pixel-badge ${cat.color}`}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
