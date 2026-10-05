import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#060913",
          color: "#e8eefc",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 28, color: "#57e6ff" }}>juan.dev — Medellín, CO</div>
        <div style={{ fontSize: 76, fontWeight: "bold", marginTop: 12 }}>Juan José Ospina</div>
        <div style={{ fontSize: 34, color: "#c8f04a", marginTop: 8 }}>
          Software que resuelve operación real
        </div>
        <div style={{ fontSize: 26, color: "#8b9bb8", marginTop: 16 }}>
          web · móvil · datos + IA — +19 proyectos en Git
        </div>
      </div>
    ),
    { ...size }
  );
}
