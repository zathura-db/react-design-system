import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@emotion/react",
    "@emotion/styled",
    "@mui/material",
    "@mui/icons-material",
    "tailwind-variants",
  ],
  minify: false,
  treeshake: true,
  injectStyle: true,
});
