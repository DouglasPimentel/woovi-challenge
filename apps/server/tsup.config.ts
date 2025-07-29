import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: false,
  outDir: "./build",
  target: "esnext",
  splitting: true,
  sourcemap: true,
  minify: true,
  clean: true,
});
