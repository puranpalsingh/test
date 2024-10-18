import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      "react/no-unescaped-entities": "off",  // Disable the rule globally
    },
  },
];

