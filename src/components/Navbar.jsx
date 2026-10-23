import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export const Navbar = () => {

   const { usuario, logout, esAdmin } = useAuth()

  return (
    <nav className="navbar">
      <span className="navbar-logo">☕ Mi App</span>
      <div className="navbar-derecha">
        <span>{usuario.nombre}</span>

      {
        esAdmin && (
        <Link to="/crear-producto">Crear Producto</Link>

        )
      }

        {/* Al hacer clic, logout pone el usuario en null.
            App se entera y nos devuelve al Login. Todo solo. */}
        <button onClick={logout}>Salir</button>
      </div>
    </nav>
  )
}
