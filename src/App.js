
import Aos from "aos";
import "./App.css";

import Imagenescomponent from "./components/Imagenescomponent";
import HeaderComponent from "./components/Swswaca trabajo/HeaderComponent";
import "aos/dist/aos.css"
    Aos.init();

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
       
      <Imagenescomponent />
      
      
    </div>
  );
}

export default App;
