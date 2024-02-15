/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
fontFamily:{
  'Dm-sans': "'DM Sans', sans-serif",
  'Nunito': "'Nunito', sans-serif",
},
    },
    boxShadow:{
      'white':'0px 0px 20px 0px #FFF',
      'green':'0px 0px 20px 0px #6CBCFE',
      'card-shadow':'0px 20px 50px 0px #3B3E430D',
      'card2': '0px 20px 50px 0px #3B3E430D',

    }
  },
  plugins: [],
}

