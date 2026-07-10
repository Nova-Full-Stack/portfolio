// Runs before paint to prevent a theme flash on first render.
//
// Dark-first: dark is the brand default. We only start in light mode when the
// visitor has explicitly stored that choice, or their OS explicitly asks for
// light. `prefers-color-scheme: no-preference` therefore lands on dark.
;(() => {
    const persistedTheme = localStorage.getItem('theme')
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    const theme = persistedTheme || (prefersLight ? 'light' : 'dark')

    document.documentElement.classList.toggle('dark', theme === 'dark')
})()
