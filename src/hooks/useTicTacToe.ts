import { useState, useCallback } from "react";
import { type CellValue } from "@/components/Cell"; // Using path alias

/**
 * Array of all possible winning combinations (indices) on a 3x3 Tic-Tac-Toe board.
 */
const winningCombinationsArrays = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6], // Diagonal from top-right to bottom-left
];

/**
 * Interface defining the structure of the object returned by the `useTicTacToe` hook.
 */
export interface TicTacToeLogic {
  /** An array representing the 9 cells of the board. */
  board: CellValue[];
  /** The current player ('X' or 'O'). */
  currentPlayer: Exclude<CellValue, null>;
  /** The winner of the game ('X' or 'O'), or null if no winner yet. */
  winner: Exclude<CellValue, null> | null;
  /** Boolean indicating if the game is a draw. */
  isDraw: boolean;
  /** Boolean indicating if the game is currently active (i.e., can moves be made). */
  isActive: boolean;
  /** An array of indices representing the winning combination, if any. */
  winningCombination: number[] | null;
  /** A descriptive message about the current game status (e.g., "Player X's turn", "Winner: O!"). */
  statusMessage: string;
  /** Function to handle a click on a cell. Takes the cell index as an argument. */
  handleClick: (index: number) => void;
  /** Function to reset the current game round (board clears, scores remain). */
  resetGame: () => void;
  /** Function to start a new game (board clears, scores reset to 0). */
  newGame: () => void;
  /** The number of wins for player X. */
  xWins: number;
  /** The number of wins for player O. */
  oWins: number;
}

/**
 * Custom React hook `useTicTacToe` encapsulates all the game logic for Tic-Tac-Toe.
 * It manages the game state (board, current player, winner, scores) and provides
 * functions to interact with the game (handle clicks, reset, start new game).
 *
 * @returns {TicTacToeLogic} An object containing the game state and action handlers.
 */
export function useTicTacToe(): TicTacToeLogic {
  // State for the game board (9 cells, initially all null)
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  // State for the current player, starting with 'X'
  const [currentPlayer, setCurrentPlayer] =
    useState<Exclude<CellValue, null>>("X");
  // State for the winner of the game, initially null
  const [winner, setWinner] = useState<Exclude<CellValue, null> | null>(null);
  // State to indicate if the game is a draw
  const [isDraw, setIsDraw] = useState<boolean>(false);
  // State to indicate if the game is active (moves can be made)
  const [isActive, setIsActive] = useState<boolean>(true);
  // State to store the winning combination of cells
  const [winningCombination, setWinningCombination] = useState<number[] | null>(
    null
  );
  // State for player X's score
  const [xWins, setXWins] = useState<number>(0);
  // State for player O's score
  const [oWins, setOWins] = useState<number>(0);

  /**
   * Checks the current board state for a winner.
   * @param currentBoard The current state of the game board.
   * @returns An object containing the `winner` ('X', 'O', or null) and the `line` (winning combination array or null).
   */
  const checkWinner = useCallback(
    (
      currentBoard: CellValue[]
    ): { winner: Exclude<CellValue, null> | null; line: number[] | null } => {
      for (let i = 0; i < winningCombinationsArrays.length; i++) {
        const [a, b, c] = winningCombinationsArrays[i];
        if (
          currentBoard[a] &&
          currentBoard[a] === currentBoard[b] &&
          currentBoard[a] === currentBoard[c]
        ) {
          return {
            winner: currentBoard[a] as Exclude<CellValue, null>,
            line: winningCombinationsArrays[i],
          };
        }
      }
      return { winner: null, line: null };
    },
    [] // No dependencies, as winningCombinationsArrays is constant
  );

  /**
   * Checks if the game is a draw (all cells filled, no winner).
   * @param currentBoard The current state of the game board.
   * @returns `true` if the game is a draw, `false` otherwise.
   */
  const checkDraw = useCallback((currentBoard: CellValue[]): boolean => {
    return currentBoard.every((cell) => cell !== null);
  }, []);

  /**
   * Handles a click on a cell.
   * Updates the board, checks for a winner or draw, and switches the player if the game continues.
   * @param index The index of the clicked cell (0-8).
   */
  const handleClick = useCallback(
    (index: number) => {
      console.log(`handleClick called for index: ${index}`, {
        isActive,
        boardValue: board[index],
        winner,
      });
      // Ignore click if game is not active, cell is already filled, or there's a winner
      if (!isActive || board[index] || winner) {
        return;
      }

      // Create a new board array and update the clicked cell
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      // Check for a winner
      const { winner: gameWinner, line: winningLineData } =
        checkWinner(newBoard);

      if (gameWinner) {
        setWinner(gameWinner);
        setIsActive(false);
        setWinningCombination(winningLineData); // Store the winning line
        // Update scores
        if (gameWinner === "X") {
          setXWins((prevXWins) => prevXWins + 1);
        } else if (gameWinner === "O") {
          setOWins((prevOWins) => prevOWins + 1);
        }
      } else if (checkDraw(newBoard)) {
        // Check for a draw if no winner
        setIsDraw(true);
        setIsActive(false);
      } else {
        // Switch to the next player
        setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
      }
    },
    [board, currentPlayer, isActive, winner, checkWinner, checkDraw]
  );

  /**
   * Resets the current game round.
   * Clears the board, resets player to 'X', and makes the game active.
   * Scores are maintained.
   */
  const resetGame = useCallback(() => {
    console.log("resetGame called (resets round)");
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
    setIsActive(true);
    setWinningCombination(null);
  }, []);

  /**
   * Starts a new game.
   * Resets the board and also resets the scores for X and O to 0.
   */
  const newGame = useCallback(() => {
    console.log("newGame called (resets round and scores)");
    resetGame(); // Perform a standard round reset
    setXWins(0); // Reset X's score
    setOWins(0); // Reset O's score
  }, [resetGame]); // Depends on resetGame

  // Determine the status message based on the current game state
  let statusMessage: string;
  if (winner) {
    statusMessage = `Player ${winner} wins! 🎉`;
  } else if (isDraw) {
    statusMessage = "It's a draw! 🤝";
  } else {
    statusMessage = `Player ${currentPlayer}'s turn ✨`;
  }

  // Return the game state and action handlers
  return {
    board,
    currentPlayer,
    winner,
    isDraw,
    isActive,
    winningCombination,
    statusMessage,
    handleClick,
    resetGame,
    newGame,
    xWins,
    oWins,
  };
}
