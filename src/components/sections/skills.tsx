import { SectionHeading } from "@/components/sections/heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading n="02" title="Skills" />
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="mb-3 font-mono text-sm text-muted-foreground">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <Badge key={i} variant="secondary" className="text-sm font-normal">
                  {i}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
