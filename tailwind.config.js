/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Courgette':['Courgette','cursive']
      }
//       font-family: 'Poppins', sans-serif;
// font-family: 'Shadows Into Light', cursive;
// font-family: 'Smooch', cursive;
    },
  },
  plugins: [],
}