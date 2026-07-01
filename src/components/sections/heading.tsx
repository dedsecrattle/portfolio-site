export function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="font-mono text-sm text-brand">{n}</span>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
