import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

// Mismo alias "@/" que tsconfig.json
export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});
