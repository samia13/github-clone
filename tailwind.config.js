/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#0c1015",
        "purple-color": "#713fc8",
        "light-purple-color": "#7c72ff",
        "green-color": "#3fb950",
        "blue-color": "#33b3ae",
        "pink-color": "#33b3ae",
        "p-color": "#7d8590",
      },
    },
  },
  plugins: [],
};
