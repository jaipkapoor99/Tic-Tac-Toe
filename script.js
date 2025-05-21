/**
 * Tic Tac Toe Game Logic
 * Handles the user interface interactions and game state for a modern Tic Tac Toe game.
 *
 * @version 1.1.0
 * @date May 21, 2025
 */

/**
 * Cache of frequently accessed DOM elements.
 * @type {{
 *   board: HTMLElement,
 *   cells: HTMLElement[],
 *   status: HTMLElement,
 *   restartButton: HTMLElement
 * }}
 */
const elements = {
  board: document.getElementById("board"),
  cells: [...document.querySelectorAll("[data-cell]")], // Spread NodeList into an Array for easier manipulation
  status: document.getElementById("status"),
  restartButton: document.getElementById("restartButton"),
};

/**
 * Represents the current state of the game.
 * @type {{
 *   currentPlayer: 'X' | 'O',
 *   isActive: boolean,
 *   boardState: Array<string|null>
 * }}
 */
const gameState = {
  currentPlayer: "X",
  isActive: true,
  boardState: Array(9).fill(null), // Tracks the content of each cell (X, O, or null)
};

/**
 * Defines all possible winning combinations of cell indices on the 3x3 grid.
 * Each sub-array represents a row, column, or diagonal that results in a win.
 * @type {Array<Array<number>>}
 */
const winningCombos = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * Provides functions to generate dynamic game status messages.
 * @type {{
 *   win: (player: 'X' | 'O') => string,
 *   draw: () => string,
 *   turn: (player: 'X' | 'O') => string
 * }}
 */
const messages = {
  win: (player) => `Player ${player} wins! 🎉`,
  draw: () => "It's a draw! 🤝",
  turn: (player) => `Player ${player}'s turn ✨`,
};

/**
 * Checks if the current player has achieved a winning combination.
 * Iterates through `winningCombos` and checks if all cells in a combination
 * are marked by the current player.
 * @returns {boolean} True if the current player has won, false otherwise.
 */
const checkWin = () =>
  winningCombos.some((combo) =>
    combo.every(
      (index) => gameState.boardState[index] === gameState.currentPlayer
    )
  );

/**
 * Checks if the game has resulted in a draw.
 * A draw occurs if all cells are filled and no player has won.
 * @returns {boolean} True if the game is a draw, false otherwise.
 */
const checkDraw = () =>
  gameState.boardState.every((cellContent) => cellContent !== null);

/**
 * Finalizes the game state when a win or draw occurs.
 * Sets the game as inactive and displays the final status message.
 * @param {string} message - The message to display (e.g., win or draw announcement).
 */
const endGame = (message) => {
  gameState.isActive = false;
  elements.status.textContent = message;
};

/**
 * Handles the logic when a player clicks on a cell.
 * - Ignores clicks if the cell is already taken or the game is inactive.
 * - Marks the cell with the current player's symbol (X or O).
 * - Updates the internal board state.
 * - Adds a player-specific class to the cell (e.g., 'cell-x', 'cell-o') for potential styling.
 * - Checks for a win or draw condition.
 * - If the game continues, switches to the other player.
 * - Updates the status display.
 * @param {Event} event - The click event object.
 * @param {HTMLElement} event.target - The HTML element of the cell that was clicked.
 */
const handleClick = ({ target: cell }) => {
  const cellIndex = elements.cells.indexOf(cell);

  // Ignore click if cell is already filled or game is inactive
  if (gameState.boardState[cellIndex] || !gameState.isActive) return;

  // Update cell content and internal board state
  cell.textContent = gameState.currentPlayer;
  gameState.boardState[cellIndex] = gameState.currentPlayer;

  // Add player-specific class for potential styling (e.g., different text colors for X and O)
  // Ensure these classes are defined in your CSS if specific styling is desired.
  cell.classList.add(`player-${gameState.currentPlayer.toLowerCase()}`);
  // Remove the other player's class if it exists from a previous game
  cell.classList.remove(
    `player-${gameState.currentPlayer === "X" ? "o" : "x"}`
  );

  if (checkWin()) {
    endGame(messages.win(gameState.currentPlayer));
    // Optionally, highlight winning cells
    // winningCombos.find(combo => combo.every(index => gameState.boardState[index] === gameState.currentPlayer))
    //   .forEach(index => elements.cells[index].classList.add('winning-cell'));
    return;
  }
  if (checkDraw()) {
    endGame(messages.draw());
    return;
  }

  // Switch player
  gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
  elements.status.textContent = messages.turn(gameState.currentPlayer);
};

/**
 * Resets the game to its initial state.
 * - Clears the text content and player-specific classes from all cells.
 * - Resets the internal board state.
 * - Sets the current player back to 'X'.
 * - Activates the game.
 * - Updates the status message to indicate Player X's turn.
 */
const resetGame = () => {
  const { cells, status } = elements;
  cells.forEach((cell, index) => {
    cell.textContent = "";
    gameState.boardState[index] = null;
    cell.classList.remove("player-x", "player-o", "winning-cell"); // Clear player and winning classes
  });
  gameState.currentPlayer = "X";
  gameState.isActive = true;
  status.textContent = messages.turn("X");
};

// --- Event Listeners ---
/**
 * Attaches click event listeners to each game cell.
 */
elements.cells.forEach((cell) => cell.addEventListener("click", handleClick));

/**
 * Attaches a click event listener to the restart button.
 */
elements.restartButton.addEventListener("click", resetGame);

// --- Game Initialization ---
/**
 * Sets the initial status message when the game loads.
 */
elements.status.textContent = messages.turn(gameState.currentPlayer);
