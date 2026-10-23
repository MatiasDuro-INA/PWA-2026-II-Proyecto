import React, { useState } from 'react'
import "./crearProducto.css"


const MAX_IMAGENES = 4


export const CrearProducto = () => {


    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [imagenes, setImagenes] = useState(Array(MAX_IMAGENES).fill(""))
    const [error, setError] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [enviando, setEnviando] = useState(false)


    const cambiarImagen = (indice, valor) => {
        const nuevas = [...imagenes]
        nuevas[indice] = valor
        setImagenes(nuevas)
    }

    const crearProducto = async (producto) => {

        //  const body = {
        //     nombre, email, password
        // }

        // const response = await fetch("https://6ad158aaaddc5b5cb142f749.mockapi.io/usuarios", {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(body)
        // })
        // const nuevoUsuario = await response.json()

        const response = await fetch("https://6ad158aaaddc5b5cb142f749.mockapi.io/productos", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        })

        const nuevoProducto = await response.json()

        return nuevoProducto;

    }

    const handleSubmit = async () => {

        const links = imagenes.filter(link => link !== "")


        const producto = {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            imagenes: links
        }

        try {
            setEnviando(true)
            await crearProducto(producto)
            setMensaje("Producto Creado!")

        } catch (error) {
            setError(error.message)
        } finally {
            setEnviando(false)
        }


    }

    return (
        <div className="crear-producto">

            <h1>Nuevo Producto</h1>

            <div className="crear-producto-card">


                <label>
                    Nombre
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Café de especialidad"
                        required
                    />
                </label>

                <label>
                    Descripción
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        placeholder="Contá un poco sobre el producto"
                        rows={4}
                        required
                    />
                </label>

                <label>
                    Precio
                    <input
                        type="number"
                        min="1"
                        step="0.01"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        placeholder="8500"
                        required
                    />
                </label>

                <fieldset>
                    <legend>Imágenes (hasta {MAX_IMAGENES})</legend>
                    {imagenes.map((link, i) => (
                        <input
                            key={i}
                            type="url"
                            value={link}
                            onChange={(e) => cambiarImagen(i, e.target.value)}
                            placeholder={i === 0 ? "Imagen principal (.jpg, .jpeg o .png)" : `Imagen ${i + 1} (opcional)`}
                            required={i === 0}
                        />
                    ))}
                </fieldset>

                <button onClick={handleSubmit} disabled={enviando}>
                    {enviando ? "Guardando..." : "Crear producto"}
                </button>

                {error && <p className='crear-producto-error'>{error}</p>}
                {mensaje && <p className='crear-producto-ok'>{mensaje}</p>}
            </div>
        </div>
    )
}
