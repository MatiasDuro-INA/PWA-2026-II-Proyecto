import React from 'react'
import "./TarjetaProducto.css"

export const TarjetaProducto = ({producto}) => {

    console.log("PRODUCTO IMAGENES: ", producto.imagenes[0] );
    

  return (
    <div className='tarjeta-producto'>
        <div className='tarjeta-producto-imagen'>
            <img src={producto.imagenes[0] ? producto.imagenes[0] : "https://researchmg.com/clientes/modules/products/uploads/no-product.png" } alt={producto.nombre}/>
        </div>

        <div className='tarjeta-producto-info'>
            <h3>{producto.nombre}</h3>
            <span className='tarjeta-producto-precio'>${producto.precio}</span>
        </div>
    </div>
  )
}
