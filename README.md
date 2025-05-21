# Modern Tic-Tac-Toe: React & TypeScript Edition 🚀

This project is a complete rewrite and modernization of a classic Tic-Tac-Toe game, built with **React, TypeScript, Vite, Tailwind CSS, and Shadcn/ui**. It showcases a professional-grade frontend setup with a focus on type safety, modern UI/UX, and a well-structured, maintainable codebase. This project was developed with the assistance of AI.

## ✨ Features

- 🎮 **Interactive Gameplay:** Classic Tic-Tac-Toe logic for two players.
- ⚛️ **React & TypeScript:** Robust and type-safe component-based architecture.
- ⚡ **Vite Powered:** Blazing fast development server and build process.
- 🎨 **Shadcn/ui & Tailwind CSS:** Beautifully styled, customizable UI components with a modern aesthetic. Includes a custom theme with unique fonts, colors, shadows, and gradients.
- 📱 **Responsive Design:** Adapts seamlessly to various screen sizes.
- 🏆 **Win/Draw Detection:** Clear indication of game outcomes.
- 🔄 **Restart Functionality:** Easily start a new game.
- 🧩 **Modular Codebase:** Logic encapsulated in a custom React Hook (`useTicTacToe`) for better separation of concerns.
- 📚 **Comprehensive Setup:** Includes detailed configuration for TypeScript, Tailwind CSS, and Vite.

## 🛠️ Tech Stack

- **Core:** React 18, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (with JIT compilation), PostCSS, Autoprefixer
- **UI Components:** Shadcn/ui
- **Fonts:** Google Fonts (Poppins, Quicksand - customized via Tailwind)
- **Development:** Node.js, npm

## 🚀 Quick Start

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/Tic-Tac-Toe.git # Replace YOUR_USERNAME
    cd Tic-Tac-Toe
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will typically open the app in your browser at `http://localhost:5173`.

4.  **Build for production:**

    ```bash
    npm run build
    ```

    The production-ready files will be in the `dist/` directory.

5.  **Preview production build:**
    ```bash
    npm run preview
    ```

## 📁 Project Structure

```
tic-tac-toe/
├── dist/                   # Production build output (gitignored)
├── node_modules/           # Project dependencies (gitignored)
├── public/                 # Static assets (e.g., favicon)
├── src/
│   ├── components/
│   │   ├── ui/             # Shadcn/ui components (e.g., button.tsx)
│   │   ├── Board.tsx       # Renders the game board
│   │   ├── Cell.tsx        # Renders a single cell
│   │   └── Game.tsx        # Main game UI, uses useTicTacToe hook
│   ├── hooks/
│   │   └── useTicTacToe.ts # Custom hook with all game logic
│   ├── lib/
│   │   └── utils.ts        # Utility functions (e.g., cn for classnames)
│   ├── App.css             # App-specific global styles (minimal)
│   ├── App.tsx             # Root React component
│   ├── index.css           # Tailwind directives & base styles (Shadcn/ui theme vars)
│   └── main.tsx            # Application entry point
├── .gitignore
├── components.json         # Shadcn/ui configuration
├── index.html              # Main HTML entry for Vite
├── package.json            # Project metadata, dependencies, and scripts
├── postcss.config.ts       # PostCSS configuration (ESM)
├── README.md               # This file
├── tailwind.config.ts      # Tailwind CSS theme and customization (ESM)
├── tsconfig.json           # Main TypeScript configuration for the project
├── tsconfig.node.json      # TypeScript configuration for Node.js based files (e.g., vite.config.ts)
└── vite.config.ts          # Vite configuration (ESM)
```

## 📜 Available Scripts (from `package.json`)

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the application for production using Vite.
- `npm run lint`: Lints the project using ESLint (if configured - current setup focuses on TS).
- `npm run preview`: Serves the production build locally for preview.

## 룰 Game Rules

1.  The game is played on a 3x3 grid.
2.  Players (X and O) take turns placing their mark in an empty cell.
3.  The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins.
4.  If all nine cells are filled and no player has won, the game is a draw.

## 🎨 Customization & Styling

- **Tailwind CSS:** Theme customizations (colors, fonts, shadows, gradients, animations) are defined in `tailwind.config.ts`.
- **Shadcn/ui:** Base color theming (light/dark mode) is primarily managed through CSS variables in `src/index.css` and configured in `tailwind.config.ts` and `components.json`. New components can be added via the Shadcn/ui CLI (`npx shadcn@latest add <component>`).

## 💡 Key Code Structure Insights

- **`src/hooks/useTicTacToe.ts`**: This custom hook encapsulates all the game's state (board, current player, winner, etc.) and logic (handling clicks, checking for wins/draws, resetting the game). This promotes separation of concerns and makes the `Game.tsx` component cleaner.
- **`src/components/Game.tsx`**: Uses the `useTicTacToe` hook and is responsible for rendering the game's UI, including the status display, the `Board` component, and the restart `Button`.
- **`src/components/Board.tsx`**: A presentational component that maps over the `board` state (from the hook) to render individual `Cell` components. It also handles highlighting the winning line.
- **`src/components/Cell.tsx`**: Renders a single clickable cell, displaying 'X', 'O', or nothing. It also visually indicates if it's part of a winning line.
- **Type Safety:** TypeScript is used throughout the project to ensure robust type checking, reducing runtime errors and improving developer experience.
- **Path Aliases:** `@/*` is configured in `tsconfig.json` and `vite.config.ts` to allow for cleaner import paths (e.g., `import { Button } from "@/components/ui/button";`).

This project serves as a strong example of building a modern, interactive web application with best practices in React and TypeScript development.
