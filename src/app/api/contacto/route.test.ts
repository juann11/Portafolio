import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";

const pedir = (cuerpo: unknown) =>
  POST(new Request("http://localhost/api/contacto", { method: "POST", body: JSON.stringify(cuerpo) }));

const valido = { name: "Ana", email: "ana@empresa.com", msg: "Necesito un sistema de inventario." };

describe("POST /api/contacto", () => {
  const fetchFalso = vi.fn();

  beforeEach(() => {
    vi.stubEnv("RESEND_API_KEY", "re_test");
    vi.stubEnv("CONTACT_TO", "yo@correo.com");
    fetchFalso.mockResolvedValue(new Response("{}", { status: 200 }));
    vi.stubGlobal("fetch", fetchFalso);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    fetchFalso.mockReset();
  });

  it("envía el correo por Resend con reply_to del visitante", async () => {
    const res = await pedir(valido);
    expect(res.status).toBe(200);
    const [url, init] = fetchFalso.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect(init.headers.Authorization).toBe("Bearer re_test");
    const enviado = JSON.parse(init.body);
    expect(enviado.to).toEqual(["yo@correo.com"]);
    expect(enviado.reply_to).toBe("ana@empresa.com");
    expect(enviado.text).toContain("Necesito un sistema de inventario.");
  });

  it.each([
    ["email inválido", { ...valido, email: "no-es-email" }],
    ["sin nombre", { ...valido, name: "  " }],
    ["sin mensaje", { ...valido, msg: "" }],
    ["mensaje gigante", { ...valido, msg: "x".repeat(5001) }],
    ["JSON que no es objeto", null],
  ])("rechaza con 400: %s", async (_, cuerpo) => {
    const res = await pedir(cuerpo);
    expect(res.status).toBe(400);
    expect(fetchFalso).not.toHaveBeenCalled();
  });

  it("ignora en silencio a los bots que llenan el honeypot", async () => {
    const res = await pedir({ ...valido, empresa: "spam" });
    expect(res.status).toBe(200);
    expect(fetchFalso).not.toHaveBeenCalled();
  });

  it("devuelve 502 si Resend falla", async () => {
    fetchFalso.mockResolvedValue(new Response("{}", { status: 500 }));
    expect((await pedir(valido)).status).toBe(502);
  });

  it("devuelve 500 si falta la configuración", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    expect((await pedir(valido)).status).toBe(500);
  });
});
