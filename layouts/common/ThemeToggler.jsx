import { useEffect, useRef, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggler() {
    const updateRef = useRef(false)
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState('light')

    // fire on first render
    useEffect(() => {
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'

        setMounted(true)
        setTheme(localStorage.getItem('theme') || preferredTheme)
    }, [])

    // fire on every theme update
    useEffect(() => {
        if (!updateRef.current) {
            updateRef.current = true
            return
        }
        document.documentElement.classList.toggle('dark', theme === 'dark')
    }, [theme])

    // fire on button click
    const toggleTheme = () => {
        setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
    }

    return (
        mounted && (
            <button
                className="flex justify-center items-center bg-indigo-100 dark:bg-indigo-300 text-indigo-400 dark:text-indigo-500 rounded-full w-11 h-11 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-400"
                aria-label="Toggle Theme"
                onClick={toggleTheme}
            >
                {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
        )
    )
}
