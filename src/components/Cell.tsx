import React from "react";

/**
 * Represents the possible values a cell can hold: 'X', 'O', or null (empty).
 */
export type CellValue = "X" | "O" | null;

/**
 * Props for the Cell component.
 */
interface CellProps {
  /** The value to display in the cell ('X', 'O', or null). */
  value: CellValue;
  /** Callback function triggered when the cell is clicked. */
  onClick: () => void;
  /** Boolean indicating if this cell is part of a winning line. */
  isWinnerCell?: boolean;
  /** Boolean indicating if the cell should be disabled. */
  disabled?: boolean;
  /** Optional additional CSS classes to apply to the cell. */
  className?: string;
  /** The index of the cell (0-8), used for ARIA labels and logging. */
  index: number;
}

/**
 * Cell component: Renders a single clickable cell in the Tic-Tac-Toe grid.
 * Displays 'X', 'O', or a non-breaking space for empty cells.
 * Handles click events and visual states (disabled, winning cell).
 */
const Cell: React.FC<CellProps> = ({
  value,
  onClick,
  isWinnerCell,
  disabled,
  className,
  index, // Added for logging
}) => {
  // Log props for debugging
  console.log(`Cell ${index} props:`, { value, disabled, isWinnerCell });

  // Determine content and specific text styling based on value
  let content: React.ReactNode = null;
  let textClass = "";
  if (value === "X") {
    content = "X";
    textClass = "text-brand-primary"; // Use defined brand color
  } else if (value === "O") {
    content = "O";
    textClass = "text-brand-red"; // Use new brand-red color
  } else {
    content = "\u00A0"; // Use non-breaking space for empty cells
  }

  return (
    <button
      onClick={() => {
        console.log(`Cell ${index} clicked`); // Log cell click
        onClick();
      }}
      disabled={disabled || !!value} // Cell is disabled if prop says so or if it has a value
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
        text-7xl md:text-8xl font-bold
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background
        rounded-md
        ${className || ""}
      `}
      aria-label={`Cell ${value ? `contains ${value}` : "empty"}${
        isWinnerCell ? ", part of winning line" : ""
      }`}
      role="gridcell"
    >
      <span
        className={`${textClass ? textClass : ""} ${
          isWinnerCell ? "animate-pulse-strong" : ""
        }`}
      >
        {content}
      </span>
    </button>
  );
};

export default Cell;
