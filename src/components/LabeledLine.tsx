interface LabeledLineProps {
  text: string;
}

const LABEL_PATTERN = /^([A-Za-z][A-Za-z0-9/&\- ]{2,40}):\s(.+)$/;

export function LabeledLine({ text }: LabeledLineProps) {
  const match = text.match(LABEL_PATTERN);

  if (!match) {
    return <span className="prose-text text-sm">{text}</span>;
  }

  const [, label, rest] = match;
  return (
    <span className="prose-text text-sm">
      <strong className="font-semibold text-secondary">{label}:</strong> {rest}
    </span>
  );
}
