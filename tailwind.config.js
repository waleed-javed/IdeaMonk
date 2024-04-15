/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#878af5',
        secondary: '#666af6',
        accent:'#9333ea',
        support: '#31446c',
        yellow: '#f5a921',
        orange: '#f4863c',
      },
      fontFamily: {
        'poppins-light' :['PoppinsLight'],
        'poppins-thin' :['PoppinsThin'],
        'poppins-semiBold':['PoppinsSemiBold'],
        'poppins-black' :['PoppinsBlack'],
        }
    },
  },
  plugins: [],
};
