"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/data/personal";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32" aria-label="Resume section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Resume"
          title="Download My Resume"
          description="Get a detailed overview of my experience and skills"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-8 sm:p-12">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="mt-4 max-w-md text-sm text-muted-foreground">
                    A comprehensive overview of my professional experience,
                    technical skills, education, and notable projects.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                      <a href={PERSONAL_INFO.resumeUrl} download>
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                      <a
                        href={PERSONAL_INFO.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="h-4 w-4" />
                        Preview
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border-t border-border p-6">
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  {STATS.slice(0, 3).map((stat) => (
                    <div key={stat.label}>
                      <p className="font-semibold text-primary">
                        {stat.prefix ?? ""}
                        {stat.value}
                        {stat.suffix ?? ""}
                      </p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
