"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINES = [
  "$ ./prabhat --init",
  "[ ok ] loading modules",
  "[ ok ] mounting experience",
  "[ ok ] fetching projects",
  "[ ok ] establishing connection",
  "> welcome_",
];

export function BootScreen() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= LINES.length) {
        clearInterval(id);
        setTimeout(() => setHide(true), 450);
        setTimeout(() => setDone(true), 1050);
      }
    }, 210);
    return () => clearInterval(id);
  }, []);

  if (done) return null;

  return (
    <div
      onClick={() => setDone(true)}
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        hide && "opacity-0",
      )}
    >
      <pre className="px-6 font-mono text-sm leading-relaxed text-brand sm:text-base">
        {LINES.slice(0, count).map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </pre>
    </div>
  );
}
