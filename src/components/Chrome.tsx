import { Link } from "@tanstack/react-router";

import { contact, type Lang } from "@/lib/content";
import { useCopy, usePrefs } from "@/lib/prefs";

const LANGS: Lang[] = ["en", "pt"];

/** Shared page frame: a narrow left-aligned column with the bar on top and links below. */
export function Page({
  children,
  tight = false,
}: {
  children: React.ReactNode;
  /** Inner pages sit closer to the bar; the home page keeps the airy opening. */
  tight?: boolean;
}) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[640px] flex-col px-6 sm:px-8">
      <TopBar />
      <main className={`flex-1 pb-24 ${tight ? "pt-10 sm:pt-14" : "pt-[12vh] sm:pt-[16vh]"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function TopBar() {
  const { lang, setLang, theme, toggleTheme } = usePrefs();
  const t = useCopy();

  return (
    <header className="flex items-center justify-between pt-7 text-sm text-muted">
      <Link to="/" className="text-ink transition-opacity hover:opacity-70">
        Mateus Ataide
      </Link>

      <div className="flex items-center gap-4">
        <div className="flex gap-2" role="group" aria-label="Language">
          {LANGS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLang(option)}
              aria-pressed={lang === option}
              className={lang === option ? "text-ink" : "transition-colors hover:text-ink"}
            >
              {option === "en" ? "En" : "Pt"}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? t.theme.light : t.theme.dark}
          title={theme === "dark" ? t.theme.light : t.theme.dark}
          className="grid size-6 place-items-center transition-colors hover:text-ink"
        >
          {/* A half-filled disc: the filled side is the theme you'd switch to. */}
          <svg viewBox="0 0 16 16" className="size-[15px]" aria-hidden>
            <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Footer() {
  const t = useCopy();

  return (
    <footer className="flex flex-col gap-3 border-t border-rule py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <span>{t.footer}</span>
      <nav className="flex gap-5">
        <a href={`mailto:${contact.email}`} className="transition-colors hover:text-ink">
          Email
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-ink"
        >
          GitHub
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-ink"
        >
          LinkedIn
        </a>
        <a
          href={contact.medium}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-ink"
        >
          Medium
        </a>
      </nav>
    </footer>
  );
}
