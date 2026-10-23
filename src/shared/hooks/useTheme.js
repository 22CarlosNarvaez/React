import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved === 'light' || saved === 'dark') return saved
    } catch {
        /* localStorage no disponible */
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
}

export function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme)
        try {
            localStorage.setItem(STORAGE_KEY, theme)
        } catch {
            /* ignorar */
        }
    }, [theme])

    const toggleTheme = () =>
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

    return { theme, toggleTheme }
}