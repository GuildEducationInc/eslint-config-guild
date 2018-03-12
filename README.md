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

```bash
yarn add -D https://github.com/GuildEducationInc/eslint-config-guild.git
```

## Usage

To use the Guild JavaScript Style config, first add `eslint` to your project:

```bash
yarn add -D eslint
```

Then, add this to your .eslintrc file:
```json
{
  "extends": "guild"
}
```
*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint*
