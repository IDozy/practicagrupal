import React from "react";
import "./Menu.css";
const HeaderComponent = () => {
  return (
    <header>
      <div className="menu-container">
        <nav>
          <ul className="menu-links">
          <div className="imagen" data-aos="fade-right" >
            <img src="https://th.bing.com/th/id/R.0aeacdf4f084968b586c1ee353cf41b3?rik=mPbbn9J4Lne51A&riu=http%3a%2f%2fwww.pleated-jeans.com%2fwp-content%2fuploads%2f2014%2f06%2fGCRPzTs-1.jpg&ehk=4Ei00dzhaceH5LDVjhP%2bntRI65P4FCSYZXeFHL1Zt3g%3d&risl=&pid=ImgRaw&r=0">
            </img>
          </div>
            <li data-aos="fade-up">
              <a href="#inicio">Inicio</a>
            </li>
            <li data-aos="fade-up">
              <a href="#producto">Producto</a>
            </li>
            <div className="boton-especial" >
              <li data-aos="fade-up">
                <a href="#contacto">Contacto</a>
              </li>
            </div>
          </ul>
        </nav>
      </div>

     
    </header>
  );
};

export default HeaderComponent;
