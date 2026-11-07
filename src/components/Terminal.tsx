"use client";
import { useEffect, useRef, useState } from "react";
import { ejecutar } from "@/lib/terminal";

type Linea = { tipo: "cmd" | "out"; texto: string };

const inicio: Linea[] = [
  { tipo: "cmd", texto: "whoami" },
  ...ejecutar("whoami").lineas.map((texto) => ({ tipo: "out" as const, texto })),
  { tipo: "out", texto: "" },
  { tipo: "out", texto: 'Escribe "help" o toca un comando ↓' },
];

const sugeridos = ["help", "proyectos", "stack", "contratar"];

export default function Terminal() {
  const [lineas, setLineas] = useState<Linea[]>(inicio);
  const [valor, setValor] = useState("");
  const historial = useRef<string[]>([]);
  const posHist = useRef(0);
  const input = useRef<HTMLInputElement>(null);
  const pantalla = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pantalla.current?.scrollTo({ top: pantalla.current.scrollHeight });
  }, [lineas]);

  const correr = (entrada: string) => {
    const r = ejecutar(entrada);
    if (entrada.trim()) historial.current.push(entrada);
    posHist.current = historial.current.length;
    setLineas((prev) =>
      r.limpiar ? [] : [...prev, { tipo: "cmd", texto: entrada }, ...r.lineas.map((texto) => ({ tipo: "out" as const, texto }))]
    );
    setValor("");
    if (r.ir?.startsWith("#")) setTimeout(() => { window.location.hash = r.ir!; }, 350);
    else if (r.ir) window.open(r.ir, "_blank", "noopener");
  };

  const teclas = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const h = historial.current;
    if (e.key === "ArrowUp" && h.length) {
      e.preventDefault();
      posHist.current = Math.max(0, posHist.current - 1);
      setValor(h[posHist.current]);
    } else if (e.key === "ArrowDown" && h.length) {
      e.preventDefault();
      posHist.current = Math.min(h.length, posHist.current + 1);
      setValor(h[posHist.current] ?? "");
    }
  };

  return (
    <div className="glass overflow-hidden rounded-3xl shadow-[0_30px_80px_-30px_rgba(87,230,255,.35)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-2 font-mono2 text-xs text-slate-400">juan@portafolio: ~</span>
        <span className="ml-auto font-mono2 text-[10px] uppercase tracking-widest text-[#c8f04a]">interactiva</span>
      </div>
      <div
        ref={pantalla}
        onClick={() => input.current?.focus({ preventScroll: true })}
        aria-live="polite"
        className="h-72 cursor-text overflow-y-auto overscroll-contain p-5 font-mono2 text-[13px] leading-relaxed"
      >
        {lineas.map((l, i) =>
          l.tipo === "cmd" ? (
            <p key={i} className="text-white"><span className="text-[#c8f04a]">❯</span> {l.texto}</p>
          ) : (
            <p key={i} className="min-h-[1lh] whitespace-pre-wrap break-words text-slate-300">{l.texto}</p>
          )
        )}
        <form onSubmit={(e) => { e.preventDefault(); correr(valor); }} className="flex items-center gap-2">
          <span className="text-[#c8f04a]" aria-hidden>❯</span>
          <label htmlFor="terminal-input" className="sr-only">Escribe un comando</label>
          <input
            id="terminal-input"
            ref={input}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            onKeyDown={teclas}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="escribe un comando…"
            className="w-full bg-transparent text-white caret-[#c8f04a] outline-none placeholder:text-slate-600"
          />
        </form>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-white/10 px-4 py-3">
        {sugeridos.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => correr(c)}
            className="min-h-11 rounded-full border border-white/10 bg-white/5 px-3.5 font-mono2 text-xs text-slate-200 transition-[color,border-color,scale] hover:border-[#c8f04a]/60 hover:text-[#c8f04a] active:scale-[.96] md:min-h-9"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
