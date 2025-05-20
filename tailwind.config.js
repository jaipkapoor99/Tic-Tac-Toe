/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#a7c7e7",
          DEFAULT: "#2563eb",
          dark: "#1e40af",
        },
        accent: {
          light: "#fcd34d",
          DEFAULT: "#f59e42",
          dark: "#b45309",
        },
        surface: "#f8fafc",
        glass: "rgba(255,255,255,0.7)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        glow: "0 0 16px 2px #2563eb55",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
