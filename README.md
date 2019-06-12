![npm](https://img.shields.io/npm/v/eslint-config-guild.svg)
# Guild Education JavaScript Style

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

## Install

Guild exposes two eslint-configs, one for `typescript` projects and one for `javascript` projects.
To install the `javascript` config, run:

```bash
yarn add -D https://github.com/GuildEducationInc/eslint-config-guild.git
```

To install the `typescript` config, run:
```bash
yarn add -D https://github.com/GuildEducationInc/eslint-config-guild-typescript.git
```

## Usage

To use the Guild JavaScript Style config, first add `eslint` to your project:

```bash
yarn add -D eslint
```

Then, add the correct extension to your .eslintrc file:

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

In your projects `.codeclimate.yml` config, add the following:


```diff
prepare:
  fetch:
+    - url: 'https://cdn.jsdelivr.net/npm/eslint-config-guild-typescript@{Version}'
+      path: '.eslintrc.js'
plugins:
+ eslint:
+  enabled: true
+  channel: eslint-5
```
To consume the javascript version, just use `.../npm/eslint-config-guild/...`.

We're now using [JsDelivr](https://www.jsdelivr.com/) to serve our lint files because `rawGit` is closing down.
