"use client";
import { MotionConfig } from "framer-motion";

// Hace que todas las animaciones de framer respeten "reducir movimiento" del sistema.
export default function MovimientoReducido({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
