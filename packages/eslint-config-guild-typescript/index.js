module.exports = {
  extends: ['eslint-config-guild', "prettier/@typescript-eslint"],
  parser: '@typescript-eslint/parser',
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "react/jsx-filename-extension": [
      1, { extensions: ['.tsx', '.jsx']}
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
}