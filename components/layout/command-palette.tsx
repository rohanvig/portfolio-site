"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Code, Briefcase, Mail, FileText } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: Home,
  About: User,
  Skills: Code,
  Experience: Briefcase,
  Projects: Code,
  GitHub: Code,
  Contact: Mail,
  Resume: FileText,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navResults = NAV_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const projectResults = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    setOpen(false);
    setQuery("");
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-[20%] z-[90] w-full max-w-lg -translate-x-1/2 rounded-2xl border border-border bg-background shadow-2xl"
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections and projects..."
                className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <kbd className="hidden rounded-md border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground sm:inline">
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {navResults.length > 0 && (
                <div className="mb-2">
                  <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Navigation
                  </p>
                  {navResults.map((item) => {
                    const Icon = iconMap[item.label] || Home;
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleSelect(item.href)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted"
                      >
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
              {projectResults.length > 0 && (
                <div>
                  <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Projects
                  </p>
                  {projectResults.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleSelect("#projects")}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted"
                    >
                      <Code className="h-4 w-4 text-muted-foreground" />
                      {project.title}
                    </button>
                  ))}
                </div>
              )}
              {navResults.length === 0 && projectResults.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                  No results found
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface DockItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const dockItems: DockItem[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: Code },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 md:block">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="flex items-center gap-1 rounded-2xl border border-border/50 bg-background/70 px-3 py-2 shadow-xl backdrop-blur-xl"
      >
        {dockItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all hover:bg-primary/10"
            )}
            aria-label={item.label}
          >
            <item.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="absolute -top-10 hidden rounded-md bg-foreground px-2 py-1 text-xs text-background group-hover:block">
              {item.label}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
