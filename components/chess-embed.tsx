"use client";

import { useEffect, useRef, useState } from "react";

// Embeds public/chess/index.html. The page is same-origin, so we read its
// height and set its theme directly. Measuring from here (rather than having
// the page post its height) can't miss a load that finishes before hydration.
// Setting the theme in place means toggling never reloads the iframe and
// resets the game.
function setFrameTheme(frame: HTMLIFrameElement | null, theme: string) {
  const root = frame?.contentDocument?.documentElement;
  if (root) root.dataset.theme = theme;
}

export function ChessEmbed({ dark }: { dark: boolean }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [height, setHeight] = useState(420);
  const [src] = useState(
    () =>
      `/chess/index.html?embed=1&autoplay=1&theme=${dark ? "dark" : "light"}`,
  );
  const theme = dark ? "dark" : "light";

  const attach = () => {
    const doc = ref.current?.contentDocument;
    if (!doc?.body) return;
    setFrameTheme(ref.current, theme);
    observer.current?.disconnect();
    observer.current = new ResizeObserver(() =>
      setHeight(Math.ceil(doc.body.getBoundingClientRect().height)),
    );
    observer.current.observe(doc.body);
  };

  useEffect(() => {
    if (ref.current?.contentDocument?.readyState === "complete") attach();
    return () => observer.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setFrameTheme(ref.current, theme), [theme]);

  return (
    <iframe
      ref={ref}
      src={src}
      onLoad={attach}
      title="Interactive isometric chess set"
      style={{ height }}
      className="mx-auto block w-full max-w-[460px] select-none border-0"
    />
  );
}
