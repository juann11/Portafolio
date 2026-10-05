"use client";
import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass shadow-lg" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#c8f04a] text-black"><Terminal size={18} /></span>
          juan<span className="text-[#c8f04a]">.dev</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">{l.label}</a>
          ))}
          <a href="#contacto" className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:bg-[#c8f04a]">
            Hablemos
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-4 mb-4 flex flex-col gap-3 rounded-2xl p-5 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 text-slate-200">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
