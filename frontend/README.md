# React + TypeScript + Vite

This is the frontend package of a fullstack monorepo managed with [pnpm workspaces](https://pnpm.io/workspaces). It is designed as a minimal yet modern template for React apps using TypeScript and Vite.

## Features

- Built-in internationalization (English, German, French)
- Settings page with language and theme (dark/light) switch
- State management via [zustand](https://github.com/pmndrs/zustand)
- Fast development with [Vite](https://vitejs.dev/)
- Easy integration with other packages in the monorepo

## Usage in Monorepo

This package is intended to be used as part of the monorepo. To install dependencies and run the frontend in development mode, use the root workspace commands:

```bash
pnpm install
pnpm --filter ./frontend dev
```

You can also build or lint the frontend specifically:

```bash
pnpm --filter ./frontend build
pnpm --filter ./frontend lint
```

## Project Structure

- `src/` – Application source code
- `public/` – Static assets
- `index.html` – Main HTML entry point

Happy coding!
