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
    <section className="border-t border-border py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-semibold">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="mt-5">{children}</div>}
    </section>
  );
}

function Bullets({ items }: { items: readonly { title: string; period: string; bullets: readonly string[] }[] }) {
  return (
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li key={i} className="relative pl-6">
          <span
            className="absolute left-0 top-[0.45rem] h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--dot)" }}
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <span className="font-semibold">{item.title}</span>
            <span className="text-sm text-muted-foreground">{item.period}</span>
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
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:underline">
            {t.nav.about}
          </a>
          <a href="#projects" className="hover:underline">
            {t.nav.projects}
          </a>
        </nav>
        <div className="flex gap-1 text-xs text-muted-foreground">
          <button
            onClick={() => setLang("en")}
            className={lang === "en" ? "text-foreground font-semibold" : "hover:text-foreground"}
          >
            en
          </button>
          <span>/</span>
          <button
            onClick={() => setLang("pt")}
            className={lang === "pt" ? "text-foreground font-semibold" : "hover:text-foreground"}
          >
            pt
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
            className="h-16 w-16 rounded-full object-cover ring-1 ring-border sm:h-[72px] sm:w-[72px]"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{t.location}</p>
          </div>
        </div>

        <div
          className="mt-6 rounded-md border-l-4 px-4 py-3 text-sm"
          style={{
            backgroundColor: "var(--highlight-bg)",
            borderColor: "var(--highlight-border)",
            color: "var(--link)",
          }}
        >
          {t.role}
        </div>

        <div className="mt-6 space-y-4 text-[0.97rem] leading-relaxed">
          {t.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm">
          <span className="text-muted-foreground">{t.reach}</span>
          <a
            href="mailto:mateusataide05@gmail.com"
            className="underline underline-offset-2"
            style={{ color: "var(--link)" }}
          >
            mateusataide05@gmail.com
          </a>
          <a
            href="https://github.com/ata1de"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            github ↗
          </a>
          <a
            href="https://linkedin.com/in/mateus-ataide"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            linkedin ↗
          </a>
        </div>
      </section>

      <div className="mt-10">
        <Section title={t.sections.metrics} defaultOpen>
          <ul className="space-y-1.5 text-[0.95rem]">
            {t.metrics.map((m, i) => (
              <li key={i} className="relative pl-6">
                <span
                  className="absolute left-0 top-[0.45rem] h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--dot)" }}
                />
                {m}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.sections.experience}>
          <Bullets items={t.experience} />
        </Section>

        <section id="projects" className="border-t border-border py-5">
          <div className="font-semibold">{t.sections.projects}</div>
          <ul className="mt-5 space-y-6">
            {t.projects.map((p, i) => (
              <li key={i} className="relative pl-6">
                <span
                  className="absolute left-0 top-[0.45rem] h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--dot)" }}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
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
        </section>

        <Section title={t.sections.education}>
          <Bullets items={t.education} />
        </Section>

        <Section title={t.sections.skills}>
          <ul className="space-y-2 text-[0.95rem]">
            {t.skills.map((s, i) => (
              <li key={i}>
                <span className="font-semibold">{s.label}:</span>{" "}
                <span className="text-foreground/85">{s.items}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <footer className="mt-16 border-t border-border pt-5 text-xs text-muted-foreground">
        © {new Date().getFullYear()} mateus ataide
      </footer>
    </main>
  );
}
