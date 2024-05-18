/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-background-color": "#fff",
        "base-black": "#212529",
        "base-white": "#f9f9f9",
        dimgray: {
          100: "#5f5f5f",
          200: "#54595c",
        },
        black: "#000",
        "base-black1": "#282828",
        "black-60": "#66798b",
        "primary-base": "#1c75cf",
        "neutral-50": "#f7f8f8",
        "neutral-200": "#d4d5d9",
        "negative-base": "#f2415a",
        "neutral-400": "#adb0b7",
      },
      spacing: {},
      fontFamily: {
        "paragraph-p3-regular": "Inter",
        poppins: "Poppins",
        "open-sans": "'Open Sans'",
        oxygen: "Oxygen",
      },
      borderRadius: {
        "8xs": "5px",
        "bodur-radius": "5px",
        "bodur-radius1": "5px",
        "bodur-radius2": "5px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      xs: "12px",
      sm: "14px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
