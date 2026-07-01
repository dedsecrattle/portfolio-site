import { SectionHeading } from "@/components/sections/heading";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading n="01" title="About" />
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{profile.bio}</p>
    </section>
  );
}
