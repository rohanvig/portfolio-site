"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import { EXPERIENCE, EXPERIENCE_FILTERS } from "@/data/experience";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Experience() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? EXPERIENCE
      : EXPERIENCE.filter((exp) => exp.type === filter);

  return (
    <section id="experience" className="py-24 sm:py-32" aria-label="Experience section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="My career path and key accomplishments"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {EXPERIENCE_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition-all",
                filter === f.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "border border-border text-muted-foreground hover:border-primary/50"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

          {filtered.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative mb-12 md:mb-16",
                i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              )}
            >
              <div
                className={cn(
                  "absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background md:left-1/2",
                  i % 2 === 0 ? "md:left-auto md:right-0 md:translate-x-1/2" : ""
                )}
              />

              <div className="ml-12 md:ml-0">
                <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="mt-1 flex items-center gap-2 text-primary">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </div>

                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
