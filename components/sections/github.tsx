"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import {
  GITHUB_USERNAME,
  GITHUB_STATS,
  PINNED_REPOS,
  CONTRIBUTION_DATA,
} from "@/data/github";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contributionColors = [
  "bg-muted",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary",
];

export function GitHubSection() {
  const hasStats = GITHUB_STATS.length > 0;
  const hasRepos = PINNED_REPOS.length > 0;
  const hasContributions = CONTRIBUTION_DATA.length > 0;

  return (
    <section id="github" className="py-24 sm:py-32" aria-label="GitHub section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="GitHub"
          title="GitHub Profile"
          description={`@${GITHUB_USERNAME} on GitHub`}
        />

        {hasStats && (
          <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {GITHUB_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}

        {hasContributions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-lg font-semibold">Contribution Activity</h3>
            <div className="overflow-x-auto">
              <div className="flex gap-[3px] min-w-max">
                {CONTRIBUTION_DATA.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((level, di) => (
                      <div
                        key={di}
                        className={`h-3 w-3 rounded-sm ${contributionColors[level]}`}
                        title={`${level} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {hasRepos && (
          <div className="grid gap-4 md:grid-cols-2">
            {PINNED_REPOS.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-primary group-hover:underline">
                    {repo.name}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {repo.description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <Badge variant="outline">{repo.language}</Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GitFork className="h-3.5 w-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className={`text-center ${hasRepos ? "mt-8" : ""}`}>
          <Button asChild variant="secondary" size="lg">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
