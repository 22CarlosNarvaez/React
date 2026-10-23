import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: '',
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!form.nombre || !form.email || !form.password || !form.confirmar) {
            setError('Completa todos los campos')
            return
        }
        if (form.password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres')
            return
        }
        if (form.password !== form.confirmar) {
            setError('Las contraseñas no coinciden')
            return
        }

        setLoading(true)
        try {
            // Aquí va tu llamada real al backend:
            // const res = await fetch('/api/register', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({
            //         nombre: form.nombre,
            //         email: form.email,
            //         password: form.password,
            //     }),
            // })
            // if (!res.ok) throw new Error('No se pudo crear la cuenta')

            await new Promise((r) => setTimeout(r, 800)) // simulación
            navigate('/login')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Crear cuenta</h2>

                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        className="form-control"
                                        value={form.nombre}
                                        onChange={handleChange}
                                        autoComplete="name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        value={form.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        value={form.password}
                                        onChange={handleChange}
                                        autoComplete="new-password"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmar" className="form-label">Confirmar contraseña</label>
                                    <input
                                        id="confirmar"
                                        name="confirmar"
                                        type="password"
                                        className="form-control"
                                        value={form.confirmar}
                                        onChange={handleChange}
                                        autoComplete="new-password"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                    {loading ? 'Creando cuenta...' : 'Registrarme'}
                                </button>
                            </form>

                            <p className="text-center mt-3 mb-0">
                                ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}