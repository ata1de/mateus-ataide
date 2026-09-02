import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { AboutBody } from "@/components/AboutBody";
import { ChipGrid } from "@/components/ChipGrid";
import { ContactFooter } from "@/components/ContactFooter";
import { Hero } from "@/components/Hero";
import { JourneyEntry } from "@/components/JourneyEntry";
import { ProjectCard } from "@/components/ProjectCard";
import { PostCard } from "@/components/PostCard";
import { Section } from "@/components/Section";
import { getPosts } from "@/lib/medium";
import { content, type Lang } from "@/lib/portfolio-content";

const SITE_URL = "https://mateusataide.com/";

const DESCRIPTION =
  "software engineer at stone, in brasil. high-criticality payment systems processing R$60M+/month — node.js/typescript, golang, python, postgresql, aws, and applied ai.";

export const Route = createFileRoute("/")({
  component: Portfolio,
  loader: () => getPosts(),
  head: () => ({
    meta: [
      { title: "Mateus Ataide — software engineer" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Mateus Ataide — software engineer" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const posts = Route.useLoaderData();
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
          <div className="mt-5">
            <AboutBody blocks={t.about.body} />
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

        {posts.length > 0 && (
          <Section id="writing" title={t.sections.writing}>
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.url} post={post} lang={lang} />
              ))}
            </div>
          </Section>
        )}

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
