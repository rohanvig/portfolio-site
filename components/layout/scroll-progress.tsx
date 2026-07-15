"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-primary via-accent to-secondary transition-[width] duration-150 ease-out"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
