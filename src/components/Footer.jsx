import React from 'react'
import "../../Footer.css";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
    <p>&copy; {new Date().getFullYear()} mi componente. Todos los derechos reservados.</p>
    <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
  </footer>

  );
  };   
 export default Footer
