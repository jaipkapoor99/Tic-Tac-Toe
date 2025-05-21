import React from "react";
import Board from "./Board";
import { Button } from "@/components/ui/button"; // Shadcn/ui button
import { useTicTacToe } from "@/hooks/useTicTacToe";

/**
 * Game component: Renders the main Tic-Tac-Toe game interface.
 * This includes the status display (winner, draw, next player), the game board,
 * action buttons (Reset Round, New Game), and the scoreboard.
 * It utilizes the `useTicTacToe` custom hook for all game logic and state management.
 */
const Game: React.FC = () => {
  const {
    board,
    currentPlayer, // Used for status message construction
    winner,
    winningCombination, // Passed to Board for highlighting winning cells
    isDraw,
    xWins,
    oWins,
    handleClick, // Callback for cell clicks
    resetGame, // Callback for resetting the current round
    newGame, // Callback for starting a new game and resetting scores
    isActive, // Determines if the board is interactive
    // statusMessage from hook is not directly used here as we reconstruct it for dynamic coloring
  } = useTicTacToe();

  // Dynamically determine the status message and its color
  let statusMessage: string;
  let statusColorClass = "text-slate-300"; // Default color

  if (winner) {
    statusMessage = `Winner: ${winner}! 🎉`; // Winner message
    statusColorClass = winner === "X" ? "text-pink-400" : "text-sky-400"; // Color for X or O winner
  } else if (isDraw) {
    statusMessage = "It's a Draw! 🤝"; // Draw message
    statusColorClass = "text-amber-400"; // Color for draw
  } else {
    statusMessage = `Next player: ${currentPlayer} ✨`; // Next player message
    // Optional: color for current player's turn if desired
    // statusColorClass = currentPlayer === "X" ? "text-pink-400" : "text-sky-400";
  }

  return (
    <main className="flex flex-col items-center gap-6 p-6 bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700 w-full max-w-md">
      {/* Status display area */}
      <div
        id="status"
        aria-live="polite" // Announces changes to screen readers
        className={`text-2xl font-semibold h-8 transition-colors duration-300 ease-in-out ${statusColorClass}`}
      >
        {statusMessage}
      </div>

      {/* Game Board */}
      <Board
        cells={board}
        onCellClick={handleClick}
        winningLine={winningCombination} // Pass winning combination to highlight cells
        disabled={!isActive} // Disable board if game is not active (win/draw)
      />

      {/* Action Buttons */}
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

      {/* Scoreboard */}
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
