"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { PERSONAL_INFO, HERO_ROLES, HERO_HIGHLIGHTS } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/shared/typing-animation";
import { GradientBackground } from "@/components/shared/gradient-background";
import { GridBackground } from "@/components/shared/grid-background";
import { ParticleBackground } from "@/components/shared/particle-background";
import { SocialIcon } from "@/components/shared/social-icon";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      <GradientBackground />
      <GridBackground />
      <ParticleBackground />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <div className="mt-4 text-xl text-muted-foreground sm:text-2xl lg:text-3xl">
              <TypingAnimation words={HERO_ROLES} className="font-medium text-foreground" />
            </div>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {PERSONAL_INFO.tagline}. Crafting elegant, performant digital
              experiences with modern technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={PERSONAL_INFO.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              {PERSONAL_INFO.socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg"
                  aria-label={link.name}
                >
                  <SocialIcon icon={link.icon} className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5">
                  <Image
                    src={PERSONAL_INFO.avatarUrl}
                    alt={`${PERSONAL_INFO.name} - Software Engineer`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 rounded-2xl border border-border/50 bg-background/80 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-2xl font-bold text-primary">{HERO_HIGHLIGHTS.experience}</p>
                <p className="text-xs text-muted-foreground">{HERO_HIGHLIGHTS.experienceLabel}</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-8 rounded-2xl border border-border/50 bg-background/80 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-2xl font-bold text-primary">{HERO_HIGHLIGHTS.projects}</p>
                <p className="text-xs text-muted-foreground">{HERO_HIGHLIGHTS.projectsLabel}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
