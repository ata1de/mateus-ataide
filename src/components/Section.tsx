import type { ReactNode } from "react";

/**
 * A titled block in the single-column page. The title sits above a hairline
 * that spans the column, matching the reference's quiet section separators.
 */
export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-12">
      <h2 className="text-2xs font-semibold tracking-[0.14em] text-muted uppercase">{title}</h2>
      <div className="mt-4 border-t border-line pt-7">{children}</div>
    </section>
  );
}
