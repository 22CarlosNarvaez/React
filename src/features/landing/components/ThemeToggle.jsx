import { useTheme } from '../../../shared/hooks/useTheme'

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={toggleTheme}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
            {isDark ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
    )
}