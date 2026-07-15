"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";
import { CERTIFICATIONS } from "@/data/certifications";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-muted/30" aria-label="Certifications section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Certifications"
          title="Credentials & Achievements"
          description="Professional certifications and credentials"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="flex gap-5 p-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <div className="relative h-10 w-10">
                      <Image
                        src={cert.logo}
                        alt={cert.organization}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold leading-tight">{cert.title}</h3>
                      <Award className="h-5 w-5 shrink-0 text-primary" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cert.organization}
                    </p>
                    <Badge variant="secondary" className="mt-3">
                      {cert.date}
                    </Badge>
                    <p className="mt-3 text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                    {cert.credentialUrl !== "#" && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        Verify Credential
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
