import { SectionHeading } from "@/components/sections/heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading n="05" title="Education" />
      <ol className="relative border-l border-border">
        {education.map((ed) => (
          <li key={ed.school} className="mb-10 ml-6 last:mb-0">
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-brand bg-background" />
            <p className="font-mono text-xs text-muted-foreground">{ed.period}</p>
            <h3 className="mt-1 font-semibold">{ed.school}</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-brand">
              {ed.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
