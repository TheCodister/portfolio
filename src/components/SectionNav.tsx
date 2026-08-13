import { useEffect, useState } from "react";
import { PhosphorToggle } from "./PhosphorToggle";

const SECTIONS = [
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "education", label: "education" },
  { id: "certifications", label: "certifications" },
];

export function SectionNav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-background/85 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-4 overflow-x-auto">
        <span className="font-mono text-[11px] text-muted-foreground shrink-0">
          guest@portfolio:~$ ls
        </span>
        <div className="flex gap-4">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`section-nav-link shrink-0 ${active === s.id ? "active" : ""}`}
            >
              --{s.label}
            </a>
          ))}
        </div>
        <PhosphorToggle />
      </div>
    </nav>
  );
}
