import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!email) {
            setError('Escribe tu correo')
            return
        }

        setLoading(true)
        try {
            // Aquí va tu llamada real al backend:
            // const res = await fetch('/api/forgot-password', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email }),
            // })
            // if (!res.ok) throw new Error('No se pudo enviar el correo')

            await new Promise((r) => setTimeout(r, 800)) // simulación
            setSent(true)
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
                            <h2 className="text-center mb-3">Recuperar contraseña</h2>
                            <p className="text-body-secondary text-center">
                                Escribe tu correo y te enviaremos un enlace para restablecerla.
                            </p>

                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            {sent ? (
                                <div className="alert alert-success" role="alert">
                                    Si el correo existe, recibirás las instrucciones en unos minutos.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Correo</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete="email"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                        {loading ? 'Enviando...' : 'Enviar enlace'}
                                    </button>
                                </form>
                            )}

                            <p className="text-center mt-3 mb-0">
                                <Link to="/login">Volver a iniciar sesión</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}