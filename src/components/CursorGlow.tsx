"use client";
import { useEffect, useState } from "react";
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const f = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", f);
    return () => window.removeEventListener("mousemove", f);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-0 h-[480px] w-[480px] rounded-full opacity-25 blur-[120px] transition-transform duration-150"
      style={{ background: "radial-gradient(circle, #57e6ff 0%, #8b7bff 45%, transparent 70%)", transform: `translate(${pos.x - 240}px, ${pos.y - 240}px)` }}
    />
  );
}
