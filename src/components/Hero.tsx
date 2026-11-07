"use client";
import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import { profile, techMarquee } from "@/data/portfolio";

const lines = [
  "alcance cerrado antes de codificar",
  "datos modelados, no campos sueltos",
  "offline-first cuando la operación lo exige",
  "deploy + docs + transferencia",
];

export default function Hero() {
  const [li, setLi] = useState(0);
  const [txt, setTxt] = useState("");
  useEffect(() => {
    const full = lines[li % lines.length];
    // Con movimiento reducido: muestra la frase completa de una y no rota.
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0;
    const t = setInterval(() => {
      i = reducido ? full.length : i + 1;
      setTxt(full.slice(0, i));
      if (i >= full.length) { clearInterval(t); if (!reducido) setTimeout(() => setLi((v) => v + 1), 1600); }
    }, 42);
    return () => clearInterval(t);
  }, [li]);

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-32 md:pt-40">
      <div className="blueprint-grid absolute inset-0" aria-hidden />
      <div className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 animate-[aurora_14s_ease-in-out_infinite_alternate] rounded-full bg-gradient-to-r from-[#57e6ff]/30 via-[#8b7bff]/30 to-[#c8f04a]/20 blur-[110px]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="animate-[subir_.5s_ease-out_both] mb-5 inline-flex items-center gap-2 rounded-full border border-[#c8f04a]/40 bg-[#c8f04a]/10 px-4 py-1.5 text-xs font-semibold text-[#c8f04a]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#c8f04a]" /> {profile.availability}
          </div>
          <h1 className="animate-[subir_.5s_.08s_ease-out_both] font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            Software que resuelve <span className="bg-gradient-to-r from-[#c8f04a] via-[#57e6ff] to-[#8b7bff] bg-clip-text text-transparent">operación real</span>
            <br />web · móvil · datos <span className="text-stroke">+ IA</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">{profile.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.frentes.map((f) => (
              <span key={f} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200">{f}</span>
            ))}
          </div>
          <p className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-1"><MapPin size={15} /> {profile.location}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="group flex items-center gap-2 rounded-full bg-[#c8f04a] px-6 py-3 font-semibold text-black transition hover:brightness-110">
              Ver proyectos <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>
            <a href="#contacto" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50 hover:bg-white/5">Hablemos</a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/40 hover:text-white"><GithubIcon size={18} /></a>
          </div>
        </div>
        <div className="animate-[subir_.5s_.15s_ease-out_both] space-y-4">
          <div className="glass overflow-hidden rounded-3xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 font-mono2 text-xs text-slate-400">sistema · blueprint de entrega</span>
            </div>
            <div className="space-y-2.5 p-5">
              {[
                ["LO QUE VES", "Pantallas rápidas y claras, que cualquiera usa sin manual", "#57e6ff"],
                ["LO QUE PASA ADENTRO", "Accesos por rol y datos protegidos, nada expuesto", "#8b7bff"],
                ["TUS DATOS", "Ordenados, con reportes que sí sirven para decidir", "#c8f04a"],
                ["ENTREGA", "Funcionando en internet + te enseño a manejarlo", "#e8eefc"],
              ].map(([layer, desc, color]) => (
                <div key={layer} className="flex items-center gap-3 rounded-2xl bg-black/40 px-4 py-3">
                  <span className="h-8 w-1.5 rounded-full" style={{ background: color }} />
                  <div>
                    <p className="font-mono2 text-[11px] font-bold tracking-widest" style={{ color }}>{layer}</p>
                    <p className="text-xs text-slate-300">{desc}</p>
                  </div>
                </div>
              ))}
              <p className="pt-1 font-mono2 text-[13px] text-[#c8f04a]">$ {txt}<span className="animate-[blink_1.1s_steps(2)_infinite]">▊</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] py-3">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-8 whitespace-nowrap px-4">
          {[...techMarquee, ...techMarquee].map((s, i) => (
            <span key={i} className="flex items-center gap-2.5 font-display text-sm font-semibold text-slate-200">
              {s.icon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.icon} alt={s.name} width={22} height={22} loading="lazy" className={s.invert ? "invert" : ""} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              ) : (
                <span className="grid h-[22px] w-[22px] place-items-center rounded-md bg-[#c8f04a] text-[10px] font-bold text-black">n8n</span>
              )}
              {s.name}
              <span className="ml-6 text-slate-600">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
