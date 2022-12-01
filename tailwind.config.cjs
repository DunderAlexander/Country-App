/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans"],
    },
    colors: {
      DarkBlue: "hsl(209, 23%, 22%)",
      VeryDarkBlue_DM: "hsl(207, 26%, 17%)",
      VeryDarkBlue_LM: "hsl(200, 15%, 8%)",
      DarkGray: "hsl(0, 0%, 52%)",
      VeryLightGray: "hsl(0, 0%, 98%)",
      White: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};
