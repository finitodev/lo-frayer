# Chrome Extension

A Chrome extension that makes a sound when an AI is done working.

## Automated Releases & Commit Conventions

This project uses [Release Please](https://github.com/googleapis/release-please) and [Conventional Commits](https://www.conventionalcommits.org/) to automate versioning, changelogs, and releases.

### Commit Message Guidelines

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Important:** The commit header (first line) must not exceed 100 characters in length.

**Examples:**
- `feat: add notification sound for Claude`
- `fix(ui): correct status card alignment`
- `docs: update usage instructions in README`
- `chore: update dependencies`

**Common types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Release Workflow

- **Release PRs** are automatically created when you push Conventional Commits to `main`.
- Merging a Release PR will:
  - Tag a new version
  - Build and zip the extension
  - Attach the ZIP to the GitHub Release
  - Publish to the Chrome Web Store (if secrets are configured)

## Project Structure

- **`src`**: Contains the core source code for the extension.
  - **`background`**: Background scripts for managing state and events.
  - **`components`**: Reusable React components.
  - **`config`**: Configuration for different AI services.
  - **`consts`**: Constants used throughout the application.
  - **`hooks`**: Custom React hooks for managing state and side effects.
  - **`screens`**: UI screens for the popup and the main application.
  - **`utils`**: Utility functions.
- **`public`**: Static assets, such as `popup.html`.
- **`assets`**: Icons and other assets.
- **`build`**: The compiled extension code.
- **`e2e`**: End-to-end tests.

## Design System

The extension adheres to a consistent design system to ensure a cohesive user experience. When contributing, please ensure all UI components and modifications align with the established visual guidelines, including colors, typography, spacing, and component patterns. Refer to `src/consts/theme.ts` for design tokens and examine existing components for established patterns.

### Local Development

- **Build:** `npm run build`
- **Zip for manual upload:** `npm run zip`

### Resources

- [Release Please Documentation](https://github.com/googleapis/release-please)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Features

## Design System & Theming

All new UI elements and screens must be built according to the app's theme and design system. Reuse existing styles and components where possible to ensure visual consistency.

