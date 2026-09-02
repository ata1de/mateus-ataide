import type { Project } from "@/lib/portfolio-content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-card border border-line p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-md font-semibold text-ink">{project.name}</h3>
        <span className="text-xs text-muted">{project.period}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-80">{project.desc}</p>
      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-xs font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
        >
          {project.link.label} ↗
        </a>
      )}
    </article>
  );
}
