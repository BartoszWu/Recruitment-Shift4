/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        fontFamily: {
            sans: ['Work Sans', 'sans-serif'],
            workSans: ['Work Sans', 'sans-serif'],
            rubik: ['Rubik', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
        },
        fontSize: {
            xs: ['12px', '16px'],
            sm: ['14px', '18px'],
            base: ['16px', '20px'],
            '2xl': ['1.5rem', '2rem'], //24px
            '3xl': ['32px', '38px'],
        },
        colors: {
            white: '#ffffff',
            textPrimary: '#1E2A32',
            textSecondary: '#3D4256',
            textMuted: '#EEEEEE',
            textLabel: '#4D6475',
            border: '#E9EEF2',
            backgroundPage: '#F4F8FA',
            backgroundHover: '#F3F5FE',
            backgroundInfo: '#F4F8FA',
            buttonPrimary: '#423C66',
            buttonPrimaryHover: '#645D93',
            buttonPrimaryActive: '#241E47',
            buttonOutlinedHover: '#B2A7F4',
            alertBackground: '#FFDBCB',
            closeButtonActive: '#F2D0C1',
        },
    },
}
