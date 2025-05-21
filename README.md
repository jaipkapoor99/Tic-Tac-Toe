# Modern Tic-Tac-Toe: A Revitalized Classic

This project presents a completely modernized version of the classic Tic-Tac-Toe game. Originally a basic implementation, it has been transformed with a sleek, contemporary user interface and experience, leveraging Tailwind CSS for styling and a robust development setup. The codebase has been thoroughly documented to ensure clarity and maintainability.

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

- 🎮 **Clean & Modern UI/UX:** Completely redesigned for a fresh, intuitive, and visually appealing experience.
- 🎨 **Custom Tailwind CSS Theme:** Utilizes a highly customized Tailwind CSS setup with unique fonts (`Poppins`, `Quicksand`), a bespoke color palette, glassmorphism effects, and gradient backgrounds.
- ✨ **Glassmorphism & Gradients:** Stylish glass-like elements and smooth gradients enhance the visual depth.
- 📱 **Responsive Design:** Adapts seamlessly to various screen sizes and orientations.
- 🔄 Game state management
- 👥 Two-player gameplay
- 🏆 Win detection
- 🤝 Draw detection
- 🔄 Restart functionality
- 📚 **Comprehensive Code Documentation:** Extensive JSDoc comments in JavaScript and configuration files, along with detailed HTML comments.
- 🤖 AI assistance powered by GitHub Copilot during development.

## Technologies Used

- HTML5
- Tailwind CSS v3.4.3 (with custom theme, JIT compilation)
- JavaScript (ES6+)
- Google Fonts (Poppins for headers/UI, Quicksand for game text)
- PostCSS & Autoprefixer (v8.4.38 & v10.4.16 respectively)
- Node.js & npm for development
- GitHub Copilot for enhanced development

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Project Structure

```
tic-tac-toe/
├── node_modules/       # Project dependencies (gitignored)
├── .gitignore          # Specifies intentionally untracked files
├── index.html          # Main HTML structure for the game
├── input.css           # Source CSS file with Tailwind directives
├── style.css           # Compiled Tailwind CSS output
├── script.js           # Core game logic and interactivity
├── tailwind.config.js  # Tailwind CSS theme and customization
├── postcss.config.js   # PostCSS plugin configuration
├── package.json        # Project metadata, dependencies, and scripts
└── README.md           # This file
```

### Available Scripts

- `npm run build` - Starts Tailwind CSS compiler in watch mode

## Game Rules

1. The game is played on a 3x3 grid
2. Players take turns placing X or O in empty cells
3. First player to get 3 in a row (horizontally, vertically, or diagonally) wins
4. If all cells are filled with no winner, the game is a draw

## Code Structure

- `index.html`: Defines the semantic structure and layout of the game board and UI elements.
- `input.css` & `tailwind.config.js`: Manages the styling. `input.css` includes Tailwind's base, components, and utilities, while `tailwind.config.js` defines the custom theme (colors, fonts, gradients, shadows, etc.).
- `style.css`: The generated CSS file applied to the game, compiled from `input.css` and `tailwind.config.js`.
- `script.js`: Contains all JavaScript logic for game mechanics, player turns, win/draw detection, UI updates, and event handling. Thoroughly documented with JSDoc.
- `postcss.config.js`: Configures PostCSS plugins like Tailwind CSS and Autoprefixer.
- `package.json`: Lists project dependencies (Tailwind CSS, PostCSS, Autoprefixer) and defines the build script.

## Features Implemented

### CSS (via Tailwind CSS)

- Modern gradient backgrounds and UI elements.
- Glassmorphism effects on the game board and controls.
- Custom font integration (Poppins, Quicksand).
- Player-specific colors for X and O marks.
- Responsive design ensuring playability on all devices.
- Smooth hover effects and transitions.

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

To create a minified version of the CSS for deployment:

1.  Ensure all dependencies are installed:
    ```bash
    npm install
    ```
2.  Run the production build command:
    ```bash
    npx tailwindcss -i ./input.css -o ./style.css --minify
    ```
3.  Deploy the following files:
    - `index.html`
    - `style.css` (now minified)
    - `script.js`

## Screenshots

_(Placeholder: Add screenshots of the new UI here to showcase the modern design, game board, win/draw states, etc.)_

## Future Enhancements

- Add score tracking
- Implement AI opponent
- Add sound effects
- Add game history
- Add multiplayer support

## Contributing

Contributions are welcome! If you have suggestions or want to improve the game, please feel free to:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

_(Placeholder: Add license information here, e.g., MIT License.)_

_(Consider adding a "Acknowledgements" section if you used any third-party assets or got inspiration from specific sources.)_
