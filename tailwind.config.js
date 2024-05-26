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
            textPrimary: '#1E2A32', // Used for normal text
            textSecondary: '#595D7B', // Use for numbers, button outlined text color
            purpleGray: '#595D7B',
            textMuted: '#EEEEEE', // Used in input placeholder
            textLabel: '#4D6475', // Used in datepicker year text color and label text color
            border: '#E9EEF2', // Used in button border, datepicker, input
            backgroundHover: '#F3F5FE', // Used in button hover color
            midnightPurple: '#423C66', // Used in button primary background and input border focus color
            twilightPurple: '#645D93', // Used in button primary variant on hover
            darkMidnightPurple: '#241E47', // Used in button primary active color
            lavenderMist: '#B2A7F4', // Used in button outlined hover & active color
            salmon: '#FFDBCB',
            closeButtonActive: '#F2D0C1', // close
            backgroundInfo: '#F4F8FA',
        },
    },
}
