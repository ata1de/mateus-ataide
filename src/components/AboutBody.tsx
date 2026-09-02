import type { AboutBlock } from "@/lib/portfolio-content";

/**
 * The about copy: paragraphs, each optionally introducing its own list. The
 * dense sentences that used to pack four achievements behind commas are the
 * reason the list exists — they are far easier to scan broken apart.
 */
export function AboutBody({ blocks }: { blocks: readonly AboutBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block) => (
        <div key={block.text}>
          <p className="text-sm leading-relaxed text-ink-80">{block.text}</p>
          {block.items && (
            <ul className="mt-3 space-y-2">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-80">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
