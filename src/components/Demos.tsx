import { Check, Flame, ScanLine, Trophy, WifiOff } from "lucide-react";

// Mini-demos animadas en CSS (keyframes en globals.css): ilustran qué hace cada sistema sin capturas.
// Todas usan el mismo ciclo de 6s para que las piezas queden sincronizadas.

const panel = "relative mx-auto w-full max-w-xl tabular-nums rounded-2xl border border-white/10 bg-[#070b17]/90 p-4 font-mono2 text-[12px] text-slate-300 shadow-2xl backdrop-blur md:p-5";
const ciclo = (delay: number) => ({ animationDelay: `${delay}s` });

function Ocr() {
  const campos = [
    ["proveedor", "Distribuidora Andina SAS"],
    ["nit", "900.123.456-7"],
    ["total", "$ 1.284.000"],
    ["vence", "15/12/2026"],
  ];
  return (
    <div className={`${panel} grid grid-cols-[.8fr_1.2fr] gap-4`}>
      <div className="relative overflow-hidden rounded-lg bg-slate-100 p-3">
        <p className="text-[10px] font-bold text-slate-800">FACTURA</p>
        {[90, 70, 80, 55, 85, 60, 75].map((w, i) => (
          <span key={i} className="mt-2 block h-1.5 rounded bg-slate-300" style={{ width: `${w}%` }} />
        ))}
        <span className="mt-3 block h-2 w-1/2 rounded bg-slate-500" />
        <span className="demo-escaner absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-transparent via-[#57e6ff]/50 to-transparent" />
      </div>
      <div className="space-y-2">
        <p className="flex items-center gap-1.5 text-[#57e6ff]"><ScanLine size={14} /> extrayendo…</p>
        {campos.map(([k, v], i) => (
          <p key={k} className="demo-campo flex justify-between gap-2 rounded-md bg-white/5 px-2 py-1.5" style={ciclo(0.5 + i * 0.6)}>
            <span className="text-slate-500">{k}</span><span className="truncate text-white">{v}</span>
          </p>
        ))}
        <p className="demo-campo flex items-center gap-1.5 text-[#c8f04a]" style={ciclo(3.1)}><Check size={14} /> listo para revisión humana</p>
      </div>
    </div>
  );
}

function Sla() {
  const tickets = [
    ["#1042", "Impresora piso 3", "CRÍTICA", "#f87171", 3],
    ["#1043", "VPN no conecta", "ALTA", "#fbbf24", 4.5],
    ["#1044", "Usuario nuevo", "MEDIA", "#57e6ff", 6],
  ] as const;
  return (
    <div className={panel}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-slate-500">tickets abiertos</span>
        <span className="rounded-full bg-[#c8f04a]/15 px-2 py-0.5 text-[#c8f04a]">SLA cumplido 96%</span>
      </div>
      <div className="space-y-3">
        {tickets.map(([id, t, prio, color, dur]) => (
          <div key={id}>
            <div className="flex justify-between gap-2">
              <span className="truncate"><span className="text-slate-500">{id}</span> <span className="text-white">{t}</span></span>
              <span style={{ color }}>{prio}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <span className="demo-sla block h-full origin-left rounded-full" style={{ background: color, animationDuration: `${dur}s` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Racha() {
  const dias = ["L", "M", "M", "J", "V", "S", "D"];
  return (
    <div className={`${panel} flex justify-center`}>
      <div className="w-52 rounded-[1.75rem] border-4 border-slate-700 bg-[#0d1124] p-4">
        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span>9:41</span><span className="flex items-center gap-1"><WifiOff size={11} /> offline</span>
        </div>
        <p className="mt-3 text-slate-400">racha de estudio</p>
        <div className="flex items-center gap-2">
          <Flame size={26} className="text-[#fb923c]" />
          <span className="relative h-9 overflow-hidden font-display text-3xl font-bold leading-9 text-white">
            <span className="demo-odometro block">{[12, 13, 14, 15].map((n) => <span key={n} className="block">{n}</span>)}</span>
          </span>
          <span className="self-end pb-1 text-slate-500">días</span>
        </div>
        <div className="mt-3 flex justify-between">
          {dias.map((d, i) => (
            <span key={i} className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[10px]">
              <span className="demo-dia grid h-full w-full place-items-center rounded-full font-bold text-black" style={ciclo(i * 0.6)}>{d}</span>
            </span>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-white/5 p-2.5">
          <div className="flex justify-between text-[11px]"><span>promedio</span><span className="text-[#8b7bff]">4.3 / 5.0</span></div>
          <div className="mt-1.5 h-1.5 rounded-full bg-white/10"><span className="block h-full w-[86%] rounded-full bg-[#8b7bff]" /></div>
        </div>
      </div>
    </div>
  );
}

function Trivia() {
  const opciones = ["Brasil", "Alemania", "Argentina", "Países Bajos"];
  return (
    <div className={panel}>
      <div className="flex items-center justify-between">
        <span className="text-slate-500">reto diario · 3/10</span>
        <span className="relative flex items-center gap-1 text-[#fbbf24]">
          <Trophy size={13} /> 1.250
          <span className="demo-flotar absolute -top-4 right-0 font-bold text-[#c8f04a]">+50</span>
        </span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"><span className="demo-sla block h-full origin-left bg-[#fb7185]" style={{ animationDuration: "6s" }} /></div>
      <p className="mt-3 font-display text-base font-bold text-white">¿Quién ganó el Mundial 2014?</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {opciones.map((o) => (
          <span key={o} className={`rounded-lg border border-white/10 px-3 py-2 ${o === "Alemania" ? "demo-correcta" : ""}`}>{o}</span>
        ))}
      </div>
    </div>
  );
}

function Inventario() {
  return (
    <div className={panel}>
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[#f87171]"><WifiOff size={13} /> sin internet</span>
        <span className="flex items-center gap-1 text-[#c8f04a]"><Check size={13} /> guardado local</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between rounded-md bg-white/5 px-2 py-1.5">
          <span className="text-white">Tornillo 1/4&quot;</span>
          <span className="relative h-[1.2em] overflow-hidden text-right leading-[1.2em]">
            <span className="demo-stock block"><span className="block">128 u</span><span className="block text-[#fbbf24]">125 u</span></span>
          </span>
        </div>
        <div className="flex justify-between rounded-md bg-white/5 px-2 py-1.5"><span className="text-white">Tuerca M6</span><span>340 u</span></div>
        <div className="flex justify-between rounded-md bg-white/5 px-2 py-1.5"><span className="text-white">Arandela 8mm</span><span className="text-[#f87171]">12 u · bajo</span></div>
      </div>
      <p className="demo-campo mt-3 rounded-md border border-dashed border-[#57e6ff]/40 px-2 py-1.5 text-[#57e6ff]" style={ciclo(1.2)}>
        − 3 Tornillo 1/4&quot; · salida a bodega 2
      </p>
    </div>
  );
}

const demos: Record<string, { Comp: () => React.JSX.Element; label: string }> = {
  gfac: { Comp: Ocr, label: "Factura escaneada con OCR que llena los campos automáticamente" },
  "helpdesk-upb": { Comp: Sla, label: "Tickets con barras de SLA según prioridad" },
  "sipe-nativa": { Comp: Racha, label: "App móvil offline con racha de estudio" },
  "football-maestro": { Comp: Trivia, label: "Pregunta de trivia con respuesta correcta y créditos ganados" },
  "check-stock": { Comp: Inventario, label: "Inventario funcionando sin internet" },
};

export default function Demo({ slug }: { slug: string }) {
  const d = demos[slug];
  if (!d) return null;
  return (
    <div role="img" aria-label={`Demo animada: ${d.label}`} className="relative">
      <div aria-hidden><d.Comp /></div>
    </div>
  );
}
