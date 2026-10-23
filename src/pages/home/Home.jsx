import React, { useEffect, useState } from 'react'
import TarjetaPerfil from '../../components/TarjetaPerfil'
import "./home.css"
import { Navbar } from '../../components/Navbar'
import { TarjetaProducto } from '../../components/TarjetaProducto/TarjetaProducto'


export const Home = () => {

    const [productos, setProductos] = useState([])


    const obtenerProductos = async () => {
        const respuesta = await fetch("https://6ad158aaaddc5b5cb142f749.mockapi.io/productos")
        const data = await respuesta.json()
        setProductos(data)
    }

    useEffect(() => {
        obtenerProductos()

    }, [])
    




    return (
        <>
            <Navbar />
            <div className='home'>
                <h1>Catalogo</h1>

        <div className='catalogo'>
            {
                productos.map(product => (
                    <TarjetaProducto producto={product}/>

                ))

            }
        </div>
            </div>
        </>

    )
}
