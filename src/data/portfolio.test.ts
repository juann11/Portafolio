import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { profile } from "./portfolio";

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
