"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FOOTER_LINKS } from "@/constants/navigation";
import { PERSONAL_INFO } from "@/data/personal";
import { SITE_CONFIG } from "@/constants/site";
import { SocialIcon } from "@/components/shared/social-icon";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">
              {PERSONAL_INFO.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 flex gap-3">
              {PERSONAL_INFO.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-md"
                  aria-label={link.name}
                >
                  <SocialIcon icon={link.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>{PERSONAL_INFO.phone}</li>
              <li>{PERSONAL_INFO.location}</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
