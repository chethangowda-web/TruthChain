/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acid: "#c8ff00",
        void: "#080a0d",
        surface: "#0d1017",
        panel: "#111520",
      },
    },
  },
  plugins: [],
}
