import { cn } from "@/lib/utils";

// RGB-split glitch on hover. Effect lives in globals.css (.glitch).
export function GlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <span data-text={text} className={cn("glitch cursor-default", className)}>
      {text}
    </span>
  );
}
