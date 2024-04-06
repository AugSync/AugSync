# Commits

All commits would use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) scheme.

## Commit Message Format

Each commit message consists of a header, a body, and a footer. The header has a special format that includes a type, an optional scope, and a description:

```bash
<type>[optional scope]: <description>
```

## Release

There are two commands to release a new version:

```json
{
  "scripts": {
    "release": "dotenv release-it",
    "release:pre": "dotenv release-it pre --changelog"
  }
}
```

`release` command will release a new version, and `release:pre` will release a new pre-release version.

It is necessary to use conventional commits to release a new version and get a proper changelog.
