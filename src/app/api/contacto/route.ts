const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const texto = (v: unknown, max: number) =>
  typeof v === "string" && v.trim() && v.length <= max ? v.trim() : null;

export async function POST(req: Request) {
  const datos = await req.json().catch(() => null);
  if (!datos || typeof datos !== "object") return Response.json({ error: "Datos inválidos" }, { status: 400 });

  // Honeypot: campo oculto que solo llenan los bots; fingimos éxito para no darles pistas.
  if (datos.empresa) return Response.json({ ok: true });

  const name = texto(datos.name, 100);
  const email = texto(datos.email, 200);
  const msg = texto(datos.msg, 5000);
  if (!name || !email || !EMAIL.test(email) || !msg) {
    return Response.json({ error: "Revisa nombre, email y mensaje" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!key || !to) return Response.json({ error: "Contacto no configurado" }, { status: 500 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Portafolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portafolio · mensaje de ${name}`,
      text: `De: ${name} <${email}>\n\n${msg}`,
    }),
  });
  if (!res.ok) return Response.json({ error: "No se pudo enviar" }, { status: 502 });
  return Response.json({ ok: true });
}
