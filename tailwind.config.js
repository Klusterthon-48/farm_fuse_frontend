/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#307C31",
        secondary: "#83CC20",
        accent: "#CFFF91",
        "accent-1": "#F3FFE3",
        "black-2": "#1D1D1D",
        "black-3": "#282828",
        "grey-1": "#333",
        "grey-3": "#828282",
        "grey-4": "#BDBDBD",
      },
    },
  },
  plugins: [],
};
