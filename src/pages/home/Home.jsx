import React from 'react'
import TarjetaPerfil from '../../components/TarjetaPerfil'
import "./home.css"
import { Navbar } from '../../components/Navbar'


export const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home'>
                <TarjetaPerfil />
            </div>
        </>

    )
}
