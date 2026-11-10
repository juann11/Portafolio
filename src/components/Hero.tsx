"use client";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Terminal from "@/components/Terminal";
import { profile, techMarquee } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-32 md:pt-40">
      <div className="fondo-hero absolute inset-0" aria-hidden />
      <div className="absolute -top-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 animate-[aurora_14s_ease-in-out_infinite_alternate] rounded-full bg-gradient-to-r from-[#57e6ff]/20 via-[#8b7bff]/25 to-[#c8f04a]/10 blur-[120px]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#060913]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="animate-[subir_.5s_ease-out_both] mb-5 inline-flex items-center gap-2 rounded-full border border-[#c8f04a]/40 bg-[#c8f04a]/10 px-4 py-1.5 text-xs font-semibold text-[#c8f04a]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#c8f04a]" /> {profile.availability}
          </div>
          <h1 className="animate-[subir_.5s_.08s_ease-out_both] font-display text-[2.6rem] font-bold leading-[1.02] sm:text-5xl md:text-7xl">
            Software que resuelve <span className="relative whitespace-nowrap text-[#c8f04a]">operación real<span aria-hidden className="absolute -bottom-1 left-0 h-[.08em] w-full origin-left animate-[trazo_.7s_.6s_cubic-bezier(.65,0,.35,1)_both] rounded-full bg-[#c8f04a]" /></span>
            <span className="mt-4 block text-2xl font-semibold leading-tight text-slate-300 md:text-4xl">web · móvil · datos <span className="whitespace-nowrap text-[#8b7bff]">+ IA</span></span>
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
            <a href={profile.cv} download className="flex items-center gap-2 rounded-full border border-[#c8f04a]/40 px-6 py-3 font-semibold text-[#c8f04a] transition hover:bg-[#c8f04a]/10"><FileDown size={17} /> Descargar CV</a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/40 hover:text-white"><GithubIcon size={18} /></a>
          </div>
        </div>
        <div className="animate-[subir_.5s_.15s_ease-out_both]">
          <Terminal />
        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] py-3">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-8 whitespace-nowrap px-4">
          {[...techMarquee, ...techMarquee].map((s, i) => (
            <span key={i} className="flex items-center gap-2.5 font-display text-sm font-semibold text-slate-200">
              {s.icon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.icon} alt="" width={22} height={22} loading="lazy" className={s.invert ? "invert" : ""} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              ) : (
                <span className="h-2 w-2 rounded-full bg-[#57e6ff]" />
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
