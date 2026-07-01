import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { SectionHeading } from "@/components/sections/heading";
import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 pb-28">
      <SectionHeading n="06" title="Get in touch" />
      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
        Open to interesting problems, collaborations, and a good conversation over coffee. The fastest
        way to reach me is email.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${socials.email}`} className={buttonVariants({ size: "lg" })}>
          <Mail className="h-4 w-4" /> {socials.email}
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
