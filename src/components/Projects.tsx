"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [open, setOpen] = useState<string | null>("gfac");
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-5 py-20">
      <p className="font-mono2 text-xs tracking-widest text-[#57e6ff]">01 · TRABAJO SELECCIONADO</p>
      <h2 className="font-display mt-2 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
        Cada proyecto, resuelto de principio a fin.
      </h2>
      <p className="mt-3 max-w-2xl text-slate-400">
        Toca cada fila para ver problema → decisión → estructura → resultado.
      </p>

      <div className="mt-10 border-t border-white/10">
        {projects.map((p, i) => {
          const isOpen = open === p.slug;
          const num = String(i + 1).padStart(2, "0");
          return (
            <div key={p.slug} className="border-b border-white/10">
              <button
                onClick={() => setOpen(isOpen ? null : p.slug)}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left md:grid-cols-[70px_1fr_220px_40px] md:gap-6"
              >
                <span className={`font-mono2 text-sm ${isOpen ? "text-[#c8f04a]" : "text-slate-600"}`}>/{num}</span>
                <span>
                  <span className={`font-display block text-2xl font-bold transition group-hover:translate-x-1 md:text-4xl ${isOpen ? "text-white" : "text-slate-200"}`}>
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-[#57e6ff]">{p.subtitle}</span>
                </span>
                <span className="hidden flex-wrap gap-1.5 md:flex">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-slate-400">{t}</span>
                  ))}
                </span>
                <span className={`grid h-10 w-10 place-items-center rounded-full border transition ${isOpen ? "rotate-45 border-[#c8f04a] text-[#c8f04a]" : "border-white/15 text-slate-300 group-hover:border-white/50"}`}>
                  <Plus size={18} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pl-[70px]">
                      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.cover} p-6 md:p-8`}>
                        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
                        <p className="font-display relative text-7xl font-bold text-white/15 md:text-8xl">/{num}</p>
                        <p className="font-display relative mt-1 text-2xl font-bold text-white md:text-3xl">{p.title}</p>
                        <div className="relative mt-3 flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <span key={t} className="rounded-full bg-black/45 px-3 py-1 text-xs text-slate-100 backdrop-blur">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_320px]">
                        <div>
                          <div className="max-w-2xl space-y-2.5 leading-relaxed text-slate-300">
                            {p.story.map((s) => (
                              <p key={s.label}><b className="text-white">{s.label}:</b> {s.text}</p>
                            ))}
                          </div>
                          <div className="mt-5 flex flex-wrap gap-2">
                            <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#c8f04a]">
                              <GithubIcon size={16} /> Código
                            </a>
                          </div>
                        </div>
                        <div className="space-y-3 rounded-2xl bg-black/40 p-5 text-sm">
                          <div>
                            <p className="mb-1.5 font-mono2 text-[11px] tracking-widest text-slate-500">DECISIONES CLAVE</p>
                            {p.highlights.map((h) => <p key={h} className="py-0.5 text-slate-200">✓ {h}</p>)}
                          </div>
                          <div className="border-t border-white/10 pt-3">
                            <p className="mb-1 font-mono2 text-[11px] tracking-widest text-slate-500">RESULTADO</p>
                            <p className="font-semibold text-[#c8f04a]">{p.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] py-3">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap px-4 font-display text-sm font-bold tracking-widest text-slate-400">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              DISPONIBLE PARA PROYECTOS <span className="text-[#c8f04a]">●</span> TRABAJO SELECCIONADO <span className="text-slate-600">◆</span>
            </span>
          ))}
        </div>
      </div>

      <p className="mt-6 flex items-center justify-end gap-1 text-sm text-slate-400">
        ¿Quieres ver el código de todos? <a href="https://github.com/juann11?tab=repositories" target="_blank" rel="noreferrer" className="flex items-center gap-1 font-semibold text-white hover:text-[#c8f04a]">github.com/juann11 <ArrowUpRight size={15} /></a>
      </p>
    </section>
  );
}
