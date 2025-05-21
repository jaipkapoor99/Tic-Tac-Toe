import React from "react";
import Cell, { type CellValue } from "./Cell";

/**
 * Props for the Board component.
 */
interface BoardProps {
  /** Current state of all 9 cells on the board. */
  cells: CellValue[];
  /** Callback function triggered when a cell is clicked. Passes the index of the clicked cell. */
  onCellClick: (index: number) => void;
  /** An array of indices representing the winning line, if any. Used for highlighting. */
  winningLine?: number[] | null;
  /** Boolean indicating if the board should be disabled (e.g., after a win or draw). */
  disabled?: boolean;
}

/**
 * Board component: Renders the 3x3 Tic-Tac-Toe grid.
 * It maps over the `cells` array to render individual `Cell` components.
 * It also highlights the winning cells if a `winningLine` is provided.
 */
const Board: React.FC<BoardProps> = ({
  cells,
  onCellClick,
  winningLine, // Corrected prop name
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
          isWinnerCell={!!winningLine && winningLine.includes(index)} // Uses winningLine
          disabled={disabled || !!cell}
          className={`
            aspect-square 
            text-6xl md:text-7xl font-bold 
            flex items-center justify-center 
            rounded-md
            transition-all duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background
            ${
              winningLine?.includes(index)
                ? "bg-primary/20 text-primary-foreground animate-pulse-strong"
                : "bg-background hover:bg-accent/50 dark:hover:bg-accent/70"
            }
            ${
              cell === "X"
                ? "text-gradient-primary"
                : cell === "O"
                ? "text-gradient-secondary"
                : ""
            }
            ${
              disabled && !cell
                ? "cursor-not-allowed opacity-70"
                : "cursor-pointer"
            }
          `}
        />
      ))}
    </div>
  );
};

export default Board;
