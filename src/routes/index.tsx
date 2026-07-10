import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { content, type Lang } from "@/lib/portfolio-content";
import avatarImg from "@/assets/avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mateus ataide — software engineer" },
      {
        name: "description",
        content:
          "backend engineer in recife, brasil. fintech systems processing R$60M+/month, golang, node.js, python, applied ai (llms, rag, agents).",
      },
      { property: "og:title", content: "mateus ataide — software engineer" },
      {
        property: "og:description",
        content: "backend & ai engineer building fintech systems at amigo tech.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

function isCurrent(period: string) {
  const p = period.toLowerCase();
  return p.includes("present") || p.includes("atual");
}

function Section({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="border-t border-dashed border-border py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between text-left"
      >
        <span className="font-mono text-sm font-semibold tracking-wide uppercase">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="mt-5 animate-fade-in">{children}</div>}
    </section>
  );
}

function ExperienceTimeline({
  items,
}: {
  items: readonly { title: string; period: string; bullets: readonly string[] }[];
}) {
  return (
    <ul className="relative space-y-8">
      <div
        className="absolute top-2 bottom-2 left-[7px] w-px"
        style={{ backgroundColor: "var(--border)" }}
      />
      {items.map((item, i) => {
        const current = isCurrent(item.period);
        return (
          <li key={i} className="relative pl-7">
            <span
              className={`absolute top-[5px] left-0 h-[15px] w-[15px] rounded-full border-2 ${current ? "timeline-head" : ""}`}
              style={{
                backgroundColor: current ? "var(--link)" : "var(--background)",
                borderColor: current ? "var(--link)" : "var(--dot)",
              }}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="font-semibold">{item.title}</span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                {item.period}
                {current && (
                  <span
                    className="rounded border px-1 py-0.5 text-[10px] tracking-wide uppercase"
                    style={{ borderColor: "var(--link)", color: "var(--link)" }}
                  >
                    HEAD
                  </span>
                )}
              </span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[0.95rem] text-foreground/85">
              {item.bullets.map((b, j) => (
                <li key={j}>— {b}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function PlainList({
  items,
}: {
  items: readonly { title: string; period: string; bullets: readonly string[] }[];
}) {
  return (
    <ul className="divide-y divide-border">
      {items.map((item, i) => (
        <li key={i} className={i === 0 ? "pb-6" : "py-6"}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <span className="font-semibold">{item.title}</span>
            <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
          </div>
          <ul className="mt-2 space-y-1.5 text-[0.95rem] text-foreground/85">
            {item.bullets.map((b, j) => (
              <li key={j}>— {b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="mx-auto max-w-2xl px-6 py-10 sm:py-14">
      <header className="mb-12 flex items-center justify-between">
        <nav className="flex gap-5 font-mono text-sm">
          <a href="#about" className="hover:text-link">
            /{t.nav.about}
          </a>
          <a href="#projects" className="hover:text-link">
            /{t.nav.projects}
          </a>
          <a href="#certifications" className="hover:text-link">
            /{t.nav.certifications}
          </a>
        </nav>
        <div className="flex gap-1.5 font-mono text-xs text-muted-foreground">
          <button
            onClick={() => setLang("en")}
            className={`cursor-pointer ${lang === "en" ? "font-semibold text-foreground" : "hover:text-foreground"}`}
          >
            [en]
          </button>
          <button
            onClick={() => setLang("pt")}
            className={`cursor-pointer ${lang === "pt" ? "font-semibold text-foreground" : "hover:text-foreground"}`}
          >
            [pt]
          </button>
        </div>
      </header>

      <section id="about">
        <div className="flex items-center gap-5">
          <img
            src={avatarImg}
            alt="mateus ataide"
            width={72}
            height={72}
            className="h-16 w-16 rounded-xl object-cover ring-1 ring-panel-border sm:h-[72px] sm:w-[72px]"
          />
          <div>
            <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">{t.name}</h1>
            <p className="mt-1 font-mono text-sm text-muted-foreground">{t.location}</p>
          </div>
        </div>

        <div
          className="mt-6 flex items-center gap-2.5 rounded-md border-l-2 px-4 py-3 font-mono text-sm"
          style={{
            backgroundColor: "var(--highlight-bg)",
            borderColor: "var(--highlight-border)",
            color: "var(--link)",
          }}
        >
          <span
            className="timeline-head inline-block h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: "var(--link)" }}
          />
          {t.role}
        </div>

        <div className="mt-6 space-y-4 text-[0.97rem] leading-relaxed">
          {t.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 font-mono text-sm">
          <span className="text-muted-foreground">{t.reach}</span>
          <a
            href="mailto:mateusataide.contact@gmail.com"
            className="text-link underline underline-offset-2"
          >
            mateusataide.contact@gmail.com
          </a>
          <a
            href="https://github.com/ata1de"
            target="_blank"
            rel="noreferrer"
            className="hover:text-link"
          >
            github ↗
          </a>
          <a
            href="https://linkedin.com/in/mateus-ataide"
            target="_blank"
            rel="noreferrer"
            className="hover:text-link"
          >
            linkedin ↗
          </a>
        </div>
      </section>

      <div className="mt-10">
        <section className="border-t border-dashed border-border py-5">
          <div className="rounded-lg border border-panel-border bg-panel p-4">
            <div className="mb-3 font-mono text-xs tracking-wide text-muted-foreground uppercase">
              // {t.sections.metrics}
            </div>
            <ul className="divide-y divide-panel-border">
              {t.metrics.map((m, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                  <span className="text-foreground/80">{m.label}</span>
                  <span className="shrink-0 font-mono font-semibold text-link tabular-nums">
                    {m.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Section title={t.sections.experience} defaultOpen>
          <ExperienceTimeline items={t.experience} />
        </Section>

        <div id="projects">
          <Section title={t.sections.projects}>
            <ul className="divide-y divide-border">
              {t.projects.map((p, i) => (
                <li key={i} className={i === 0 ? "pb-6" : "py-6"}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="font-semibold">{p.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{p.period}</span>
                  </div>
                  <p className="mt-1 text-[0.95rem] text-foreground/85">{p.desc}</p>
                  {p.media?.type === "image" && (
                    <img
                      src={p.media.src}
                      alt={p.media.alt ?? p.name}
                      loading="lazy"
                      className="mt-3 w-full rounded-md border border-border"
                    />
                  )}
                  {p.media?.type === "video" && (
                    <video
                      src={p.media.src}
                      poster={p.media.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="mt-3 w-full rounded-md border border-border"
                    />
                  )}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section title={t.sections.education}>
          <PlainList items={t.education} />
        </Section>

        <Section title={t.sections.skills}>
          <ul className="space-y-3 text-[0.95rem]">
            {t.skills.map((s, i) => (
              <li key={i}>
                <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </span>{" "}
                <span className="text-foreground/85">{s.items}</span>
              </li>
            ))}
          </ul>
        </Section>

        <div id="certifications">
          <Section title={t.sections.certifications}>
            <div className="flex flex-wrap gap-2">
              {t.certifications.map((c, i) => (
                <span
                  key={i}
                  className="rounded-md border border-panel-border px-2.5 py-1 font-mono text-xs text-foreground/85"
                >
                  {c}
                </span>
              ))}
            </div>
          </Section>
        </div>
      </div>

      <footer className="mt-16 border-t border-border pt-5 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} mateus ataide
      </footer>
    </main>
  );
}
