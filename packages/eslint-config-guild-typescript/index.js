
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
    "chai-friendly"
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
    "prettier/@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "generator-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "space-before-function-paren": [
      "error",
      {
        "asyncArrow": "always",
        "anonymous": "never",
        "named": "never"
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "react/prop-types": "off",
    "@typescript-eslint/camelcase": "off",
    "react/jsx-filename-extension": [
      1, { "extensions": [".tsx", ".jsx"]}
    ],
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  "settings":  {
    "react":  {
      "version":  "detect"
    }
  }
}