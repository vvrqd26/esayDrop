module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  jit: true,
  theme: {
    extend: {
      colors: {
        bg: "#F3FAFF ",
        title: "#243038",
        slogen: "#525252",
        link: "#46ADFF",
        orange: "#F19149",
        blue: "#46ADFF",
        red: "#F14949",
      },

      fontFamily: {
        base: "SourceHanSansCN-Heavy",
      },
      boxShadow: {
        card: "0px 0px 9px 0px rgba(59,124,182,0.2);",
      },
    },
  },
  plugins: [],
};
