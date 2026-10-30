/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via a specific class on html/body
  theme: {
    extend: {
      colors: {
        // We'll define some custom sleek colors
        darkBg: '#0f172a',    // slate-900
        darkPaper: '#1e293b', // slate-800
        lightBg: '#f8fafc',   // slate-50
        lightPaper: '#ffffff',
        accentPrimary: '#3b82f6', // blue-500
        accentHover: '#2563eb',   // blue-600
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
