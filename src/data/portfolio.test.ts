import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { profile, projects } from "./portfolio";

// Los PDF se sirven desde public/, así que la ruta del perfil debe existir ahí.
const enPublic = (ruta: string) => existsSync(join(process.cwd(), "public", ruta));

describe("datos del perfil", () => {
  it("las dos hojas de vida (normal y ATS) existen en public/", () => {
    expect(enPublic(profile.cv)).toBe(true);
    expect(enPublic(profile.cvAts)).toBe(true);
    expect(profile.cv).not.toBe(profile.cvAts);
  });

  it("el link de LinkedIn apunta a la URL real del perfil", () => {
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/juanjose-ospina-dev");
  });
});

describe("apps publicadas en Google Play", () => {
  const enPlay = projects.filter((p) => p.logro === "Publicada en Google Play");

  it("aparecen las tres apps publicadas", () => {
    expect(enPlay.map((p) => p.slug).sort()).toEqual(["check-stock", "escuadron-estelar", "sipe-nativa"]);
  });

  it("cada app publicada enlaza a su ficha en Google Play", () => {
    for (const p of enPlay) expect(p.enlace?.url).toMatch(/^https:\/\/play\.google\.com\/store\/apps\/details\?id=/);
  });

  it("los slugs de los proyectos no se repiten", () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
  });
});
