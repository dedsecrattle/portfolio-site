import { SectionHeading } from "@/components/sections/heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading n="04" title="Experience" />
      <ol className="relative border-l border-border">
        {experience.map((e) => (
          <li key={`${e.org}-${e.role}`} className="mb-10 ml-6 last:mb-0">
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-brand bg-background" />
            <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
            <h3 className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-semibold">
              <span>{e.role}</span>
              <span className="text-brand">
                @{" "}
                {e.url ? (
                  <a href={e.url} target="_blank" rel="noreferrer" className="hover:underline">
                    {e.org}
                  </a>
                ) : (
                  e.org
                )}
              </span>
              {e.badge && (
                <span className="rounded border border-brand/40 bg-brand/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-brand">
                  {e.badge}
                </span>
              )}
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-brand">
              {e.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
