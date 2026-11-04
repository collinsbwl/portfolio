import { MoveUpRight } from "lucide-react";

// Add an `href` to a project to make it clickable (opens in a new tab).
const projects: { name: string; desc: string; tech: string; href?: string }[] =
  [
    {
      name: "Ignition",
      href: "https://joinignition.ca",
      desc: "Marketplace for startups and students",
      tech: " React, TypeScript, PostgreSQL, Sentry, Gemini",
    },
    {
      name: "Azure ProjectOS",
      href: "https://github.com/collinsbwl/Azure-ProjectOS",
      desc: "2nd Place [at] the Microsoft Internal Hackathon",
      tech: "Azure OpenAI, PydanticAI, Python, FastAPI, PostgreSQL",
    },
    {
      name: "Fleetwatch",
      href: "https://github.com/collinsbwl/Fleet-Pulse",
      desc: "A real-time fleet telemetry pipeline for live GPS, speed, and fuel data",
      tech: "Go, Kafka, Mapbox, Prometheus, Grafana, Docker, PostgreSQL",
    },
    {
      name: "Ivey Draft My Schedule",
      href: "https://ivey-draft-my-schedule.vercel.app",
      desc: "A timetable planner for Ivey HBA2 students",
      tech: "Next.js, React, TypeScript, Vercel",
    },
    {
      name: "Song Roulette",
      desc: "A multiplayer iOS music trivia game",
      tech: "Swift, SwiftUI, MusicKit, AVKit, AVFoundation, Bonjour, XCode",
    },
  ];

// const projects: { name: string; desc: string; tech: string }[] = [];

export function ProjectsSection({ dark }: { dark: boolean }) {
  if (projects.length === 0) {
    return (
      <p className={`text-sm ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
        section in progress.
      </p>
    );
  }
  return (
    // While any project is hovered the others fade, and the hovered one brightens.
    <div className="group/list space-y-3">
      {projects.map((project) => {
        const Row = project.href ? "a" : "div";
        const link = project.href
          ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <Row
            key={project.name}
            {...link}
            className={`group block transition duration-300 group-hover/list:opacity-50 hover:opacity-100! ${
              dark
                ? "text-zinc-200 hover:text-white"
                : "text-zinc-800 hover:text-black"
            }`}
          >
            <div className="text-sm flex items-baseline gap-2">
              <span
                className={`shrink-0 ${
                  project.href ? "group-hover:underline underline-offset-4" : ""
                }`}
              >
                {project.name}
              </span>
              <span>{" · "}</span>
              <span>
                {project.desc}
                {project.href && (
                  <MoveUpRight
                    size={12}
                    aria-hidden="true"
                    className="ml-1 inline opacity-70"
                  />
                )}
              </span>
            </div>

            {/* Tech stack: hidden until the project is hovered or focused.
                Devices that can't hover (phones) always show it. */}
            <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100">
              <p
                className={`overflow-hidden text-sm ${dark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                <span className="block pt-1">{project.tech}</span>
              </p>
            </div>
          </Row>
        );
      })}
    </div>
  );
}
