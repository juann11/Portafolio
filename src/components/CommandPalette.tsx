"use client";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
const actions = [
  { label: "Ir a Proyectos", href: "#proyectos" },
  { label: "Ir a Servicios", href: "#servicios" },
  { label: "LinkedIn de Juan", href: "https://www.linkedin.com/in/juan-jos%C3%A9-ospina-a5b771212" },
  { label: "GitHub @juann11", href: "https://github.com/juann11" },
  { label: "Contactar por email", href: "#contacto" },
];
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  useEffect(() => {
    const f = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen(!open); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [open]);
  if (!open) return null;
  const list = actions.filter((a) => a.label.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="fixed inset-0 z-[70] grid place-items-start justify-center bg-black/70 p-6 pt-28" onClick={() => setOpen(false)}>
      <div className="glass w-full max-w-lg rounded-2xl p-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
          <Search size={16} className="text-slate-400" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Escribe o presiona Esc… (Ctrl+K)" className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500" />
        </div>
        <div className="mt-2 flex flex-col">
          {list.map((a) => (
            <a key={a.label} href={a.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm text-slate-200 hover:bg-white/10">{a.label}</a>
          ))}
          {list.length === 0 && <p className="px-3 py-4 text-sm text-slate-500">Sin resultados</p>}
        </div>
      </div>
    </div>
  );
}
