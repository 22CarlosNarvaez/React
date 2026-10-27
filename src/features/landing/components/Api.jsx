import { useEffect, useState } from 'react'

const API_URL = 'https://rickandmortyapi.com/api/character'

const STATUS_STYLES = {
  Alive: 'text-bg-success',
  Dead: 'text-bg-danger',
  unknown: 'text-bg-secondary',
}

// Genera [1, '...', 4, 5, 6, '...', 42] según la página actual
const getPageNumbers = (current, total) => {
  const delta = 1
  const pages = []
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...')
    }
  }
  return pages
}

export const Api = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const timer = setTimeout(async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `${API_URL}?page=${page}&name=${encodeURIComponent(search.trim())}`,
          { signal: controller.signal }
        )

        // La API responde 404 cuando no hay coincidencias
        if (response.status === 404) {
          setCharacters([])
          setTotalPages(1)
          return
        }
        if (!response.ok) throw new Error('Error al consultar la API')

        const data = await response.json()
        setCharacters(data.results)
        setTotalPages(data.info.pages)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }, 400)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [search, page])

  const handleSearch = (value) => {
    setSearch(value)
    setPage(1) // al buscar, vuelve a la primera página
  }

  const goToPage = (n) => {
    if (n < 1 || n > totalPages || n === page) return
    setPage(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Consumo API Rick and Morty</h1>

      {/* Buscador */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6">
          <div className="input-group">
            <span className="input-group-text">🔍</span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar personaje por nombre..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Estados */}
      {loading && (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && characters.length === 0 && (
        <div className="alert alert-warning text-center">
          No se encontraron personajes con ese nombre.
        </div>
      )}

      {/* Tarjetas */}
      {!loading && !error && (
        <div className="row g-4">
          {characters.map((character) => (
            <div
              key={character.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={character.image}
                  className="card-img-top"
                  alt={character.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <span
                    className={`badge ${
                      STATUS_STYLES[character.status] ?? 'text-bg-secondary'
                    }`}
                  >
                    {character.status}
                  </span>
                  <p className="card-text text-muted mt-2 mb-0">
                    {character.species} · {character.gender}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Paginado */}
      {!error && characters.length > 0 && totalPages > 1 && (
        <nav className="mt-5" aria-label="Paginación">
          <ul className="pagination justify-content-center flex-wrap">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => goToPage(page - 1)}>
                Anterior
              </button>
            </li>

            {getPageNumbers(page, totalPages).map((p, i) =>
              p === '...' ? (
                <li key={`dots-${i}`} className="page-item disabled">
                  <span className="page-link">…</span>
                </li>
              ) : (
                <li key={p} className={`page-item ${p === page ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => goToPage(p)}>
                    {p}
                  </button>
                </li>
              )
            )}

            <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => goToPage(page + 1)}>
                Siguiente
              </button>
            </li>
          </ul>
          <p className="text-center text-muted small">
            Página {page} de {totalPages}
          </p>
        </nav>
      )}
    </div>
  )
}