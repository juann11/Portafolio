import { profile, projects, skills } from "@/data/portfolio";

export type Salida = { lineas: string[]; ir?: string; limpiar?: boolean };

export const COMANDOS = ["help", "whoami", "proyectos", "abrir <n>", "stack", "contacto", "contratar", "github", "clear"];

const ayuda = [
  "Comandos disponibles:",
  "  whoami       quién soy",
  "  proyectos    lo que he construido",
  "  abrir <n>    ver el detalle de un proyecto",
  "  stack        con qué trabajo",
  "  contacto     cómo hablarme",
  "  contratar    ir directo al formulario",
  "  github       abrir mi GitHub",
  "  clear        limpiar la pantalla",
  "  help         esta ayuda",
];

export function ejecutar(entrada: string): Salida {
  const [cmd = "", ...args] = entrada.trim().toLowerCase().split(/\s+/);
  switch (cmd) {
    case "":
      return { lineas: [] };
    case "help":
    case "ayuda":
      return { lineas: ayuda };
    case "whoami":
      return { lineas: [profile.name, "Ingeniero de sistemas · web, móvil, datos e IA", profile.location, profile.availability] };
    case "proyectos":
    case "ls":
      return {
        lineas: [...projects.map((p, i) => `${i + 1}. ${p.title} — ${p.metrica}`), "", 'Escribe "abrir 1" para ver uno.'],
      };
    case "abrir": {
      const p = projects[Number(args[0]) - 1];
      if (!p) return { lineas: [`Usa un número entre 1 y ${projects.length}. Ej: abrir 1`] };
      return { lineas: [`Abriendo ${p.title}…`], ir: `#p-${p.slug}` };
    }
    case "stack":
      return { lineas: skills.map((g) => `${g.group}: ${g.items.join(", ")}`) };
    case "contacto":
      return { lineas: [`email     ${profile.email}`, `linkedin  ${profile.linkedin}`, `github    ${profile.github}`, 'O escribe "contratar".'] };
    case "contratar":
    case "hire":
      return { lineas: ["Excelente decisión. Llevándote al formulario…"], ir: "#contacto" };
    case "github":
      return { lineas: ["Abriendo GitHub…"], ir: profile.github };
    case "clear":
    case "cls":
      return { lineas: [], limpiar: true };
    case "sudo":
      return { lineas: ["Permiso denegado. Aquí root solo lo tiene quien contrata.", 'Prueba "contratar".'] };
    case "rm":
      return { lineas: ["Tranquilo: este sistema tiene backups. Y tests."] };
    case "cafe":
    case "coffee":
      return { lineas: ["☕ Recargando… listo. Productividad +200%."] };
    default:
      return { lineas: [`comando no encontrado: ${cmd}. Escribe "help".`] };
  }
}
