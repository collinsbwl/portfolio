const papers: { title: string; venue: string; desc: string }[] = [];

 // const papers = [
  //   {
  //     title: "page",
  //     venue: "x",
  //     desc: "x",
  //   },
  // ];

export function WritingSection({ dark }: { dark: boolean }) {
  if (papers.length === 0) {
    return (
      <p className={`text-sm ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
        section in progress.
      </p>
    );
  }

  return (
    <div className="space-y-6 mb-4">
      {papers.map((paper) => (
        <div key={paper.title} className="font-mono">
          <div className="mb-1 flex items-baseline gap-3">
            <span className={dark ? "text-zinc-200" : "text-zinc-800"}>
              {paper.title}
            </span>
            <span className={`text-xs ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
              {paper.venue}
            </span>
          </div>
          <p className={`text-sm ${dark ? "text-zinc-300" : "text-zinc-600"}`}>
            {paper.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
