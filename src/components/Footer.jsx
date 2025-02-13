import React from 'react'
import "../Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
    <p>&copy; {new Date().getFullYear()} mi componente. Todos los derechos reservados.</p>
    <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
          facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i>
          twitter/X
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
          instagram
        </a>
      </div>
  </footer>

  );
  };   
 export default Footer
