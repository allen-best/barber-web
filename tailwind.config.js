/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Sienna - A nice brown
        secondary: '#D2B48C', // Tan - Lighter brown accent
        accent: '#4A3B31', // Dark Chocolate - For emphasis
        neutral: '#f4f4f4', // Light gray for backgrounds
        textPrimary: '#333333', // Dark text
        textSecondary: '#777777', // Lighter text
        textTertiary: '#B2B2B2', // Even lighter text
        textWhite: '#FFFFFF', // White text
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'], // Elegant serif for headings
        'body': ['Montserrat', 'sans-serif'], // Clean sans-serif for body
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}