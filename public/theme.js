// prevent theme flashing on first render
;(() => {
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    const persistedTheme = localStorage.getItem('theme')
    const theme = persistedTheme || preferredTheme

    if (theme === 'dark') {
        document.documentElement.classList.add('dark')
    }
})()
