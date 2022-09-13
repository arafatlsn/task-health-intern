/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      primary: "#2D89FF",
      secondary: "#642DFF",
      textColor: "#1E1E1E",
      paragraphColor: "#575757",
      whiteBg: "#F7F7F7",
      blurBlueColor: "#90D4ED",
      blurPinkColor: "#EB90ED",
    },
  },
  plugins: [require("flowbite/plugin")],
};
