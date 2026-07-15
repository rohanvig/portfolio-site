"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/personal";
import { SectionHeader } from "@/components/shared/section-header";

const terminalLines = [
  { type: "command", text: "$ whoami" },
  { type: "output", text: PERSONAL_INFO.name },
  { type: "command", text: "$ cat role.txt" },
  { type: "output", text: PERSONAL_INFO.title },
  { type: "command", text: "$ ls skills/" },
  {
    type: "output",
    text: "React  Next.js  TypeScript  Node.js  AWS  PostgreSQL",
  },
  { type: "command", text: "$ echo $STATUS" },
  { type: "output", text: "🟢 Available for new opportunities" },
  { type: "command", text: "$ contact --email" },
  { type: "output", text: PERSONAL_INFO.email },
];

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, visibleLines % 2 === 0 ? 400 : 200);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section className="py-24 sm:py-32 bg-muted/30" aria-label="Terminal section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Terminal"
          title="Developer Intro"
          description="A quick introduction in terminal style"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border/50 bg-[#0d1117] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-white/50">terminal — bash</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={
                  line.type === "command"
                    ? "text-green-400"
                    : "text-white/80 pl-0 mb-2"
                }
              >
                {line.text}
              </motion.div>
            ))}
            {visibleLines < terminalLines.length && (
              <span className="inline-block h-4 w-2 animate-pulse bg-green-400" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
