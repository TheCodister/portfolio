import { useEffect, useState } from "react";

type Phosphor = "green" | "amber";

const STORAGE_KEY = "phosphor";

function applyPhosphor(mode: Phosphor) {
  if (mode === "amber") {
    document.documentElement.setAttribute("data-phosphor", "amber");
  } else {
    document.documentElement.removeAttribute("data-phosphor");
  }
}

export function PhosphorToggle() {
  const [mode, setMode] = useState<Phosphor>("green");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Phosphor | null;
    if (stored === "amber" || stored === "green") {
      setMode(stored);
      applyPhosphor(stored);
    }
  }, []);

  const toggle = () => {
    const next: Phosphor = mode === "green" ? "amber" : "green";
    setMode(next);
    applyPhosphor(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="section-nav-link shrink-0 flex items-center gap-1.5 ml-auto"
      aria-label="Toggle phosphor color"
      title={mode === "green" ? "Switch to amber phosphor" : "Switch to green phosphor"}
    >
      <span
        className="inline-block w-2.5 h-2.5 rounded-full"
        style={{
          background: mode === "green" ? "hsl(120 100% 50%)" : "hsl(40 100% 50%)",
          boxShadow: mode === "green" ? "0 0 6px hsl(120 100% 50%)" : "0 0 6px hsl(40 100% 50%)",
        }}
      />
      --phosphor={mode}
    </button>
  );
}
