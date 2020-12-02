module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "jest-formatting",
    "node",
    "sonarjs",
    "unicorn",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/strict",
    "plugin:node/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/unicorn",
  ],
  settings: {
    node: {
      tryExtensions: [".ts"],
    },
  },
  rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};
