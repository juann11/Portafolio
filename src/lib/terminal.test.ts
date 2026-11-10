import { describe, expect, it } from "vitest";
import { ejecutar, COMANDOS } from "./terminal";
import { profile, projects } from "@/data/portfolio";

const texto = (entrada: string) => ejecutar(entrada).lineas.join("\n");

describe("terminal del hero", () => {
  it("help lista todos los comandos públicos", () => {
    const salida = texto("help");
    for (const c of COMANDOS) expect(salida).toContain(c);
  });

  it("acepta mayúsculas y espacios de más", () => {
    expect(texto("  WHOAMI ")).toContain(profile.name);
  });

  it("proyectos lista cada proyecto numerado con su métrica", () => {
    const salida = texto("proyectos");
    projects.forEach((p, i) => {
      expect(salida).toContain(`${i + 1}`);
      expect(salida).toContain(p.title);
      expect(salida).toContain(p.metrica);
    });
  });

  it("abrir <n> navega al proyecto", () => {
    expect(ejecutar("abrir 2").ir).toBe(`#p-${projects[1].slug}`);
  });

  it("abrir con número inválido no navega y explica", () => {
    const r = ejecutar("abrir 99");
    expect(r.ir).toBeUndefined();
    expect(r.lineas.join(" ")).toContain(`1 y ${projects.length}`);
  });

  it("contratar lleva al contacto", () => {
    expect(ejecutar("contratar").ir).toBe("#contacto");
  });

  it("github abre el perfil", () => {
    expect(ejecutar("github").ir).toBe(profile.github);
  });

  it("cv abre la hoja de vida en PDF", () => {
    expect(ejecutar("cv").ir).toBe(profile.cv);
    expect(profile.cv).toMatch(/\.pdf$/);
  });

  it("clear limpia la pantalla", () => {
    expect(ejecutar("clear").limpiar).toBe(true);
  });

  it("sudo tiene respuesta propia (easter egg)", () => {
    expect(texto("sudo rm -rf /")).not.toMatch(/no encontrado/);
  });

  it("comando desconocido sugiere help", () => {
    expect(texto("hackear-nasa")).toMatch(/no encontrado[\s\S]*help/);
  });

  it("entrada vacía no imprime nada", () => {
    expect(ejecutar("   ").lineas).toEqual([]);
  });
});
