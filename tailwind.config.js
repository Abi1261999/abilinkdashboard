/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f5f2ff", 100: "#ece6ff", 200: "#d9ceff", 300: "#bdaaff",
          400: "#9c7cff", 500: "#8055f6", 600: "#6d3fe5", 700: "#5b30c4",
          800: "#4b2a9e", 900: "#3e2580"
        }
      },
      boxShadow: {
        panel: "0 8px 30px rgba(37, 22, 75, 0.045)",
        glow: "0 10px 30px rgba(109, 63, 229, 0.18)"
      }
    }
  },
  plugins: []
};
