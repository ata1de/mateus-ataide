/** A wrapped row of pills — used for both the techstack and the certifications. */
export function ChipGrid({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-pill border border-line bg-surface px-3 py-1.5 text-xs text-ink-80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
