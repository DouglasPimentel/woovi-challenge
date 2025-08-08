import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cjsInterop } from "vite-plugin-cjs-interop";
import babel from "vite-plugin-babel";
import relay from "vite-plugin-relay";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    cjsInterop({
      dependencies: ["react-relay", "relay-runtime"],
    }),
    relay,
    babel({
      filter: /\.(jsx|tsx)$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: ["relay"],
      },
    }),
  ],
});
