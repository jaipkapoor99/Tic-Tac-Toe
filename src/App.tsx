import Game from "@/components/Game"; // Ensure this path is correct based on your alias setup

/**
 * Main application component.
 * Sets up the overall layout, including header, footer, and the main Game component.
 */
function App() {
  console.log("App.tsx: Component rendering with Game");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4 text-slate-100 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
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
