import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!form.email || !form.password) {
            setError('Completa todos los campos')
            return
        }

        setLoading(true)
        try {
            // Aquí va tu llamada real al backend, por ejemplo:
            // const res = await fetch('/api/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(form),
            // })
            // if (!res.ok) throw new Error('Credenciales incorrectas')

            await new Promise((r) => setTimeout(r, 800)) // simulación
            navigate('/')
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
                            <h2 className="text-center mb-4">Iniciar sesión</h2>

                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
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
                                        autoComplete="current-password"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                    {loading ? 'Entrando...' : 'Entrar'}
                                </button>
                            </form>

                            <div className="d-flex justify-content-between mt-3">
                                <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                                <Link to="/register">Crear cuenta</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}