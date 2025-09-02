# Building Tic-Tac-Toe From Scratch

This document outlines the steps to build the modern Tic-Tac-Toe application using React, TypeScript, Vite, Tailwind CSS, and Shadcn/ui.

## Prerequisites

- Node.js (which includes npm) installed on your system.
- A code editor (VS Code is recommended).

## Step 1: Initialize the Project with Vite

1.  Open your terminal and navigate to the directory where you want to create the project.
2.  Run the Vite creation command:
    ```bash
    npm create vite@latest tic-tac-toe -- --template react-ts
    ```
3.  Navigate into the newly created project directory:
    ```bash
    cd tic-tac-toe
    ```
4.  Install initial dependencies:
    ```bash
    npm install
    ```

## Step 2: Install Tailwind CSS

1.  Install Tailwind CSS and its peer dependencies:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```
2.  Generate Tailwind CSS and PostCSS configuration files:

    ```bash
    npx tailwindcss init -p
    ```

    This will create `tailwind.config.ts` (or `.js`) and `postcss.config.cjs`.

3.  Configure Tailwind's template paths in `tailwind.config.ts`:

    ```typescript
    // tailwind.config.ts
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Ensure this covers all relevant files
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

4.  Create an `src/index.css` file and add the Tailwind directives:

    ```css
    /* src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5.  Import `src/index.css` into your `src/main.tsx` file:

    ```typescript
    // src/main.tsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App.tsx";
    import "./index.css"; // Import Tailwind CSS

    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    ```

## Step 3: Set up Shadcn/ui

1.  Initialize Shadcn/ui in your project:

    ```bash
    npx shadcn-ui@latest init
    ```

    Follow the prompts:

    - Choose your preferred style (e.g., Default).
    - Select your base color (e.g., Slate).
    - Confirm if you want to use CSS variables for colors.
    - It will create/update `components.json` and may modify `tailwind.config.ts` and `src/lib/utils.ts`.

2.  Shadcn/ui will update your `tailwind.config.ts`. It should look similar to this, incorporating Shadcn's settings and your previous configurations. The example below reflects the final state of the project's `tailwind.config.ts`:

    ```typescript
    // tailwind.config.ts
    /** @type {import('tailwindcss').Config} */
    export default {
      darkMode: ["class"],
      content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./index.html",
      ],
      prefix: "",
      theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        extend: {
          colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))",
              foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
              DEFAULT: "hsl(var(--destructive))",
              foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
              DEFAULT: "hsl(var(--muted))",
              foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
              DEFAULT: "hsl(var(--accent))",
              foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
              DEFAULT: "hsl(var(--popover))",
              foreground: "hsl(var(--popover-foreground))",
            },
            card: {
              DEFAULT: "hsl(var(--card))",
              foreground: "hsl(var(--card-foreground))",
            },
            "brand-primary": "#4A90E2",
            "brand-accent": "#50E3C2",
            "brand-red": "#FF0000", // Added for 'O' symbol
            chart: {
              "1": "hsl(var(--chart-1))",
              "2": "hsl(var(--chart-2))",
              "3": "hsl(var(--chart-3))",
              "4": "hsl(var(--chart-4))",
              "5": "hsl(var(--chart-5))",
            },
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            quicksand: ["Quicksand", "sans-serif"],
          },
          boxShadow: {
            glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
            glow: "0 0 20px rgba(74, 144, 226, 0.5)",
            "glow-brand-primary":
              "0 0 20px 0px hsl(var(--brand-primary) / 0.5), 0 0 30px -10px hsl(var(--brand-primary) / 0.7)",
            "glow-brand-secondary":
              "0 0 20px 0px hsl(var(--brand-secondary) / 0.5), 0 0 30px -10px hsl(var(--brand-secondary) / 0.7)",
          },
          backgroundImage: {
            "primary-gradient": "linear-gradient(to right, #4A90E2, #50E3C2)",
          },
          keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
            },
            "pulse-strong": {
              "0%, 100%": { opacity: "1", transform: "scale(1)" },
              "50%": { opacity: "0.7", transform: "scale(1.05)" },
            },
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "pulse-strong": "pulse-strong 1.5s ease-in-out infinite",
          },
        },
      },
      plugins: [require("tailwindcss-animate")],
    };
    ```

    Make sure to install `tailwindcss-animate` if it's not already (Shadcn/ui usually handles this):

    ```bash
    npm install tailwindcss-animate
    ```

3.  Update `src/index.css` to include Shadcn/ui's base styles (Shadcn/ui `init` usually does this):

    ```css
    /* src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
      :root {
        --background: 0 0% 100%;
        --foreground: 222.2 84% 4.9%;
        /* ... other light mode Shadcn CSS variables ... */
        --primary: 222.2 47.4% 11.2%;
        --primary-foreground: 210 40% 98%;
        /* ... etc. ... */
        --radius: 0.5rem;
      }

      .dark {
        --background: 222.2 84% 4.9%;
        --foreground: 210 40% 98%;
        /* ... other dark mode Shadcn CSS variables ... */
        --primary: 210 40% 98%;
        --primary-foreground: 222.2 47.4% 11.2%;
        /* ... etc. ... */
      }
    }

    @layer base {
      body {
        @apply bg-background text-foreground;
        font-feature-settings: "rlig" 1, "calt" 1;
      }
    }
    ```

    _(Note: The exact CSS variables will depend on the base color and style chosen during `shadcn-ui init`.)_

## Step 4: Configure TypeScript (`tsconfig.json` and `tsconfig.node.json`)

1.  Ensure your `tsconfig.json` is set up for a React project with Vite. It should look similar to this:

    ```json
    // tsconfig.json
    {
      "compilerOptions": {
        "target": "ES2020",
        "useDefineForClassFields": true,
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "module": "ESNext",
        "skipLibCheck": true,
        "moduleResolution": "bundler", // Or "node" depending on setup, "bundler" is modern
        "allowImportingTsExtensions": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx",
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true,
        "baseUrl": ".",
        "paths": {
          "@/*": ["./src/*"]
        }
      },
      "include": ["src"],
      "references": [{ "path": "./tsconfig.node.json" }]
    }
    ```

2.  Ensure your `tsconfig.node.json` (for Vite config, Tailwind config, etc.) is set up. Note the inclusion of `postcss.config.cjs`:
    ```json
    // tsconfig.node.json
    {
      "compilerOptions": {
        "composite": true,
        "skipLibCheck": true,
        "module": "ESNext",
        "moduleResolution": "bundler", // Or "node"
        "allowSyntheticDefaultImports": true,
        "strict": true
        // "noEmit": true, // Can be removed if it causes issues with references
      },
      "include": ["vite.config.ts", "tailwind.config.ts", "postcss.config.cjs"]
    }
    ```
    _Note: If you encounter an error like "Referenced project ... may not disable emit" due to `"noEmit": true` in `tsconfig.node.json`, try removing or commenting it out, or ensure `composite` is true and your main `tsconfig.json` correctly references it._

## Step 5: Configure Vite (`vite.config.ts`)

1.  Set up path aliases in `vite.config.ts` to match your `tsconfig.json`:

    ```typescript
    // vite.config.ts
    import path from "path";
    import react from "@vitejs/plugin-react";
    import { defineConfig } from "vite";

    export default defineConfig({
      plugins: [react()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    });
    ```

## Step 6: Create Basic Application Structure

1.  **`index.html` (root HTML file):**
    Update it to include a descriptive title, the correct Google Fonts, and ensure the root div exists.

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tic Tac Toe - React/TS Edition</title>
        <!-- Google Fonts: Quicksand and Poppins -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&family=Poppins:wght@600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
    ```

2.  **`src/main.tsx` (React entry point):**
    Already configured in Step 2.

3.  **`src/App.tsx` (Main application component):**
    Create the main app layout.

    ```tsx
    // src/App.tsx
    import React from "react";
    import Game from "@/components/Game";
    import "./App.css"; // Optional: For any App-specific global styles

    function App() {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4 text-slate-100 font-quicksand">
          <header className="mb-8 text-center">
            <h1 className="text-5xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Tic-Tac-Toe
            </h1>
            <p className="text-slate-400 mt-2">
              Modern Edition - React, TypeScript, Tailwind & Shadcn/ui
            </p>
          </header>
          <Game />
          <footer className="mt-12 text-center text-slate-500 text-sm">
            <p>
              Built with the assistance of AI. Styled with Tailwind CSS and
              Shadcn/ui.
            </p>
          </footer>
        </div>
      );
    }

    export default App;
    ```

## Step 7: Develop Game Components

1.  **`src/components/ui/button.tsx` (Shadcn/ui Button) and `src/components/ui/button-variants.ts`:**
    Add the button component using the Shadcn/ui CLI:

    ```bash
    npx shadcn-ui@latest add button
    ```

    This will create `src/components/ui/button.tsx` and `src/lib/utils.ts` if it doesn't exist.

    To avoid potential Fast Refresh issues with Vite when exporting non-component values alongside components, we'll move `buttonVariants` to its own file.

    a. Create `src/components/ui/button-variants.ts`:
    ```typescript
    // src/components/ui/button-variants.ts
    import { cva } from "class-variance-authority";

        /**
         * Defines the visual variants for the button component using class-variance-authority.
         * Includes styles for different button types (default, destructive, outline, etc.) and sizes.
         */
        export const buttonVariants = cva(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: {
              variant: "default",
              size: "default",
            },
          }
        );
        ```

    b. Modify `src/components/ui/button.tsx` to import `buttonVariants`:
    ```tsx
    // src/components/ui/button.tsx
    import \* as React from "react";
    import { Slot } from "@radix-ui/react-slot";
    import { type VariantProps } from "class-variance-authority";

        import { cn } from "@/lib/utils";
        import { buttonVariants } from "./button-variants"; // Import from the new file

        /**
         * Props for the Button component.
         * Extends standard HTML button attributes and variant props defined by cva.
         */
        export interface ButtonProps
          extends React.ButtonHTMLAttributes<HTMLButtonElement>,
            VariantProps<typeof buttonVariants> {
          /**
           * If true, the button will render as a child component (Slot),
           * merging its props and behavior with the child.
           */
          asChild?: boolean;
        }

        /**
         * Button component, generated by Shadcn/ui.
         * A flexible and stylable button that supports various visual variants and sizes.
         * Can also render as a child component using the `asChild` prop.
         */
        const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
          ({ className, variant, size, asChild = false, ...props }, ref) => {
            const Comp = asChild ? Slot : "button";
            return (
              <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
              />
            );
          }
        );
        Button.displayName = "Button";

        export { Button }; // Only export the component
        ```

2.  **`src/components/Cell.tsx`:**

    ```tsx
    // src/components/Cell.tsx
    import React from "react";

    /**
     * Represents the possible values a cell can hold: 'X', 'O', or null (empty).
     */
    export type CellValue = "X" | "O" | null;

    /**
     * Props for the Cell component.
     */
    interface CellProps {
      /** The current value of the cell ('X', 'O', or null). */
      value: CellValue;
      /** Callback function to be invoked when the cell is clicked. */
      onClick: () => void;
      /** Optional flag indicating if this cell is part of a winning line. */
      isWinnerCell?: boolean;
      /** Optional flag indicating if the cell should be disabled. */
      disabled?: boolean;
      /** Optional additional CSS classes to apply to the cell. */
      className?: string;
      /** The index of the cell, used for ARIA labels and keys. */
      index: number;
    }

    /**
     * Renders a single cell in the Tic-Tac-Toe grid.
     * It displays 'X', 'O', or is empty, and handles click events to make a move.
     * Highlights winning cells and applies appropriate styling.
     *
     * @param {CellProps} props - The props for the component.
     * @returns {JSX.Element} The rendered cell button.
     */
    const Cell: React.FC<CellProps> = ({
      value,
      onClick,
      isWinnerCell,
      disabled,
      className,
      index,
    }) => {
      let content: React.ReactNode = null;
      let textClass = "";
      if (value === "X") {
        content = "X";
        textClass = "text-brand-primary"; // Color for 'X'
      } else if (value === "O") {
        content = "O";
        textClass = "text-brand-red"; // Color for 'O'
      } else {
        content = "\u00A0"; // Non-breaking space for empty cells to maintain size
      }

      return (
        <button
          onClick={onClick}
          disabled={disabled || !!value}
          className={`
            w-full h-full
            border-2
            ${
              isWinnerCell
                ? "border-primary/50 bg-primary/10"
                : "border-border bg-background"
            }
            ${
              disabled && !value
                ? "hover:bg-muted cursor-not-allowed"
                : !disabled && !value
                ? "hover:bg-accent/50 dark:hover:bg-accent/70"
                : ""
            }
            transition-all duration-150 ease-in-out
            flex items-center justify-center
            text-7xl md:text-8xl font-bold font-poppins /* Increased text size */
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background
            rounded-md
            ${className || ""}
          `}
          aria-label={`Cell ${index + 1}, ${
            value ? `contains ${value}` : "empty"
          }${isWinnerCell ? ", part of winning line" : ""}`}
          role="gridcell"
        >
          <span
            className={`${textClass} ${
              isWinnerCell ? "animate-pulse-strong" : ""
            }`}
          >
            {content}
          </span>
        </button>
      );
    };

    export default Cell;
    ```

3.  **`src/components/Board.tsx`:**

    ```tsx
    // src/components/Board.tsx
    import React from "react";
    import Cell, { type CellValue } from "./Cell";

    interface BoardProps {
      cells: CellValue[];
      onCellClick: (index: number) => void;
      winningLine?: number[] | null;
      disabled?: boolean;
    }

    const Board: React.FC<BoardProps> = ({
      cells,
      onCellClick,
      winningLine,
      disabled,
    }) => {
      return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md grid grid-cols-3 gap-1.5 bg-slate-700 p-1.5 rounded-lg shadow-xl">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              index={index}
              value={cell}
              onClick={() => onCellClick(index)}
              isWinnerCell={!!winningLine && winningLine.includes(index)}
              disabled={disabled || !!cell} // Cell also disabled if it already has a value
              // The className prop in Cell.tsx allows Board to pass specific styles to each cell if needed
              // For this project, common cell styling is in Cell.tsx, but Board provides aspect-square implicitly
              // by how it structures the grid and how Cell uses w-full/h-full.
              // Explicit aspect-square can be added here or in Cell.tsx if preferred.
              className="aspect-square" // Ensures cells are square
            />
          ))}
        </div>
      );
    };

    export default Board;
    ```

4.  **`src/hooks/useTicTacToe.ts` (Custom Hook for Game Logic):**

    ```typescript
    // src/hooks/useTicTacToe.ts
    import { useState, useCallback } from "react";
    import { type CellValue } from "@/components/Cell";

    const winningCombinationsArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    export interface TicTacToeLogic {
      board: CellValue[];
      currentPlayer: Exclude<CellValue, null>;
      winner: Exclude<CellValue, null> | null;
      isDraw: boolean;
      isActive: boolean;
      winningCombination: number[] | null;
      statusMessage: string; // Added for direct use or modification in Game.tsx
      handleClick: (index: number) => void;
      resetGame: () => void;
      newGame: () => void;
      xWins: number;
      oWins: number;
    }

    export function useTicTacToe(): TicTacToeLogic {
      const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
      const [currentPlayer, setCurrentPlayer] =
        useState<Exclude<CellValue, null>>("X");
      const [winner, setWinner] = useState<Exclude<CellValue, null> | null>(
        null
      );
      const [isDraw, setIsDraw] = useState<boolean>(false);
      const [isActive, setIsActive] = useState<boolean>(true);
      const [winningCombination, setWinningCombination] = useState<
        number[] | null
      >(null);
      const [xWins, setXWins] = useState<number>(0);
      const [oWins, setOWins] = useState<number>(0);

      const checkWinner = useCallback(
        (
          currentBoard: CellValue[]
        ): {
          winner: Exclude<CellValue, null> | null;
          line: number[] | null;
        } => {
          for (const combination of winningCombinationsArrays) {
            const [a, b, c] = combination;
            if (
              currentBoard[a] &&
              currentBoard[a] === currentBoard[b] &&
              currentBoard[a] === currentBoard[c]
            ) {
              return {
                winner: currentBoard[a] as Exclude<CellValue, null>,
                line: combination,
              };
            }
          }
          return { winner: null, line: null };
        },
        []
      );

      const checkDraw = useCallback((currentBoard: CellValue[]): boolean => {
        return currentBoard.every((cell) => cell !== null);
      }, []);

      const handleClick = useCallback(
        (index: number) => {
          if (!isActive || board[index] || winner) {
            return;
          }

          const newBoard = [...board];
          newBoard[index] = currentPlayer;
          setBoard(newBoard);

          const { winner: gameWinner, line: winningLineData } =
            checkWinner(newBoard);

          if (gameWinner) {
            setWinner(gameWinner);
            setIsActive(false);
            setWinningCombination(winningLineData);
            if (gameWinner === "X") {
              setXWins((prev) => prev + 1);
            } else if (gameWinner === "O") {
              setOWins((prev) => prev + 1);
            }
          } else if (checkDraw(newBoard)) {
            setIsDraw(true);
            setIsActive(false);
          } else {
            setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
          }
        },
        [board, currentPlayer, isActive, winner, checkWinner, checkDraw]
      );

      const resetGame = useCallback(() => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setWinner(null);
        setIsDraw(false);
        setIsActive(true);
        setWinningCombination(null);
      }, []);

      const newGame = useCallback(() => {
        resetGame();
        setXWins(0);
        setOWins(0);
      }, [resetGame]);

      // Determine status message based on game state
      let currentStatusMessage: string;
      if (winner) {
        currentStatusMessage = `Winner: ${winner}! 🎉`;
      } else if (isDraw) {
        currentStatusMessage = "It's a Draw! 🤝";
      } else {
        currentStatusMessage = `Next player: ${currentPlayer}`;
      }

      return {
        board,
        currentPlayer,
        winner,
        isDraw,
        isActive,
        winningCombination,
        statusMessage: currentStatusMessage, // Provide the calculated status message
        handleClick,
        resetGame,
        newGame,
        xWins,
        oWins,
      };
    }
    ```

5.  **`src/components/Game.tsx`:**

    ```tsx
    // src/components/Game.tsx
    import React from "react";
    import Board from "./Board";
    import { Button } from "@/components/ui/button";
    import { useTicTacToe } from "@/hooks/useTicTacToe";

    const Game: React.FC = () => {
      const {
        board,
        currentPlayer, // Kept for dynamic status color, though statusMessage from hook is now primary
        winner,
        winningCombination,
        isDraw,
        xWins,
        oWins,
        handleClick,
        resetGame,
        newGame,
        isActive,
        statusMessage, // Using statusMessage directly from the hook
      } = useTicTacToe();

      // Determine status color based on winner or draw
      let statusColorClass = "text-slate-300"; // Default color
      if (winner) {
        statusColorClass = winner === "X" ? "text-pink-400" : "text-sky-400";
      } else if (isDraw) {
        statusColorClass = "text-amber-400";
      } else {
        // Optional: color for current player's turn
        // statusColorClass = currentPlayer === "X" ? "text-pink-400" : "text-sky-400";
      }

      return (
        <main className="flex flex-col items-center gap-6 p-6 bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700 w-full max-w-md">
          <div
            id="status"
            aria-live="polite"
            className={`text-2xl font-semibold h-8 transition-colors duration-300 ease-in-out ${statusColorClass}`}
          >
            {statusMessage} {/* Use statusMessage from hook */}
          </div>

          <Board
            cells={board}
            onCellClick={handleClick}
            winningLine={winningCombination}
            disabled={!isActive}
          />

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button
              onClick={resetGame}
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 text-lg bg-purple-600 hover:bg-purple-700 border-purple-700 hover:border-purple-800 text-white shadow-retro-sm hover:shadow-retro-sm-hover transition-all"
              aria-label="Reset the current round"
            >
              Reset Round
            </Button>
            <Button
              onClick={newGame}
              variant="destructive"
              className="w-full sm:w-auto px-6 py-3 text-lg bg-red-600 hover:bg-red-700 border-red-700 hover:border-red-800 text-white shadow-retro-sm hover:shadow-retro-sm-hover transition-all"
              aria-label="Start a new game and reset scores"
            >
              New Game (Reset Scores)
            </Button>
          </div>

          <div className="mt-6 text-center w-full max-w-xs p-4 bg-slate-700/50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-200 mb-3">
              Scoreboard
            </h3>
            <div className="flex justify-around text-lg">
              <p className="text-pink-400">
                Player X: <span className="font-bold">{xWins}</span>
              </p>
              <p className="text-sky-400">
                Player O: <span className="font-bold">{oWins}</span>
              </p>
            </div>
          </div>
        </main>
      );
    };

    export default Game;
    ```

## Step 8: Add Custom Tailwind Configuration (Already covered in Step 3)

The `tailwind.config.ts` shown in Step 3 reflects the final state with custom fonts (Poppins, Quicksand), boxShadowes (glass, glow, etc.), and animations (pulse-strong) used in the project. Ensure your `tailwind.config.ts` matches that example.

## Step 9: Add Scripts to `package.json`

Ensure your `package.json` has the following scripts:

```json
// package.json
{
  // ... other fields
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
  // ... dependencies and devDependencies
}
```

## Step 10: Run the Application

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## Step 11: Build for Production

1.  Run the build command:

    ```bash
    npm run build
    ```

    This will create a `dist` folder with the optimized production build.

2.  Preview the production build locally:
    ```bash
    npm run preview
    ```

This guide provides a comprehensive walkthrough to recreate the Tic-Tac-Toe application. Remember to adapt paths and configurations if your project structure differs slightly.
