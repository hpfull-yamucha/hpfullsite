module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "pc-bg-img": "url('/pc-bg.jpg')",
      }),
      fontFamily: {
        fantasy: "fantasy",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
