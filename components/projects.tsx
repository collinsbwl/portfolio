const projects = [
  {
    name: "Ignition",
    desc: "Marketplace for startups and students",
    tech: " React, TypeScript, PostgreSQL, Sentry, Gemini",
  },
  {
    name: "Azure ProjectOS",
    desc: "2nd Place [at] the Microsoft Internal Hackathon",
    tech: "Azure OpenAI, PydanticAI, Python, FastAPI, PostgreSQL",
  },
  {
    name: "Fleetwatch",
    desc: "A real-time fleet telemetry pipeline for live GPS, speed, and fuel data",
    tech: "Go, Kafka, Mapbox, Prometheus, Grafana, Docker, PostgreSQL",
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
    <div className="space-y-5">
      {projects.map((project) => (
        <div key={project.name}>
          <div className="mb-1 text-sm flex items-baseline gap-2">
            <span className={dark ? "text-zinc-200" : "text-zinc-800"}>
              {project.name}
            </span>
            <span
              className={`text-sm ${dark ? "text-zinc-200" : "text-zinc-800"}`}
            >
              {" · "}
            </span>
            <span
              className={`text-sm ${dark ? "text-zinc-200" : "text-zinc-800"}`}
            >
              {project.desc}
            </span>
          </div>
          <p className={`text-sm ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
            {project.tech}
          </p>
        </div>
      ))}
    </div>
  );
}
