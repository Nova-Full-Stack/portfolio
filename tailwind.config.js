const defaultTheme = require('tailwindcss/defaultTheme')
const withAnimations = require('animated-tailwindcss')

/**
 * Colors are semantic tokens, not raw hues. Each maps to a CSS variable defined
 * for both themes in styles/index.css, so `bg-surface` is correct in light and
 * dark without a `dark:` variant. Reach for a literal Tailwind color only when
 * the value genuinely should not flip between themes.
 */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

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
            colors: {
                canvas: token('canvas'),
                surface: token('surface'),
                line: token('line'),
                fg: token('fg'),
                muted: token('muted'),
                accent: token('accent'),
                'accent-fg': token('accent-fg')
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            },
            letterSpacing: {
                tightest: '-0.045em'
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1.25rem',
                    sm: '1.5rem',
                    lg: '2rem'
                },
                screens: {
                    xl: '1120px'
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')({ strategy: 'class' })]
})
