import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { links, menus } from './Navitems'

/* "Contraseña" -> "contrasena": ignora mayúsculas y tildes al comparar */
const normalize = (text) =>
    text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()

/* Lista plana de destinos buscables, sacada de navItems.js */
const destinations = [
    ...links.map((link) => ({
        label: link.label,
        to: link.to,
        terms: [link.label, ...(link.keywords ?? [])].map(normalize)
    })),
    ...menus.flatMap((menu) => [
        ...(menu.to
            ? [
                  {
                      label: menu.label,
                      to: menu.to,
                      terms: [menu.label, ...(menu.keywords ?? [])].map(normalize)
                  }
              ]
            : []),
        ...menu.items
            .filter((item) => item.to)
            .map((item) => ({
                label: item.label,
                parent: menu.label,
                to: item.to,
                terms: [item.label, ...(item.keywords ?? [])].map(normalize)
            }))
    ])
]

const scoreOf = (destination, q) =>
    destination.terms.reduce((best, term) => {
        if (term === q) return Math.max(best, 3)
        if (term.startsWith(q)) return Math.max(best, 2)
        if (term.includes(q)) return Math.max(best, 1)
        return best
    }, 0)

const findMatches = (query) => {
    const q = normalize(query)
    if (!q) return []

    return destinations
        .map((destination) => ({ destination, score: scoreOf(destination, q) }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ destination }) => destination)
        .slice(0, 5)
}

const SearchIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
    </svg>
)

export const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(-1)
    const navigate = useNavigate()

    const matches = useMemo(() => findMatches(query), [query])
    const showList = open && matches.length > 0

    const goTo = (path) => {
        navigate(path)
        setQuery('')
        setOpen(false)
        setActive(-1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const q = query.trim()
        if (!q) return

        // 1) Sugerencia elegida con el teclado, o la mejor coincidencia
        const target = matches[active] ?? matches[0]
        if (target) return goTo(target.to)

        // 2) Si no coincide con la navbar, búsqueda general como antes
        goTo(`/search?q=${encodeURIComponent(q)}`)
    }

    const handleKeyDown = (e) => {
        if (!matches.length) return

        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setOpen(true)
            setActive((i) => (i + 1) % matches.length)
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setActive((i) => (i <= 0 ? matches.length - 1 : i - 1))
        } else if (e.key === 'Escape') {
            setOpen(false)
            setActive(-1)
        }
    }

    return (
        <form
            className="position-relative"
            role="search"
            onSubmit={handleSubmit}
        >
            <div className="input-group input-group-sm" style={{ minWidth: 200 }}>
                <button
                    className="input-group-text bg-body border-end-0 rounded-start-pill ps-3 text-body-secondary"
                    type="submit"
                    aria-label="Buscar"
                >
                    <SearchIcon />
                </button>

                <input
                    className="form-control bg-body border-start-0 rounded-end-pill shadow-none"
                    type="search"
                    placeholder="Buscar..."
                    aria-label="Buscar"
                    autoComplete="off"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setOpen(true)
                        setActive(-1)
                    }}
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {showList && (
                <ul
                    className="dropdown-menu show w-100 mt-1 p-2 border rounded-3 shadow-sm"
                    role="listbox"
                >
                    {matches.map((item, index) => (
                        <li key={item.to + item.label} role="option" aria-selected={index === active}>
                            <button
                                type="button"
                                className={`dropdown-item rounded-2 d-flex justify-content-between align-items-center gap-2 ${
                                    index === active ? 'active' : ''
                                }`}
                                // mouseDown (no click) para que el blur del input no cierre la lista antes
                                onMouseDown={(e) => {
                                    e.preventDefault()
                                    goTo(item.to)
                                }}
                            >
                                {item.label}
                                {item.parent && (
                                    <small className="opacity-75">{item.parent}</small>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </form>
    )
}