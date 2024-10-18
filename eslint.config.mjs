import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  // Disable the react/no-unescaped-entities rule globally
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];
