import { Award as AwardIcon, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/sections/heading";
import { Card, CardContent } from "@/components/ui/card";
import { awards } from "@/lib/data";

export function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading n="06" title="Awards & Achievements" />
      <div className="grid gap-4 sm:grid-cols-2">
        {awards.map((a) => (
          <Card key={a.title} className="group hover:border-brand/50 transition-colors">
            <CardContent className="flex gap-3">
              <AwardIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-sm font-semibold">
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 hover:text-brand"
                      >
                        {a.title}
                        <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-brand" />
                      </a>
                    ) : (
                      a.title
                    )}
                  </h3>
                  {a.year && <span className="font-mono text-xs text-muted-foreground">{a.year}</span>}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
