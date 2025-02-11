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
      <div className="map=container" style {{ widht:"100%"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220161.0138433236!2d-78.92560216161725!3d49.3768950352626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d146da51c2739f%3A0xd6ad9c2d7c2caad9!2sLima%2C%20Nueva%20York%2014485%2C%20EE.%20UU.!5e1!3m2!1ses-419!2spe!4v1739284716508!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    
  )
}

export default Imagenescomponent
