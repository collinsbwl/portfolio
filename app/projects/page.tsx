"use client";

import { FadeIn } from "@/components/fade-in";
import { NavBar } from "@/components/nav";
import { ProjectsSection } from "@/components/projects";
import { useTheme } from "@/components/use-theme";

export default function ProjectsPage() {
  const [dark, setDark] = useTheme();

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        dark ? "bg-zinc-900 text-zinc-200" : "bg-[#f3f2ed] text-zinc-800"
      }`}
    >
      <div className="mx-auto max-w-2xl px-6 py-8">
        <NavBar dark={dark} setDark={setDark} />
        <FadeIn delay={0}>
          <h1
            className={`mb-3 text-md font-mono ${
              dark ? "text-zinc-200" : "text-zinc-800"
            }`}
          >
            /projects
          </h1>
          <ProjectsSection dark={dark} />
        </FadeIn>
      </div>
    </div>
  );
}
