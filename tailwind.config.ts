/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  /**
   * Specifies the files Tailwind should scan to find utility classes.
   * This ensures that only necessary CSS is generated.
   * @type {string[]}
   */
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  prefix: "",
  /**
   * Defines the project's design system, including colors, fonts, spacing, etc.
   * The `extend` key allows adding new values or overriding existing ones.
   */
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "brand-primary": "#4A90E2",
        "brand-accent": "#50E3C2",
        "brand-red": "#FF0000", // Added new red color
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(74, 144, 226, 0.5)",
        "glow-brand-primary":
          "0 0 20px 0px hsl(var(--brand-primary) / 0.5), 0 0 30px -10px hsl(var(--brand-primary) / 0.7)",
        "glow-brand-secondary":
          "0 0 20px 0px hsl(var(--brand-secondary) / 0.5), 0 0 30px -10px hsl(var(--brand-secondary) / 0.7)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #4A90E2, #50E3C2)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pulse-strong": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-strong": "pulse-strong 1.5s ease-in-out infinite",
      },
    },
  },
  /**
   * Tailwind CSS plugins to extend functionality (e.g., forms, typography).
   * Currently, no additional plugins are used.
   * @type {Array}
   */
  plugins: [require("tailwindcss-animate")],
};
