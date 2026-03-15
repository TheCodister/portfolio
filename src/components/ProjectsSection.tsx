import type { Project } from "@/types/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { TerminalCard } from "./TerminalCard";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-20">
      <SectionHeader title="PROJECTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          >
            <TerminalCard title={project.name}>
              <p className="font-mono text-sm text-foreground mb-3">{project.description}</p>
              <ul className="space-y-1 mb-4">
                {project.highlights.map((h, j) => (
                  <li key={j} className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary mr-2">→</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="pixel-badge text-secondary">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-foreground hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    <Github size={14} /> source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-foreground hover:text-accent transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={14} /> live
                  </a>
                )}
              </div>
            </TerminalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
