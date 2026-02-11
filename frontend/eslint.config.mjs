import eslint from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import perfectionist from "eslint-plugin-perfectionist"
import reactHooks from "eslint-plugin-react-hooks"
import { reactRefresh } from "eslint-plugin-react-refresh"
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactRefresh.configs.recommended(),
  reactHooks.configs.flat.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          groups: ["unknown", "property", "method"],
          order: "asc",
          sortBy: "name",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          groups: ["unknown", "property", "method"],
          order: "asc",
          sortBy: "name",
          type: "alphabetical",
        },
      ],
    },
  }
)
