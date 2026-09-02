import { StatusPill } from "./StatusPill";
import { contact } from "@/lib/portfolio-content";

const LINK =
  "text-sm text-ink-80 underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink";

export function ContactFooter({
  prompt,
  location,
  status,
  name,
}: {
  prompt: string;
  location: string;
  status: string;
  name: string;
}) {
  return (
    <footer id="contact">
      <p className="text-lg font-semibold tracking-[-0.02em] text-ink">{prompt}</p>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a href={`mailto:${contact.email}`} className={LINK}>
          {contact.email}
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer" className={LINK}>
          github ↗
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" className={LINK}>
          linkedin ↗
        </a>
        <a href={contact.medium} target="_blank" rel="noreferrer" className={LINK}>
          medium ↗
        </a>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted">
        <span>
          © {new Date().getFullYear()} — {name} · {location}
        </span>
        <StatusPill label={status} />
      </div>
    </footer>
  );
}
