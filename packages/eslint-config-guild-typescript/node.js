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
    "browser": false,
    "node": true,
    "mocha": true
  },
  "plugins": [
    "import",
    "node",
    "promise",
    "standard"
  ],
  "extends": [
    "standard",
    "plugin:@typescript-eslint/recommended",
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
    "@typescript-eslint/camelcase": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-parameter-properties": "off",
  }
}
