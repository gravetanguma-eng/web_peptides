import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: dirname(require.resolve("eslint-config-next/package.json"))
});

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      ".astro/**",
      "dist/**",
      "next-env.d.ts",
      "test-results/**",
      "playwright-report/**"
    ]
  },
  ...compat.extends("next/core-web-vitals", "next/typescript")
];

export default config;
