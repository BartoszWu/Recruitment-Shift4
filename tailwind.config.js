/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    colors: {
      textPrimary: '#1E2A32', // Used for normal text
      textSecondary: '#595D7B', // Use for numbers
      textMuted: '#EEEEEE',
      textLabel: '#4D6475'
    }
  },
}

