import { Header } from './features/landing/components/Header'
import { Main } from './features/landing/components/Main'
import { Footer } from './features/landing/components/Footer'
import { Login } from './features/auth/components/Login'
import { Register } from './features/auth/components/Register'
import { ForgotPassword } from './features/auth/components/ForgotPassword'
import { Props } from './features/landing/components/Props'
import { Api } from './features/landing/components/Api'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter basename="/React">
            <div className="d-flex flex-column min-vh-100">
                <Header />

                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/props" element={<Props />} />
                        <Route path="/api" element={<Api />} />

                        <Route
                            path="*"
                            element={
                                <h2 className="text-center my-5">
                                    404 - Página no encontrada
                                </h2>
                            }
                        />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
