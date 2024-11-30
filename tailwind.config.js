/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "patriotic-blue": "#003366 ",
        "liberty-red": "#D32F2F",
        "white-dove": "#F4F4F4",
        "golden-gate-yellow": "#FFB600",
        "olive-green": "#6B8E23",
        "slate-gray": "#4A4A4A",
      },
    },
  },
  plugins: [],
};
