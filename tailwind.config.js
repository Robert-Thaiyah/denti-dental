/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors:{
        'dental-blue': "#9DF9F4"
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

