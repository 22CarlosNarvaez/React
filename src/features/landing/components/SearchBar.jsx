import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const q = query.trim()
        if (!q) return
        navigate(`/search?q=${encodeURIComponent(q)}`)
    }

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
                className="form-control form-control-sm me-2"
                style={{ maxWidth: '180px' }}
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-primary btn-sm" type="submit">
                Buscar
            </button>
        </form>
    )
}