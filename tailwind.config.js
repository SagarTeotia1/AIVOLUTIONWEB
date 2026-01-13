/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a31bf6", // Neon Purple
        secondary: "#0ea5e9", // Cyan
        dark: "#09090b", // Deep Black
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'banner-gradient': 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3))',
      }
    },
  },
  plugins: [],
}