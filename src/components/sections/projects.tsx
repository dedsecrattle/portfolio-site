import { ArrowUpRight, Star } from "lucide-react";
import { Github } from "@/components/brand-icons";
import { SectionHeading } from "@/components/sections/heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading n="03" title="Projects" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => {
          const href = p.live ?? p.repo;
          return (
            <Card key={p.name} className="group flex flex-col transition-colors hover:border-brand/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between font-mono text-base">
                  <span className="flex items-center gap-2">
                    {p.name}
                    {p.stars ? (
                      <span className="flex items-center gap-0.5 font-sans text-xs font-normal text-muted-foreground">
                        <Star className="h-3 w-3 fill-current" /> {p.stars}
                      </span>
                    ) : null}
                  </span>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.name}`}
                      className="text-muted-foreground transition-colors group-hover:text-brand"
                    >
                      {p.live ? <ArrowUpRight className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                    </a>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-brand">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
