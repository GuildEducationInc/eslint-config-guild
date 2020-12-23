const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "commonjs": true,
    "browser": true,
    "node": true,
    "mocha": true,
    "jest": true,
    "cypress/globals": true
  },
  "plugins": [
    "cypress",
    "import",
    "node",
    "promise",
    "standard",
    "react",
    "jsx-a11y",
    "chai-friendly",
    "react-hooks",
    "jest"
  ],
  "globals": {
    "document": false,
    "navigator": false,
    "window": false,
    "cy": false,
    "Cypress": false
  },
  "extends": [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  "rules": {
    // TypeScript rules
    "@typescript-eslint/ban-types": OFF,
    "@typescript-eslint/camelcase": OFF,
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/explicit-member-accessibility": OFF,
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/no-non-null-assertion": OFF,
    "@typescript-eslint/no-unused-vars": OFF,
    "@typescript-eslint/array-type": OFF,
    "@typescript-eslint/no-explicit-any": OFF,
    "@typescript-eslint/no-empty-interface": OFF,
    "@typescript-eslint/no-use-before-define": OFF,
    "@typescript-eslint/no-object-literal-type-assertion": OFF,

    // standard rules
    "camelcase": OFF,
    "no-console": WARN,
    "no-undef": OFF, // disabled due to false positives when exporting interfaces; the ts compiler catches this for us
    "no-use-before-define": OFF, // this rule clashes with 'import React' statements
    "prefer-template": ERROR,
    "quotes": [ERROR, "single", { "avoidEscape": true }],
    "require-await": ERROR,
    "space-before-function-paren": OFF, // this rule clashes with Prettier
    "generator-star-spacing": [
      ERROR,
      {
        "before": false,
        "after": true
      }
    ],
    "space-before-function-paren": [
      ERROR,
      {
        "asyncArrow": "always",
        "anonymous": "never",
        "named": "never"
      }
    ],

    // import rules
    "import/no-unresolved": ERROR,
    "import/order": [
      ERROR,
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"], "index"],
        "newlines-between": "never",
      },
    ],

    // React rules
    "react/no-deprecated": OFF,
    "react/prop-types": OFF,
    "react-hooks/rules-of-hooks": ERROR,
    "react-hooks/exhaustive-deps": WARN,
    "react/jsx-curly-brace-presence": [ERROR, "never"],
    "react/jsx-filename-extension": [
      WARN, { "extensions": [".tsx", ".jsx"]}
    ],
    "react/no-array-index-key": ERROR,

    // Jest rules
    "jest/no-mocks-import": OFF,
    "jest/valid-expect": OFF, // enabling this would throw errors for 'expect(content)' statements without verbose matchers
  },
  "settings":  {
    "react":  {
      "version":  "detect"
    }
  }
}
