import type { Profile } from "@/types/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypewriterText } from "./TypewriterText";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="py-20 md:py-28 flex flex-col items-center text-center">
      <div className="mb-6 text-xs font-mono text-muted-foreground">
        guest@portfolio:~$ ./init.sh
      </div>

      <h1 className="font-display text-xl md:text-3xl lg:text-4xl leading-relaxed glow-text mb-4">
        <TypewriterText
          text={`INIT ${profile.name.toUpperCase().replace(" ", "_")}.EXE`}
          speed={70}
        />
      </h1>

      <div className="text-sm md:text-base font-mono text-secondary glow-text-secondary mt-2 mb-8">
        {profile.title}
      </div>

      <div className="text-xs font-mono text-primary mb-10">
        [STATUS: ONLINE] [BUILD: STABLE] [UPTIME: 99.9%]
      </div>

      <div className="flex gap-6 items-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-secondary transition-colors duration-200 hover:drop-shadow-[0_0_8px_hsl(var(--secondary))]"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-secondary transition-colors duration-200 hover:drop-shadow-[0_0_8px_hsl(var(--secondary))]"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="text-foreground hover:text-accent transition-colors duration-200 hover:drop-shadow-[0_0_8px_hsl(var(--accent))]"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
}
