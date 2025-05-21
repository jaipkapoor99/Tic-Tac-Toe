/**
 * @type {import('tailwindcss').Config}
 * Tailwind CSS configuration file.
 * Defines the project's design tokens, content sources, and plugins.
 */
module.exports = {
  /**
   * Specifies the files Tailwind should scan to find utility classes.
   * This ensures that only necessary CSS is generated.
   * @type {string[]}
   */
  content: ["./*.{html,js}"],
  /**
   * Defines the project's design system, including colors, fonts, spacing, etc.
   * The `extend` key allows adding new values or overriding existing ones.
   */
  theme: {
    extend: {
      /**
       * Custom font families used in the project.
       * @type {Object.<string, string[]>}
       */
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      /**
       * Custom color palette for the project.
       * Includes primary, accent, surface, and glass colors with light/dark variants.
       * @type {Object.<string, string|Object.<string, string>>}
       */
      colors: {
        primary: {
          light: "#a7c7e7", // Light blue, soft and airy
          DEFAULT: "#2563eb", // Standard blue, vibrant and modern
          dark: "#1e40af", // Dark blue, deep and rich
        },
        accent: {
          light: "#fcd34d", // Light yellow/orange, warm and inviting
          DEFAULT: "#f59e42", // Standard orange, energetic and playful
          dark: "#b45309", // Dark orange/brown, earthy and robust
        },
        surface: "#f8fafc", // Off-white, clean and neutral background
        glass: "rgba(255,255,255,0.7)", // Semi-transparent white for glassmorphism
      },
      /**
       * Custom box shadows for depth and glassmorphism effects.
       * @type {Object.<string, string>}
       */
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.18)", // Subtle shadow for glass elements
        glow: "0 0 16px 2px #2563eb55", // Soft blue glow effect
      },
      /**
       * Custom border radii for rounded corners.
       * @type {Object.<string, string>}
       */
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      /**
       * Custom background images, particularly for gradients.
       * @type {Object.<string, string>}
       */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  /**
   * Tailwind CSS plugins to extend functionality (e.g., forms, typography).
   * Currently, no additional plugins are used.
   * @type {Array}
   */
  plugins: [],
};
