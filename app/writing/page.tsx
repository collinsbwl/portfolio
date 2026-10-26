"use client";

import { NavBar } from "@/components/nav";
import { useTheme } from "@/components/use-theme";

export default function WritingPage() {
  const [dark, setDark] = useTheme();

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        dark ? "bg-zinc-900 text-zinc-200" : "bg-[#f3f2ed] text-zinc-800"
      }`}
    >
      <div className="mx-auto max-w-2xl px-6 pb-8">
        <NavBar dark={dark} setDark={setDark} />
        <h1 className="text-xl font-bold">Writing</h1>
      </div>
    </div>
  );
}
