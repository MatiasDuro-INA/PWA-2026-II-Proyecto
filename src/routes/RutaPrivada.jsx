import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const RutaPrivada = () => {

    // Ruta privada = QUE NO SE PUEDA ACCEDER SIN ESTAR LOGEADO

    const { usuario } = useAuth()

    if(!usuario) return <Navigate to="/login" replace/>

  return (
    <>
       <h1>Ruta privada</h1> 

       {/* OUTLET = RENDERIZA LOS CHILDREN DE DICHA RUTA  */}
        <Outlet/>
    </>
    
  )
}
