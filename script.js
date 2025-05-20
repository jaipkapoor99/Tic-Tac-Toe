// DOM elements
const elements = {
  board: document.getElementById("board"),
  cells: [...document.querySelectorAll("[data-cell]")],
  status: document.getElementById("status"),
  restartButton: document.getElementById("restartButton"),
};

// Game state using object property shorthand
const gameState = {
  currentPlayer: "X",
  isActive: true,
};

// Winning combinations - grouped by type for better readability
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

// Game status messages using template literals
const messages = {
  win: (player) => `Player ${player} wins!`,
  draw: () => "It's a draw!",
  turn: (player) => `Player ${player}'s turn`,
};

// Check for win using arrow functions and method chaining
const checkWin = () =>
  winningCombos.some((combo) =>
    combo.every(
      (index) => elements.cells[index].textContent === gameState.currentPlayer
    )
  );

// Check for draw using arrow function and array methods
const checkDraw = () => elements.cells.every((cell) => cell.textContent);

// Handle game end
const endGame = (message) => {
  gameState.isActive = false;
  elements.status.textContent = message;
};

// Handle cell click using destructuring and early return pattern
const handleClick = ({ target: cell }) => {
  if (cell.textContent || !gameState.isActive) return;

  cell.textContent = gameState.currentPlayer;
  cell.classList.add(`cell-${gameState.currentPlayer.toLowerCase()}`);

  if (checkWin()) return endGame(messages.win(gameState.currentPlayer));
  if (checkDraw()) return endGame(messages.draw());

  gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
  elements.status.textContent = messages.turn(gameState.currentPlayer);
};

// Reset game using object destructuring
const resetGame = () => {
  const { cells, status } = elements;
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("cell-x", "cell-o");
  });
  gameState.currentPlayer = "X";
  gameState.isActive = true;
  status.textContent = messages.turn("X");
};

// Event listeners using arrow functions
elements.cells.forEach((cell) => cell.addEventListener("click", handleClick));
elements.restartButton.addEventListener("click", resetGame);

// Initialize game
elements.status.textContent = messages.turn("X");
