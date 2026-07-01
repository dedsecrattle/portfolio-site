import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiApachecassandra,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFlutter,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { SectionHeading } from "@/components/sections/heading";
import { skills } from "@/lib/data";

const icons: Record<string, IconType> = {
  Rust: SiRust,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: SiOpenjdk,
  Go: SiGo,
  "C/C++": SiCplusplus,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "React Native": SiReact,
  Flutter: SiFlutter,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Cassandra: SiApachecassandra,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Terraform: SiTerraform,
  "GitHub Actions": SiGithubactions,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading n="02" title="Skills" />
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="mb-3 font-mono text-sm text-muted-foreground">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => {
                const Icon = icons[i];
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/40 px-2.5 py-1 text-sm text-foreground/90 transition-colors hover:border-brand/50 hover:text-foreground"
                  >
                    {Icon && <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />}
                    {i}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
