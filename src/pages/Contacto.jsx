import React, { useState } from 'react'
import HeaderComponent from '../components/Swswaca trabajo/HeaderComponent'
import './Contacto.css';


const Contacto = () => {
    const [formData, setFormData] = useState({
        Nombre: '',
        Apellido: '',
        Correo: '',
        Mensaje: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
      };
    
  return (
    <>
    <div> <HeaderComponent/></div>

    <div className="container">
      <div className="box">
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGuUyN7JxTAGSf5meoos0ajHeGpfS3H_9xA&s" alt="Contact" className="image" />
        </div>
        <div className="form-container">
          <h2 className="title">Contactanos</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="texto" name="Nombre" placeholder="Nombre" value={formData.firstName} onChange={handleChange} required className="input" />
              <input type="texto" name="apellido" placeholder="apellido" value={formData.lastName} onChange={handleChange} required className="input" />
            </div>
            <input type="Correo" name="correo" placeholder="correo" value={formData.email} onChange={handleChange} required className="input" />
            <textarea name="mensaje" placeholder="deja unas palabras aquí" value={formData.message} onChange={handleChange} required className="textarea"></textarea>
            <button type="enviar" className="button">Enviar</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contacto