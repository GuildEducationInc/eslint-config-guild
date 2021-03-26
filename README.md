# Guild Eslint Config

[working with this repo](docs.md)

---

At Guild, our JavaScript style is based on [JavaScript Standard Style](https://standardjs.com/rules.html) with a few exceptions:

In addition to [JavaScript Standard Style](https://standardjs.com/rules.html), we also include extend `jsx-a11y/recommended` and `plugin:react/recommended`.

## Install Config ![npm](https://img.shields.io/npm/v/@guildeducationinc/eslint-config-guild-typescript.svg)

To install the `typescript` config, run:
```bash
yarn add -D @guildeducationinc/eslint-config-guild-typescript
```

If the peer dependencies are needed, run
```bash
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-standard eslint-plugin-chai-friendly eslint-plugin-cypress eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard eslint-plugin-testing-library eslint-standard-config prettier typescript
```

## Usage
Extend your `eslint` config with the installed guild config.

For `typescript`:
```json
{
  "extends": "guild-typescript"
}
```
*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint*

## Code Climate Usage

In your projects `.codeclimate.yml` config, add the appropriate config:

```diff
prepare:
  fetch:
  # For typescript
+    - url: 'https://cdn.jsdelivr.net/npm/eslint-config-guild-typescript@{ersion}'
+      path: '.eslintrc.js'

plugins:
+ eslint:
+  enabled: true
+  channel: eslint-5
```