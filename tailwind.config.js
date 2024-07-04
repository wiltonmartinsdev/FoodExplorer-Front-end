/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    },
    screens:{
        "xsm":{"max": "376px"},
        ...defaultTheme.screens
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors:{
        BG_300: "#000204",
        BG_400: "#000A0F",
        BG_200: "#00070A",
        BG_100: "#000405",
        BG_500: "#000C12",
        BG_600: "#00111A",
        BG_700: "#001119",
        BG_800: "#0D161B",
        BG_900: "#0D1D25",
        BG_1000: "#192227",
    
        BG_GRADIENTS_100:
            "linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%)",
        BG_GRADIENTS_200:
            "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
    
        TEXT_100: "#FFFFFF",
        TEXT_200: "#FFFAF1",
        TEXT_300: "#E1E1E6",
        TEXT_400: "#C4C4CC",
        TEXT_500: "#7C7C8A",
        TEXT_600: "#76797B",
        TEXT_700: "#4D585E",
    
        INFORMATION_COLOR: "#82F3FF",
    
        BUTTON_COLOR_100: "#750310",
        BUTTON_COLOR_200: "#92000E",
        BUTTON_COLOR_300: "#AB222E",
        BUTTON_COLOR_400: "#AB4D55",
    },
    fontFamily:{
        poppins:["Poppins", "sans-serif"],
        roboto:["Roboto", "sans-serif"]
    }
    },
  },


  plugins: [require("tailwindcss-animate")],
}