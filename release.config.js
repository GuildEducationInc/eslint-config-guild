const DEFAULT_RELEASE_RULES = require('@semantic-release/commit-analyzer/lib/default-release-rules');

module.exports = {
  branches: ['master', 'next'],
  repositoryUrl: 'https://github.com/GuildEducationInc/eslint-config-guild',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          ...DEFAULT_RELEASE_RULES,
          { type: 'breaking', release: 'major' },
          { type: 'chore', release: 'patch' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'update', release: 'minor' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.version} [skip ci]',
        assets: ['CHANGELOG.md', 'package.json'],
      },
    ],
  ],
};
