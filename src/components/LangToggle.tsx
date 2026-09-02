import type { Lang } from "@/lib/portfolio-content";

const LANGS: Lang[] = ["en", "pt"];

export function LangToggle({ lang, onChange }: { lang: Lang; onChange: (next: Lang) => void }) {
  return (
    <div className="inline-flex rounded-pill border border-line bg-surface p-0.5">
      {LANGS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={lang === option}
          className={
            lang === option
              ? "rounded-pill bg-bg px-2.5 py-1 text-2xs font-semibold text-ink"
              : "rounded-pill px-2.5 py-1 text-2xs font-medium text-muted transition-colors hover:text-ink"
          }
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
