import React, { useEffect, useState } from 'react'
import "./login.css"
import { useAuth } from '../../contexts/AuthContext'

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [modo, setModo] = useState('login')



    const { login, registro } = useAuth()


    const esRegistro = modo === 'registro'

    const cambiarModo = (nuevoModo) => {
        console.log("nuevoModo");
        
        setModo(nuevoModo)

    }

    useEffect(() => {
      
    }, [modo])
    




    return (
        <div className='login'>
            <div className='login-card'>
            

                <span className='login-icono'>☕</span>
                <h1>Hola de nuevo</h1>
                <p className="login-sub">Ingresá para seguir donde lo dejaste</p>

                {
                    esRegistro && (
                        <label>
                            Nombre
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Tu nombre"
                                required
                            />
                        </label>
                    )
                }

                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                    />
                </label>

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


                {
                    esRegistro ? (
                    <button onClick={() => registro(nombre, email, password)}>Registrarte</button>

                    ) : (
                    <button onClick={() => login(email, password)}>Entrar</button>

                    )
                }

                {
                    esRegistro ? (
                        <button onClick={() => cambiarModo("login")}> Queres ingresar a tu cuenta?</button>
                    ) : (
                        <button onClick={() => cambiarModo("registro")}> Queres crear una cuenta?</button>
                    )
                }
            </div>
        </div>
    )
}
