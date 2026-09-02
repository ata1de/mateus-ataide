import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ChipGrid } from "@/components/ChipGrid";
import { ContactFooter } from "@/components/ContactFooter";
import { Hero } from "@/components/Hero";
import { JourneyEntry } from "@/components/JourneyEntry";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { content, type Lang } from "@/lib/portfolio-content";

const SITE_URL = "https://mateusataide.com/";

const DESCRIPTION =
  "software engineer & ai product builder in recife, brasil. ai-native agentic pipelines at extreme group (volund), fintech systems processing R$60M+/month, golang, node.js, python.";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Mateus Ataide — software engineer & ai product builder" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Mateus Ataide — software engineer & ai product builder" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="mx-auto w-full max-w-[750px] px-5 pt-10 pb-20 sm:pt-16">
      <Hero
        name={t.name}
        location={t.location}
        tagline={t.tagline}
        lang={lang}
        onLangChange={setLang}
      />

      {/* Keyed on the language so switching re-runs the entrance animation. */}
      <div key={lang} className="animate-fade-in mt-20 space-y-20 sm:mt-24 sm:space-y-24">
        <Section id="about" title={t.sections.about}>
          <p className="text-xl leading-snug font-semibold tracking-[-0.02em] text-ink">
            {t.about.headline}
          </p>
          <div className="mt-5 space-y-4">
            {t.about.body.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-ink-80">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <Section id="experience" title={t.sections.experience}>
          <div className="space-y-12">
            {t.experience.map((job) => (
              <JourneyEntry
                key={`${job.company}-${job.role}`}
                slug={job.slug}
                subject={job.company}
                role={job.role}
                period={job.period}
                bullets={job.bullets}
                stats={job.stats}
              />
            ))}
          </div>
        </Section>

        <Section id="projects" title={t.sections.projects}>
          <div className="space-y-4">
            {t.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section id="education" title={t.sections.education}>
          <div className="space-y-10">
            {t.education.map((entry) => (
              <JourneyEntry
                key={`${entry.title}-${entry.role}`}
                slug={entry.slug}
                subject={entry.title}
                role={entry.role}
                period={entry.period}
                bullets={entry.bullets}
              />
            ))}
          </div>
        </Section>

        <Section id="skills" title={t.sections.skills}>
          <div className="space-y-6">
            {t.skills.map((group) => (
              <div key={group.label}>
                <h3 className="mb-2.5 text-xs font-medium text-muted">{group.label}</h3>
                <ChipGrid items={group.items} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title={t.sections.certifications}>
          <ChipGrid items={t.certifications} />
        </Section>

        <Section title={t.sections.contact}>
          <ContactFooter
            prompt={t.contactPrompt}
            location={t.location}
            status={t.status}
            name={t.name}
          />
        </Section>
      </div>
    </main>
  );
}
