interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="section-header glow-text-secondary mb-8 flex items-center gap-2">
      <span className="text-muted-foreground">&gt;</span>
      <span>{title}</span>
      <span className="blink-cursor" />
    </h2>
  );
}
