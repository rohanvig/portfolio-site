"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Terminal,
  Wrench,
  Code,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { SectionHeader } from "@/components/shared/section-header";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  terminal: Terminal,
  wrench: Wrench,
  code: Code,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].id);

  const currentCategory = SKILL_CATEGORIES.find((c) => c.id === activeCategory)!;
  const Icon = categoryIcons[currentCategory.icon] || Code;

  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/30" aria-label="Skills section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Skills"
          title="Technical Expertise"
          description="Technologies and tools I work with daily"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {SKILL_CATEGORIES.map((category) => {
            const CatIcon = categoryIcons[category.icon] || Code;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                <CatIcon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{currentCategory.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                {currentCategory.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.slice(0, 4).map((category, i) => {
            const CatIcon = categoryIcons[category.icon] || Code;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="group h-full cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <CatIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.skills.length} technologies
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
