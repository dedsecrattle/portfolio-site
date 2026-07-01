import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="grid grid-cols-2 gap-6 rounded-xl border border-border bg-muted/20 p-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-mono text-3xl font-bold text-brand">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
