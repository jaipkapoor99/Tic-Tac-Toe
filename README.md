# Modern Tic Tac Toe Game

A sleek and modern implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript. Features a responsive design, smooth animations, and an intuitive user interface built with Tailwind CSS.

## Quick Start

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/Tic-Tac-Toe.git
   cd Tic-Tac-Toe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run build
   ```

4. Open `index.html` in your browser

## Features

- 🎮 Clean, modern user interface
- 🎨 Beautiful gradient effects and animations
- 🎯 Responsive grid layout
- 🔄 Game state management
- 👥 Two-player gameplay
- 🏆 Win detection
- 🤝 Draw detection
- 🔄 Restart functionality
- 🤖 AI assistance powered by GitHub Copilot

## Technologies Used

- HTML5
- Tailwind CSS 3.x
- JavaScript (ES6+)
- Google Fonts (Poppins, Quicksand)
- PostCSS & Autoprefixer
- Node.js & npm for development
- GitHub Copilot for enhanced development

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Project Structure

```
tic-tac-toe/
├── node_modules/       # Dependencies (gitignored)
├── index.html         # Main HTML file
├── input.css         # Tailwind CSS source file
├── style.css         # Compiled CSS output
├── script.js         # Game logic
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js  # PostCSS configuration
└── package.json      # Project metadata and scripts
```

### Available Scripts

- `npm run build` - Starts Tailwind CSS compiler in watch mode

## Game Rules

1. The game is played on a 3x3 grid
2. Players take turns placing X or O in empty cells
3. First player to get 3 in a row (horizontally, vertically, or diagonally) wins
4. If all cells are filled with no winner, the game is a draw

## Code Structure

- `index.html` - Game structure and layout
- `style.css` - Modern styling and animations
- `script.js` - Game logic and interactivity

## Features Implemented

### CSS

- Modern gradient effects
- Smooth hover animations
- Responsive design
- Custom fonts
- Glass morphism effects
- Player-specific colors

### JavaScript

- ES6+ features
- Modern array methods
- Event handling
- State management
- Win/Draw detection

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Tailwind CSS compiler:
   ```bash
   npm run build
   ```
4. Open `index.html` in your browser
5. Make changes to `input.css` for styling
6. The compiler will automatically rebuild when you make changes

## Building for Production

1. Install dependencies if you haven't already:
   ```bash
   npm install
   ```
2. Build the CSS:
   ```bash
   npx tailwindcss -i ./input.css -o ./style.css --minify
   ```
3. Your production files will be:
   - `index.html`
   - `style.css` (minified)
   - `script.js`

## Future Enhancements

- Add score tracking
- Implement AI opponent
- Add sound effects
- Add game history
- Add multiplayer support
