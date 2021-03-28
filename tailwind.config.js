module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: "#7048E8",
        hover: "#5F3DC4",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      dark: {
        DEFAULT: "#00171F",
      },
      grey: {
        DEFAULT: "#8D9A9E",
      },
    },
    boxShadow: {
      soft:
        "0px 4px 12px rgba(0, 0, 0, 0.02), 0px 2px 4px rgba(0, 0, 0, 0.04);",
      heavy:
        "0px 16px 24px rgba(0, 0, 0, 0.04), 0px 8px 12px rgba(0, 0, 0, 0.08);",
      none: "none",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
