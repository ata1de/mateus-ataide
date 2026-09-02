/** Availability indicator in the footer — a live dot plus a short label. */
export function StatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-3 py-1.5 text-xs text-ink-80">
      <span className="size-1.5 rounded-full bg-ok" />
      {label}
    </span>
  );
}
