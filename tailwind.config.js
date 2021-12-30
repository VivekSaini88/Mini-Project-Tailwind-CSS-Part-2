module.exports = {
  purge: { enabled: true, content: ["./*.html"] },
  darkMode: "class",
  content: [],
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {
      fontFamily: {
        headline: ["Oswald"],
      },
      colors: {
        mainColor: "#1E293B",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
