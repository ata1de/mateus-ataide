import type { Lang } from "@/lib/portfolio-content";
import type { Post } from "@/lib/medium";

function formatDate(iso: string, lang: Lang) {
  if (!iso) return "";
  return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function PostCard({ post, lang }: { post: Post; lang: Lang }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="group flex gap-4 rounded-card border border-line p-5 transition-colors hover:bg-surface"
    >
      {post.image && (
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="hidden size-16 shrink-0 rounded-[10px] border border-line object-cover sm:block"
        />
      )}
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-md font-semibold text-ink">{post.title}</h3>
          <span className="text-xs text-muted">{formatDate(post.date, lang)}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-80">{post.excerpt}</p>
        <span className="mt-3 inline-block text-xs font-medium text-muted transition-colors group-hover:text-ink">
          read on medium ↗
        </span>
      </div>
    </a>
  );
}
