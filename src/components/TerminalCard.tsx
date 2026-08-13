import { ReactNode } from "react";

interface TerminalCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalCard({ title, children, className = "" }: TerminalCardProps) {
  return (
    <div className={`terminal-card transition-all duration-200 ${className}`}>
      {title && (
        <div className="terminal-title-bar">
          <div className="terminal-dot terminal-dot-red" />
          <div className="terminal-dot terminal-dot-yellow" />
          <div className="terminal-dot terminal-dot-green" />
          <span className="ml-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            {title}
          </span>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}
