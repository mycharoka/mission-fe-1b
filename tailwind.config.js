/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '32px': '32px'
    },
    letterSpacing: {
      '0.2px': '0.2px'
    },
    borderRadius: {
      '16px': '16px',
    },
    extend: {
      colors: {
        backgroundprimary: "#3254FF",
        backroungprimary100: "#243FDB",
        backgroundprimary200: "#192DB7",
        backgroundprimary300: "#0F1E93",
        backgroundprimary400: "#09147A",

        textdarkprimary: "rgba(58, 53, 65, 0.87)",
        textdarksecondary: "rgba(58, 53, 65, 0.68)",
        textdarkdisabled: "rgba(58, 53, 65, 0.38)",
        textlightprimary: "rgba(231, 227, 252, 0.87)",
        textlightsecondary: "rgba(231, 227, 252, 0.68)",
        textlightdisabled: "rgba(231, 227, 252, 0.38)",

        paperbackground: "#22282A",
        bodybackground: "#2F3334",
        pageheaderbackground: "#181A1C",
        extrabackground: "#3D4142",
        outlineborder: "rgba(231, 227, 252, 0.23)",
        inputborder: "rgba(231, 227, 252, 0.22)",
        inputfieldbg: "rgba(231, 227, 252, 0.04)",
        chipbg: "rgba(231, 227, 252, 0.08)",

        info: "#0586FF", 
        infopressed: "#024DB7",
        infohover: "#0367DB",
        infobackground: "rgba(205, 241, 255, 0.3)",

        success: "#9FE04A",
        successpressed: "#60A125",
        successhover: "#7EC036",
        successbackground: "rgba(244, 253, 219, 0.8)",
        
        warning: "#FFE70F",
        warningpressed: "#B7A207",
        warninghover: "#DBC40A",
        warningbackground: "rgba(255, 252, 207, 0.8)",

        error: "#FF5B3A",
        errorpressed: "#B71F1D",
        errorhover: "#DB3A2A",
        errorbackground: "rgba(255, 234, 215, 0.5)",

        greyscale50: "#FAFAFA",
        greyscale100: "#F5F5F5",
        greyscale200: "#EEEEEE",
        greyscale300: "#E0E0E0",
        greyscale400: "#BDBDBD",
        greyscale500: "#9E9E9E",
        greyscale600: "#757575",
        greyscale700: "#616161",
        greyscale800: "#424242",
        greyscale900: "#212121",
      },
      backgroundImage: {
        loginBackground: "url('./src/assets/background1.jpg')",
        registerBackground: "url('./src/assets/background2.jpg')"
      },
      margin: {
        '37px': '37px',
        
      },
      lineHeight: {
        '35.2px': '35.2px'
      },
      height: {
        '663px': '663px',
      },
      width: {
        '529px': '529px',
      },
      padding: {
        '40px': '40px'
      }
    },
  },
  plugins: [],
}

