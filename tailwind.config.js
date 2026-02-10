/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', "cursive"],
        display: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        blush: {
          light: "#ffe4ec",
          DEFAULT: "#f9c5d1",
          dark: "#e08aa0",
        },
        wine: {
          light: "#7b294a",
          DEFAULT: "#4c102a",
          dark: "#2a0716",
        },
      },
      boxShadow: {
        "soft-glass":
          "0 18px 45px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.18)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 0% 0%, #fce7f3, transparent 55%), radial-gradient(circle at 100% 0%, #fee2e2, transparent 55%), radial-gradient(circle at 50% 100%, #e0f2fe, #fecaca)",
        "hero-gradient-dark":
          "radial-gradient(circle at 0% 0%, #7b294a, transparent 55%), radial-gradient(circle at 100% 0%, #4c1d95, transparent 55%), radial-gradient(circle at 50% 100%, #991b1b, #451a03)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

