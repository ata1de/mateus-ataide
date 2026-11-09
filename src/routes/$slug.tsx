import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { Page } from "@/components/Chrome";
import { copy } from "@/lib/content";
import { useCopy, usePrefs } from "@/lib/prefs";

const SITE_URL = "https://mateusataide.com/";

export const Route = createFileRoute("/$slug")({
  component: EntryPage,
  loader: ({ params }) => {
    const entry = copy.en.entries.find((item) => item.slug === params.slug);
    if (!entry) throw notFound();
    return { name: entry.name, blurb: entry.blurb };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return {};
    const title = `${loaderData.name} — Mateus Ataide`;
    const url = `${SITE_URL}${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.blurb },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
});

function hostOf(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

function EntryPage() {
  const { slug } = Route.useParams();
  const t = useCopy();
  const { lang } = usePrefs();

  const index = t.entries.findIndex((item) => item.slug === slug);
  const entry = t.entries[index];
  const next = t.entries[(index + 1) % t.entries.length];

  return (
    <Page tight>
      <Link to="/" className="text-sm text-muted transition-colors hover:text-ink">
        ← {t.back}
      </Link>

      {/* Keyed so a language switch or a "next" hop re-runs the entrance. */}
      <article key={`${slug}-${t.back}`} className="rise mt-8">
        <h1 className="text-[2.5rem] leading-[1.05] font-medium tracking-[-0.035em] text-ink">
          {entry.name}
        </h1>
        <p className="mt-3 max-w-[52ch] text-base text-muted">
          {entry.blurb} <span className="tabular-nums whitespace-nowrap">{entry.years}</span>
        </p>
        {entry.site && (
          <a
            href={entry.site}
            target="_blank"
            rel="noreferrer"
            className="hl mt-2 inline-block text-sm text-ink"
          >
            {t.visit} {hostOf(entry.site)}
          </a>
        )}

        {entry.news && entry.news.length > 0 && (
          <section className="mt-8">
            <h2 className="text-sm text-muted">{t.news}</h2>
            <ul className="mt-3 space-y-3">
              {entry.news.map((item) => (
                <li key={item.url} className="max-w-[60ch]">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hl text-base leading-snug text-ink"
                  >
                    {item.title}
                  </a>
                  <p className="mt-0.5 text-sm text-muted">
                    {item.source},{" "}
                    {new Date(item.date).toLocaleDateString(lang === "pt" ? "pt-BR" : "en", {
                      month: "short",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {entry.image && (
          <figure
            className="mt-10 aspect-[16/10] overflow-hidden rounded-[14px] border border-rule"
            style={{ backgroundColor: entry.image.backdrop }}
          >
            <img
              src={entry.image.src}
              alt={entry.image.alt}
              width={1200}
              height={750}
              decoding="async"
              className={
                entry.image.fit === "cover"
                  ? "size-full object-cover"
                  : "size-full object-contain p-[7%]"
              }
            />
          </figure>
        )}

        <div className="mt-10 max-w-[58ch] space-y-5 text-[1.0625rem] leading-[1.7] text-ink">
          {entry.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {entry.roles
          ?.filter((role) => role.bullets.length > 0)
          .map((role) => (
            <section key={role.title} className="mt-14">
              <h2 className="text-base font-medium text-ink">{role.title}</h2>
              <p className="mt-0.5 text-sm text-muted">{role.period}</p>
              <ul className="mt-5 max-w-[60ch] space-y-3.5">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-5 text-base leading-[1.65] text-ink-soft">
                    <span
                      aria-hidden
                      className="absolute top-[0.62em] left-0 h-[7px] w-[10px] -skew-x-12 rounded-[1px] bg-marker dark:opacity-70"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </section>
          ))}

        {entry.figures && entry.figures.length > 0 && (
          <section className="mt-14">
            <h2 className="text-sm text-muted">{t.figures}</h2>
            <dl className="mt-5 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              {entry.figures.map((figure) => (
                <div key={figure.label} className="border-t border-rule pt-3">
                  <dt className="text-lg font-medium tracking-[-0.02em] text-ink tabular-nums">
                    {figure.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-muted">{figure.label}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </article>

      <nav className="mt-20 text-base">
        <span className="text-muted">{t.next}: </span>
        <Link to="/$slug" params={{ slug: next.slug }} className="hl text-ink">
          {next.name}
        </Link>
      </nav>
    </Page>
  );
}
