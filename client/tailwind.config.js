
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  fontFamily: {
    sans: ["Source Sans 3", "sans-serif"],
  },
  theme: {
    extend: {
      fontFamily: {
        custom: [
          '"SF Pro Text"',
          '"SF Pro Icons"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
