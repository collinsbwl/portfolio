// const projects = [
//   {
//     name: "Ignition",
//     desc: "x",
//     tech: "python",
//   },
//   {
//     name: "temp",
//     desc: "x",
//     tech: "TypeScript, HTML/CSS, React",
//   },
// ];

const projects: { name: string; desc: string; tech: string }[] = [];

export function ProjectsSection({ dark }: { dark: boolean }) {
  if (projects.length === 0) {
    return (
      <p className={`text-sm ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
        section in progress.
      </p>
    );
  }
  return (
    <div className="space-y-3 mb-4">
      {projects.map((project) => (
        <div key={project.name}>
          <div className="mb-1 text-sm flex items-baseline gap-2">
            <span className={dark ? "text-zinc-200" : "neutral-600"}>
              {project.name}
            </span>
            <span className={`text-sm ${dark ? "text-zinc-200" : "neutral-600"}`}>
              {" · "}
            </span>
            <span className={`text-sm ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
              {project.tech}
            </span>
          </div>
          <p className={`text-sm ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
            {project.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
