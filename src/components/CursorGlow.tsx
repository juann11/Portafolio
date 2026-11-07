"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const brillo = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Movemos el elemento directo en el DOM: sin setState, React no re-renderiza en cada movimiento del mouse.
    let frame = 0;
    const mover = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (brillo.current) brillo.current.style.transform = `translate(${e.clientX - 240}px, ${e.clientY - 240}px)`;
        // Coordenadas de página para el fondo de puntos del hero (que está arriba del todo).
        const raiz = document.documentElement.style;
        raiz.setProperty("--mx", `${e.clientX}px`);
        raiz.setProperty("--my", `${e.clientY + window.scrollY}px`);
      });
    };
    window.addEventListener("pointermove", mover, { passive: true });
    return () => { window.removeEventListener("pointermove", mover); cancelAnimationFrame(frame); };
  }, []);
  return (
    <div
      ref={brillo}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[480px] w-[480px] rounded-full opacity-25 blur-[120px] transition-transform duration-150 motion-reduce:hidden"
      style={{ background: "radial-gradient(circle, #57e6ff 0%, #8b7bff 45%, transparent 70%)", transform: "translate(-400px, -400px)" }}
    />
  );
}
