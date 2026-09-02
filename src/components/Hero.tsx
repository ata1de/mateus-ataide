import avatar from "@/assets/avatar.jpg";
import { LangToggle } from "./LangToggle";
import { contact } from "@/lib/portfolio-content";
import type { Lang } from "@/lib/portfolio-content";

export function Hero({
  name,
  location,
  tagline,
  lang,
  onLangChange,
}: {
  name: string;
  location: string;
  tagline: string;
  lang: Lang;
  onLangChange: (next: Lang) => void;
}) {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>🇧🇷</span>
          {location}
        </span>
        <LangToggle lang={lang} onChange={onLangChange} />
      </div>

      <div className="mt-9 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-[-0.02em] text-ink">{name}</h1>
          <p className="mt-3 max-w-md text-md leading-relaxed text-ink-80">{tagline}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-4 inline-block text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
          >
            {contact.email}
          </a>
        </div>
        <img
          src={avatar}
          alt={name}
          width={88}
          height={88}
          className="size-16 shrink-0 rounded-full border border-line object-cover sm:size-22"
        />
      </div>
    </header>
  );
}
