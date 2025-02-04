
import "./App.css";
import AlexComponent from "./components/AlexComponent";
import HeaderComponent from "./components/Swswaca trabajo/HeaderComponent";

function App() {
  return (
    <div className="App">
      <div>
        Ahí mi gatito miau miau
        <h1>Dios es la piedad, Xd</h1>
      </div>
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
    </div>
  );
}

export default App;
