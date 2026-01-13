# Fullstack App Monorepo

This project is a fullstack example using a [pnpm](https://pnpm.io/) workspace. It contains both frontend and backend packages managed together.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [pnpm](https://pnpm.io/) (v8 or higher recommended)

To install pnpm globally, run:

```bash
npm install -g pnpm
```

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/CodeRigged/react-ts-template.git
   cd react-ts-template
   ```

2. **Install dependencies for all packages:**

   ```bash
   pnpm install
   ```

3. **Run the development servers:**

   ```bash
   pnpm dev
   ```

   This command starts both the frontend and backend in development mode. Output from both will be shown in your terminal.

4. **Build all packages:**

   ```bash
   pnpm build
   ```

   This compiles the frontend and backend for production.

5. **Clean build artifacts:**
   ```bash
   pnpm clean
   ```

## Project Structure

- `frontend/` – React TypeScript frontend app
- `backend/` – Backend service (add your backend code here)
- `shared/` – Shared types, enums, and configuration files (if any)

## Troubleshooting

- Make sure you are using the correct Node.js (>=20.19.0) and pnpm versions.
- If you encounter issues, try running `pnpm install` again.

## License

MIT © [CodeRigged](https://github.com/CodeRigged)
