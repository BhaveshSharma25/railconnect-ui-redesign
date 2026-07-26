export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#12271F",
        "ink-2": "#16332A",
        mint: {
          DEFAULT: "#1BAA7B",
          dark: "#149968",
          light: "#DFF5EA",
          text: "#0E7C57",
        },
        cream: "#F2F4EE",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
