import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { CommandPalette, FloatingDock } from "@/components/layout/command-palette";
import { MouseFollower } from "@/components/shared/mouse-follower";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { GitHubSection } from "@/components/sections/github";
import { Certifications } from "@/components/sections/certifications";
import { Resume } from "@/components/sections/resume";
import { Terminal } from "@/components/sections/terminal";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <Certifications />
        <Resume />
        <Terminal />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CommandPalette />
      <FloatingDock />
      <MouseFollower />
    </>
  );
}
