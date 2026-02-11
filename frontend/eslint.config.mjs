import baseConfig from "../eslint.config.mjs"

export default [
  ...baseConfig,
  reactRefresh.configs.recommended(),
  reactHooks.configs.flat.recommended,
  {
    // Add frontend-specific rules or overrides here if needed
  },
]
