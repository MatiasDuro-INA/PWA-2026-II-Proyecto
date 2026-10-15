import React, { useState } from 'react'
import "./login.css"
import { useAuth } from '../../contexts/AuthContext'

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login } = useAuth()



    return (
        <div className='login'>
            <div className='login-card'>
                <span className='login-icono'>☕</span>
                <h1>Hola de nuevo</h1>
                <p className="login-sub">Ingresá para seguir donde lo dejaste</p>

               
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                    />

                <label>
                    Contraseña
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••"
                        required
                    />
                </label>

                <button onClick={() => login(email, password)}>Entrar</button>
            </div>
        </div>
    )
}
