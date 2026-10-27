import { NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { ThemeToggle } from './ThemeToggle'

/* Icono de la marca (SVG en línea, hereda currentColor) */
const FlaskIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 006.2 21h11.6a2 2 0 001.7-2.5L14 9V3" />
        <path d="M7.5 15h9" />
    </svg>
)

/* Enlaces principales */
const links = [
    { to: '/', label: 'Inicio', end: true },
    { to: '/props', label: 'Props' },
    { to: '/api', label: 'API' },
]


const menus = [
    {
        label: 'Cuenta',
        items: [
            { to: '/login', label: 'Iniciar sesión' },
            { to: '/register', label: 'Registrarse' },
            { divider: true },
            { to: '/forgot-password', label: 'Recuperar contraseña' }
        ]
    },
    {
        label: 'Más opciones',
        items: [
            { label: 'Mi perfil' },
            { label: 'Configuración' },
            { label: 'Notificaciones' },
            { divider: true },
            { label: 'Ayuda y soporte' },
            { label: 'Términos y condiciones' }
        ]
    }
]

const linkClass = ({ isActive }) =>
    `nav-link rounded-pill px-3 ${isActive ? 'bg-body-secondary fw-medium' : ''}`

export const Header = () => {
    return (
        <header className="sticky-top">
            {/* bg-body-tertiary + border-bottom se adaptan solos al tema claro/oscuro */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom py-2">
                <div className="container">

                    {/* Marca */}
                    <NavLink
                        to="/"
                        className="navbar-brand d-flex align-items-center gap-2 fw-semibold"
                    >
                        <span
                            className="d-inline-flex align-items-center justify-content-center rounded-3 bg-primary-subtle text-primary-emphasis"
                            style={{ width: 32, height: 32 }}
                        >
                            <FlaskIcon />
                        </span>
                        Red Science
                    </NavLink>

                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Mostrar menú"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                        {/* Enlaces y menús */}
                        <ul className="navbar-nav me-auto gap-lg-1 mt-3 mt-lg-0">
                            {links.map(({ to, label, end }) => (
                                <li className="nav-item" key={to}>
                                    <NavLink to={to} end={end} className={linkClass}>
                                        {label}
                                    </NavLink>
                                </li>
                            ))}

                            {menus.map(({ label, items }) => (
                                <li className="nav-item dropdown" key={label}>
                                    <button
                                        type="button"
                                        className="nav-link dropdown-toggle rounded-pill px-3 bg-transparent border-0"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {label}
                                    </button>

                                    <ul className="dropdown-menu border rounded-3 shadow-sm p-2">
                                        {items.map((item, index) =>
                                            item.divider ? (
                                                <li key={`divider-${index}`}>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                            ) : (
                                                <li key={item.label}>
                                                    {item.to ? (
                                                        <NavLink
                                                            to={item.to}
                                                            className="dropdown-item rounded-2"
                                                        >
                                                            {item.label}
                                                        </NavLink>
                                                    ) : (
                                                        <button
                                                            type="button"
                                                            className="dropdown-item rounded-2"
                                                        >
                                                            {item.label}
                                                        </button>
                                                    )}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>

                        {/* Buscador + tema (tus componentes) */}
                        <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
                            <SearchBar />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}