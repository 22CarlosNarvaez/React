import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { ThemeToggle } from './ThemeToggle'

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">Mi PWA</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Mostrar menú">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink to="/" end className="nav-link">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Iniciar sesión</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">Registrarse</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Precios</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Más opciones
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Acción</a></li>
                                    <li><a className="dropdown-item" href="#">Otra acción</a></li>
                                    <li><a className="dropdown-item" href="#">Algo más aquí</a></li>
                                </ul>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
                            <SearchBar />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}