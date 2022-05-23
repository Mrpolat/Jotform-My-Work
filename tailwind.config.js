module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headerBg:"#0A1551",
        loginBg:"#E65700",
        searchBarBg:"#F2F1F9",
        checkBoxBg:"#FFB629",
        lowBlue:"#F3F3FE",
        lightBlue:"#1232d1",
        green:"#0ed128",
        red:"#e22828",
        darkOrange:"#e59604",
        orange:"#ffb629"
      },
      inset:{
        '120px':'120px',
        '85%':'85%'
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      }
    },
  },
  plugins: [],
}