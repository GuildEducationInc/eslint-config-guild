At Guild, our JavaScript style is based on [JavaScript Standard Style](https://standardjs.com/rules.html) with a few exceptions:


- Function declarations should not have a space before the parentheses:
  ```javascript
  function name (arg) { ... } // ✗ avoid
  function name(arg) { ... } // ✓ ok
  ```
- The * in `yield*` expressions and generator functions must have a space after, but not before:
  ```javascript
  yield * increment() // ✗ avoid
  yield *increment() // ✗ avoid
  yield* increment() // ✓ ok

  function * increment() { ... } // ✗ avoid
  function *increment() { ... } // ✗ avoid
  function* increment() { ... } // ✓ ok
  ```

In addition to [JavaScript Standard Style](https://standardjs.com/rules.html), we also include extend `jsx-a11y/recommended` and `plugin:react/recommended`.

# Getting Started
We expose two seperate configs based on the language of your project: `Javascript` or `Typescript`. Both follow the [JavaScript Standard Style](https://standardjs.com/rules.html), but `Typescript` include langue specific rules related to the best practacies of types (`@typescript-eslint/recommended`).
## Install Javascript Config ![npm](https://img.shields.io/npm/v/eslint-config-guild.svg)

To install the `javascript` config, run:
```bash
yarn add -D eslint-config-guild 
```

If the peer dependicies are needed, run
```bash
yarn add -D eslint eslint-plugin-chai-friendly eslint-plugin-cypress eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard eslint-standard-config eslint-config-prettier eslint-plugin-prettier
```


## Install Typescript Config ![npm](https://img.shields.io/npm/v/eslint-config-guild-typescript.svg)


To install the `typescript` config, run:
```bash
yarn add -D eslint-config-guild-typescript
```

If the peer dependicies are needed, run
```bash
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-chai-friendly eslint-plugin-cypress eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-standard eslint-plugin-jest eslint-plugin-react-hooks eslint-standard-config typescript
```

## Usage
Extend your `eslint` config with the installed guild config.

For `javascript`:
```json
{
  "extends": "guild"
}
```

For `typescript`:
```json
{
  "extends": "guild-typescript"
}
```
*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint*

## Codeclimate Usage

In your projects `.codeclimate.yml` config, add the appropriate config:

```diff
prepare:
  fetch:
  # For typescript
+    - url: 'https://cdn.jsdelivr.net/npm/eslint-config-guild-typescript@{ersion}'
+      path: '.eslintrc.js'

  # For Javascript
+    - url: 'https://cdn.jsdelivr.net/npm/eslint-config-guild@{ersion}'
+      path: '.eslintrc.js'

plugins:
+ eslint:
+  enabled: true
+  channel: eslint-5
```