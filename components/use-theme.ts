"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const background = dark ? "#18181b" : "#f3f2ed";
    const foreground = dark ? "#e4e4e7" : "#27272a";
    const root = document.documentElement;

    root.style.setProperty("--background", background);
    root.style.setProperty("--foreground", foreground);
  }, [dark]);

  return [dark, setDark] as const;
}
