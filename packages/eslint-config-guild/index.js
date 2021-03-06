module.exports = {
  "parser": "babel-eslint",
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
    "prettier"
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
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "prettier"
    
  ],
  "rules": {
    "react/prop-types": "off",
    "generator-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        "asyncArrow": "always",
        "anonymous": "never",
        "named": "never"
      }
    ]
  }
}