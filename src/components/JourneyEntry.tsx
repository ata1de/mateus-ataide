import { LogoTile } from "./LogoTile";
import { StatGrid } from "./StatGrid";
import type { Stat } from "@/lib/portfolio-content";

/**
 * One entry in the journey / education lists: a logo tile in a left rail, with
 * the role, its subject and period, a line saying what the place actually is,
 * the bullets, and any headline numbers.
 */
export function JourneyEntry({
  slug,
  subject,
  blurb,
  site,
  role,
  period,
  bullets,
  stats,
}: {
  slug: string;
  subject: string;
  blurb: string;
  site?: string;
  role: string;
  period: string;
  bullets: readonly string[];
  stats?: readonly Stat[];
}) {
  return (
    <article className="flex gap-4">
      <LogoTile slug={slug} name={subject} />
      <div className="min-w-0 flex-1">
        <h3 className="text-md font-semibold text-ink">{role}</h3>
        <p className="mt-0.5 text-xs text-muted">
          {subject} <span className="px-1.5 text-divider">·</span> {period}
        </p>

        {site ? (
          <a
            href={site}
            target="_blank"
            rel="noreferrer"
            className="mt-1.5 inline-block text-xs text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
          >
            {blurb} ↗
          </a>
        ) : (
          <p className="mt-1.5 text-xs text-muted">{blurb}</p>
        )}

        <ul className="mt-3 space-y-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="text-sm leading-relaxed text-ink-80">
              {bullet}
            </li>
          ))}
        </ul>
        {stats && stats.length > 0 && <StatGrid stats={stats} />}
      </div>
    </article>
  );
}
