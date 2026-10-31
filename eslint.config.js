import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    rules: {
        "no-unused-vars": "error",
        "prefer-const": "error",
        eqeqeq: "error",
        "no-var": "error",
    },
  },
  prettier,
];
