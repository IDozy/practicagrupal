import React from 'react'
import './Imagenescomoponent.css'
const Imagenescomponent = () => {
  return (
    <div className='container' style={{backgroundcolor:"red"}}> 
      <div className='Imagen' style={{marginRight:"50px"}}>
        <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="imagen" />
      </div>

      <div data-aos="zoom-in-left"><p> Desde el Horizonte se veía aquellos jinetes que galopaban hacía su destino con intenciones de saquear las aldeas cercanas de aquello valles cálidos y tranquilos ,un joven sin poder hacer nada para salvar a sus seres queridos miraba hacía la Luna llena esperando sentado a que todo esto terminara.</p></div>

    </div>
    
  )
}

export default Imagenescomponent
