import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import { Page } from "@/components/Chrome";
import { contact, spans, type Entry, type Kind } from "@/lib/content";
import { getPosts } from "@/lib/medium";
import { useCopy, usePrefs } from "@/lib/prefs";

const SITE_URL = "https://mateusataide.com/";

const DESCRIPTION =
  "Mateus Ataide, a software engineer from Brazil building payments at Stone — and applied AI on the side.";

export const Route = createFileRoute("/")({
  component: Home,
  loader: () => getPosts(),
  head: () => ({
    meta: [
      { title: "Mateus Ataide" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Mateus Ataide" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

function Home() {
  const t = useCopy();
  const { lang } = usePrefs();
  const posts = Route.useLoaderData();

  // The weekday depends on the visitor's clock, so it's only known after mount.
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => setDay(new Date().getDay()), []);

  const of = (kind: Kind) => t.entries.filter((entry) => entry.kind === kind);

  return (
    <Page>
      <p className="h-5 text-sm text-muted" aria-hidden={day === null}>
        {day !== null && <span className="rise inline-block">{t.greeting(day)}</span>}
      </p>

      <h1 className="mt-4 max-w-[16ch] text-display leading-[1.05] font-medium tracking-[-0.035em] text-ink">
        {t.headline.before}
        <span className="mark-in">{t.headline.mark}</span>
        {t.headline.after}
      </h1>

      <div className="mt-12 max-w-[58ch] space-y-5 text-base leading-[1.7] text-ink-soft">
        {t.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          {t.aboutLast.before}
          <a href={`mailto:${contact.email}`} className="hl text-ink">
            {t.aboutLast.link}
          </a>
          {t.aboutLast.after}
        </p>
      </div>

      <Timeline
        className="mt-16"
        groups={[
          { label: t.lists.work, entries: of("work") },
          { label: t.lists.school, entries: of("school") },
        ]}
        nowLabel={t.now}
      />

      <section className="mt-12">
        <h2 className="text-sm text-muted">{t.lists.reading}</h2>
        <ul className="mt-3 space-y-2.5">
          {t.reads.map((book) => (
            <li key={book.title} className="flex items-center gap-3 text-base">
              <img
                src={book.cover}
                alt=""
                width={14}
                height={21}
                loading="lazy"
                className="h-[21px] w-[14px] shrink-0 rounded-[2px] object-cover ring-1 ring-rule"
              />
              <a href={book.url} target="_blank" rel="noreferrer" className="hl min-w-0 text-ink">
                {book.title}
              </a>
              <span className="ml-auto shrink-0 pl-3 text-sm text-muted">{book.author}</span>
            </li>
          ))}
        </ul>
      </section>

      {posts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-sm text-muted">{t.lists.writing}</h2>
          <ul className="mt-3 space-y-2.5">
            {posts.map((post) => (
              <li key={post.url} className="flex items-baseline justify-between gap-6 text-base">
                <a href={post.url} target="_blank" rel="noreferrer" className="hl text-ink">
                  {post.title}
                </a>
                {post.date && (
                  <span className="shrink-0 text-sm text-muted tabular-nums">
                    {new Date(post.date).toLocaleDateString(lang === "pt" ? "pt-BR" : "en", {
                      month: "short",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <a
            href={contact.medium}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-muted transition-colors hover:text-ink"
          >
            {t.allWriting}
          </a>
        </section>
      )}
    </Page>
  );
}

const AXIS_START = monthIndex("2023-01");

function monthIndex(ym: string) {
  const [year, month] = ym.split("-").map(Number);
  return year * 12 + (month - 1);
}

/**
 * Work and school on one shared time axis, so the dates read at a glance. The
 * stint that is still going is drawn in marker yellow; past ones in grey.
 */
function Timeline({
  groups,
  nowLabel,
  className = "",
}: {
  groups: { label: string; entries: Entry[] }[];
  nowLabel: string;
  className?: string;
}) {
  const today = new Date();
  // One month past today, so an ongoing bar visibly runs up to the edge.
  const end = today.getFullYear() * 12 + today.getMonth() + 1;
  const pct = (month: number) => ((month - AXIS_START) / (end - AXIS_START)) * 100;

  const firstYear = Math.floor(AXIS_START / 12);
  const years = Array.from(
    { length: Math.floor(end / 12) - firstYear + 1 },
    (_, i) => firstYear + i,
  );

  // Bars stay collapsed until the timeline is on screen, then grow in order.
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  let order = 0;

  const row =
    "grid grid-cols-[7.5rem_1fr_4rem] items-center gap-x-3 sm:grid-cols-[10rem_1fr_5rem] sm:gap-x-4";

  return (
    <div ref={ref} className={className} data-shown={shown || undefined}>
      {groups.map((group, g) => (
        <section key={group.label} className={g > 0 ? "mt-8" : undefined}>
          <h2 className="text-sm text-muted">{group.label}</h2>
          <ul className="mt-3 space-y-2">
            {group.entries.map((entry) => {
              const span = spans[entry.slug];
              const ongoing = !span?.to;
              const current = ongoing && entry.kind === "work";
              const from = span ? pct(monthIndex(span.from)) : 0;
              const to = span ? pct(span.to ? monthIndex(span.to) + 1 : end) : 0;
              return (
                <li key={entry.slug} className={row}>
                  <span className="flex min-w-0 items-center gap-2.5">
                    <img
                      src={`/logos/${entry.slug}.png`}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 shrink-0 rounded-[5px] border border-rule bg-white object-cover"
                    />
                    <Link
                      to="/$slug"
                      params={{ slug: entry.slug }}
                      className="hl truncate text-base text-ink"
                    >
                      {entry.name}
                    </Link>
                  </span>
                  <span className="relative h-5" aria-hidden>
                    <span className="absolute inset-x-0 top-1/2 h-px bg-rule" />
                    {span && (
                      <span
                        className={`bar absolute top-[7px] h-1.5 min-w-1.5 rounded-full ${
                          current ? "bg-marker" : "bg-muted/45"
                        }`}
                        style={
                          {
                            left: `${from}%`,
                            width: `${to - from}%`,
                            "--d": `${0.12 * order++}s`,
                          } as CSSProperties
                        }
                      />
                    )}
                  </span>
                  <span className="text-right text-xs whitespace-nowrap text-muted tabular-nums sm:text-sm">
                    {current ? (
                      <span className="rounded-[3px] bg-marker px-1.5 py-0.5 text-xs font-medium text-[#191918]">
                        {nowLabel}
                      </span>
                    ) : (
                      entry.years.replace(/\s*–\s*/, "–")
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <div className={`${row} mt-2`} aria-hidden>
        <span />
        <span className="relative h-4 text-xs text-muted tabular-nums">
          {years.map((year) => (
            <span
              key={year}
              className={`absolute top-0 ${year === firstYear ? "" : "-translate-x-1/2"} ${
                (year - firstYear) % 2 ? "hidden sm:inline" : ""
              }`}
              style={{ left: `${pct(year * 12)}%` }}
            >
              {`’${String(year).slice(2)}`}
            </span>
          ))}
        </span>
        <span />
      </div>
    </div>
  );
}
