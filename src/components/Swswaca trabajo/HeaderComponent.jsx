import React from "react";
import "./Menu.css";
const HeaderComponent = () => {
  return (
    <header>
      <div className="menu-container">
        <nav>
          <ul className="menu-links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#producto">Producto</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
