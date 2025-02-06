
import Aos from "aos";
import "./App.css";
import AlexComponent from "./components/AlexComponent";
import Imagenescomponent from "./components/Imagenescomponent";
import HeaderComponent from "./components/Swswaca trabajo/HeaderComponent";
import "aos/dist/aos.css"
    Aos.init();

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <section id="inicio">
        <h1>Bienvenido a la sección de Inicio</h1>
      </section>
      <section id="producto">
        <h1>Nuestros Productos</h1>
      </section>
      <section id="contacto">
        <h1>Contáctanos</h1>
      </section>
      <AlexComponent /> 
      <Imagenescomponent />
      
    </div>
  );
}

export default App;
