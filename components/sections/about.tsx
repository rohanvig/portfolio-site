"use client";

import { motion } from "framer-motion";
import {
  ABOUT_SUMMARY,
  ABOUT_PASSION,
  ABOUT_GOALS,
  EDUCATION,
  CAREER_TIMELINE,
  STATS,
  ACHIEVEMENTS,
} from "@/data/personal";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Heart, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32" aria-label="About section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="Building Scalable SaaS Products"
          description="Full-Stack Developer building scalable SaaS applications"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {ABOUT_SUMMARY}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {ABOUT_PASSION}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {ABOUT_GOALS}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card/50 p-4 text-center backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-primary sm:text-3xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Achievements</h3>
                <ul className="space-y-3">
                  {ACHIEVEMENTS.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  {EDUCATION.map((edu) => (
                    <div key={edu.id} className="border-l-2 border-primary/30 pl-4">
                      <p className="font-medium">{edu.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                      <p className="mt-1 text-xs text-primary">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Career Journey</h3>
                </div>
                <div className="relative space-y-6 pl-6">
                  <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />
                  {CAREER_TIMELINE.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="relative"
                    >
                      <div className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                      <span className="text-xs font-medium text-primary">
                        {item.year}
                      </span>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.subtitle}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center gap-3 p-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Passion</p>
                    <p className="text-xs text-muted-foreground">
                      SaaS & full-stack apps
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center gap-3 p-4">
                  <Target className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Goal</p>
                    <p className="text-xs text-muted-foreground">
                      Agentic AI & LLM apps
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
