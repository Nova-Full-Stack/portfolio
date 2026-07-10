import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

// Must match the dark-first resolution in public/theme.js, or the icon shown
// here will disagree with the class already on <html>.
const resolveTheme = () => {
    const persistedTheme = localStorage.getItem('theme')
    if (persistedTheme) return persistedTheme
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function ThemeToggler() {
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        setTheme(resolveTheme())
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        localStorage.setItem('theme', next)
        document.documentElement.classList.toggle('dark', next === 'dark')
    }

    // Rendering nothing until mounted keeps the icon from contradicting the
    // theme that theme.js already applied.
    if (!mounted) return <div className="w-9 h-9" aria-hidden="true" />

    return (
        <button
            className="flex justify-center items-center w-9 h-9 rounded-md text-muted hover:text-fg hover:bg-surface border border-transparent hover:border-line transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <FiSun className="w-[18px] h-[18px]" /> : <FiMoon className="w-[18px] h-[18px]" />}
        </button>
    )
}
