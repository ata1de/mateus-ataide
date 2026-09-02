import type { Stat } from "@/lib/portfolio-content";

/** Headline numbers pulled out of a journey entry. */
export function StatGrid({ stats }: { stats: readonly Stat[] }) {
  return (
    <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-5 rounded-card border border-line bg-surface px-5 py-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-xl font-bold tracking-[-0.02em] text-ink">{stat.value}</dt>
          <dd className="mt-0.5 text-xs text-muted">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
