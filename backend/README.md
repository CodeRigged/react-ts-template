# Express + TypeScript + MongoDB

This is the backend package of a fullstack monorepo managed with [pnpm workspaces](https://pnpm.io/workspaces). It provides a minimal REST API template using Express, TypeScript, and MongoDB (via Mongoose).

## Features

- Simple RESTful API
- MongoDB integration with [mongoose](https://mongoosejs.com/)
- TypeScript-first development
- Fast development with [ts-node](https://typestrong.org/ts-node/)
- Shares types and logic with other packages in the monorepo

## Usage in Monorepo

This package is intended to be used as part of the monorepo. To install dependencies and run the backend in development mode, use the root workspace commands:

```bash
pnpm install
pnpm --filter ./backend dev
```

You can also build or start the backend specifically:

```bash
pnpm --filter ./backend build
pnpm --filter ./backend start
```

## Project Structure

- `src/` – Application source code
- `build/` – Compiled JavaScript output
- `package.json` – Project metadata and scripts

Happy coding!
