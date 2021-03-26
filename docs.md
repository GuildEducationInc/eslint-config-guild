# Working with this repo

## Publishing To NPM

This project uses semantic release and a github workflow to automatically publish new versions on npm. In order for this to work you need to use proper commit messages. See the section below.

## Committing Code Changes

The commit messages are critical for allowing the [Semantic Releases](https://semantic-release.gitbook.io/) to work correctly. We use the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) commit message format. This is a small excerpt from the main docs:

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. **chore**: a commit of the type `chore` involves updating deps or other random changes that are non breaking (this correlates with a PATCH in semantic versioning).
1. **fix**: a commit of the type `fix` patches a bug in your codebase (this correlates with PATCH in semantic versioning).
1. **feat**: a commit of the type `feat` introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
1. **perf**: a commit of the type `perf` involves performance improvements that are non breaking (this correlates with a PATCH in semantic versioning).
1. **refactor**: a commit of the type `refactor` involves refactoring code (this correlates with a PATCH in semantic versioning).
1. **style**: a commit of the type `style` involves css/scss changes (this correlates with a PATCH in semantic versioning).
1. **update**: a commit of the type `update` involves updating dependencies or other simple updates that are non breaking (this correlates with a MINOR in semantic versioning).
1. **breaking**: a commit of the type `breaking` contains braking code changes (this correlates with a MAJOR in semantic versioning).
1. **BREAKING CHANGE**: a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A `BREAKING CHANGE` can be part of commits of any type.
1. footers other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to git trailer format.

Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays.`

#### Examples

##### Commit message with description and breaking change footer

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

##### Commit message with ! to draw attention to breaking change

```
refactor!: drop support for Node 6
```

##### Commit message with both ! and BREAKING CHANGE footer

```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

##### Commit message with no body

```
docs: correct spelling of CHANGELOG
```

##### Commit message with scope

```
feat(lang): add polish language
```

##### Commit message with multi-paragraph body and multiple footers

```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```
