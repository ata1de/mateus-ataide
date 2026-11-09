import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Page } from "@/components/Chrome";
import { contact, type Entry, type Kind } from "@/lib/content";
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

      <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10">
        <EntryList label={t.lists.work} entries={of("work")} />
        <EntryList label={t.lists.school} entries={of("school")} />
      </div>

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

function EntryList({ label, entries }: { label: string; entries: Entry[] }) {
  return (
    <section>
      <h2 className="text-sm text-muted">{label}</h2>
      <ul className="mt-3 space-y-2">
        {entries.map((entry) => (
          <li key={entry.slug} className="flex items-center gap-2.5">
            <img
              src={`/logos/${entry.slug}.png`}
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0 rounded-[5px] border border-rule bg-white object-cover"
            />
            <Link to="/$slug" params={{ slug: entry.slug }} className="hl text-base text-ink">
              {entry.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
