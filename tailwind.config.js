const defaultTheme = require('tailwindcss/defaultTheme')
const withAnimations = require('animated-tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
        './data/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans]
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '0.8rem',
                    sm: '1rem'
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')({ strategy: 'class' })]
})
