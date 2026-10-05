"use client";
import { motion } from "framer-motion";
import { Globe, Package, Bot, Wrench, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { profile, skills, services, method, skillIcons } from "@/data/portfolio";

const icons: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} />, Package: <Package size={22} />, Bot: <Bot size={22} />, Wrench: <Wrench size={22} />,
};

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-20">
      <p className="font-mono2 text-xs tracking-widest text-[#57e6ff]">02 · CÓMO TRABAJO UN PROYECTO</p>
      <div className="mt-2 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">No empiezo por el código. Empiezo por dejar el proyecto bien planteado.</h2>
        <div className="space-y-4 text-slate-300">
          <p>Soy <b className="text-white">Juan José Ospina</b>, ingeniero de sistemas. Sé lo que un proyecto necesita para no volverse un problema después: <b className="text-white">alcance claro, arquitectura definida, datos bien modelados y criterios de entrega</b>.</p>
          <p>Mi formación es de sistemas, mi oficio es construir software completo: <b className="text-[#c8f04a]">entiendo la operación</b>, <b className="text-[#57e6ff]">diseño la estructura</b> y <b className="text-white">entrego algo que otro ingeniero puede mantener</b>. Interfaz cuidada sobre una base sólida.</p>
          <div className="grid grid-cols-2 gap-3">
            {["Alcance y requerimientos", "Arquitectura y datos", "Calidad y validación", "Deploy y transferencia"].map((t) => (
              <p key={t} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm"><CheckCircle2 size={15} className="text-[#c8f04a]" /> {t}</p>
            ))}
          </div>
          <p className="text-sm text-slate-500">Formación: {profile.education}.</p>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicios" className="border-y border-white/10 bg-white/[.02] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono2 text-xs tracking-widest text-[#57e6ff]">03 · QUÉ PUEDO ASUMIR EN TU EQUIPO</p>
        <h2 className="font-display mt-2 text-4xl font-bold md:text-5xl">Un ingeniero que toma un proyecto y lo deja andando</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-tilt rounded-3xl border border-white/10 bg-[#0c1226] p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#c8f04a]/15 text-[#c8f04a]">{icons[s.icon]}</span>
              <h3 className="font-display mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">{s.tags.map((t) => <span key={t} className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-slate-400">{t}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-20">
      <p className="font-mono2 text-xs tracking-widest text-[#57e6ff]">04 · CAPACIDAD TÉCNICA</p>
      <h2 className="font-display mt-2 text-4xl font-bold md:text-5xl">Cobertura completa del ciclo de un sistema</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="rounded-3xl border border-white/10 bg-[#0c1226] p-6">
            <h3 className="font-display font-bold text-[#c8f04a]">{g.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => {
                const ic = skillIcons[s];
                return (
                  <span key={s} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100">
                    {ic ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={ic.icon} alt={s} width={20} height={20} loading="lazy" className={ic.invert ? "invert" : ""} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-[#57e6ff]" />
                    )}
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-white/10 p-6">
        <p className="font-mono2 text-xs text-slate-500">MÉTODO DE ENTREGA</p>
        <div className="mt-3 grid gap-3 text-sm md:grid-cols-4">
          {method.map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-white/5 p-4"><p className="font-display font-bold text-white">{t}</p><p className="mt-1 text-slate-400">{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0c1226] via-[#101a3a] to-[#0c1226] p-8 md:p-12">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#c8f04a]/20 blur-[90px]" />
        <p className="font-mono2 text-xs tracking-widest text-[#c8f04a]">05 · CONTACTO</p>
        <h2 className="font-display mt-2 max-w-2xl text-4xl font-bold md:text-5xl">Hablemos del sistema que necesitas poner a andar.</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Tu nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-[#c8f04a]/60" />
            <input required type="email" placeholder="tu@empresa.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-[#c8f04a]/60" />
            <textarea required placeholder="Contexto: qué operación, qué datos, qué resultado esperas." rows={4} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-[#c8f04a]/60" />
            {sent ? <p className="rounded-2xl bg-[#c8f04a]/15 p-3 text-sm text-[#c8f04a]">Recibido, {form.name}. Escríbeme a {profile.email} con ese contexto y te respondo con alcance y tiempos.</p>
            : <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c8f04a] px-4 py-3 font-semibold text-black hover:brightness-110"><Send size={16} /> Enviar</button>}
            <div className="flex gap-2 text-center text-sm">
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="flex-1 rounded-2xl border border-white/15 py-2.5 hover:bg-white/5">WhatsApp</a>
              <a href={`mailto:${profile.email}`} className="flex-1 rounded-2xl border border-white/15 py-2.5 hover:bg-white/5">Email</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex-1 rounded-2xl border border-white/15 py-2.5 hover:bg-white/5">LinkedIn</a>
            </div>
          </form>
          <div className="font-mono2 space-y-2 rounded-2xl bg-black/50 p-5 text-[13px]">
            <p className="text-slate-500"># respuesta en &lt; 24h</p>
            <p><span className="text-[#c8f04a]">$</span> email → {profile.email}</p>
            <p><span className="text-[#c8f04a]">$</span> github → github.com/juann11</p>
            <p><span className="text-[#c8f04a]">$</span> ubicación → Medellín, CO (remoto OK)</p>
            <p><span className="text-[#c8f04a]">$</span> WhatsApp → +57 301 954 3555</p>
            <p><span className="text-[#c8f04a]">$</span> modo → <span className="text-green-400">proyecto o posición</span></p>
            <p className="pt-3 text-slate-400">Atajo: <b className="text-white">Ctrl+K</b> para moverte por el sitio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
