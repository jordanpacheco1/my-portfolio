/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{html,jsx,js,ts,tsx}",
    "./src/components/**/*.{html,jsx,js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"],
        RockSalt: ["Rock Salt", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
