/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(32 40 43)",
      },
      fontFamily: {
        pixyboy: "pixyboy",
        jetbrains: "jetbrains",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
