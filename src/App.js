
import Aos from "aos";
import "./App.css";
import Imagenescomponent from "./components/Imagenescomponent";
import HeaderComponent from "./components/Swswaca trabajo/HeaderComponent";
import "aos/dist/aos.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


import Home from "./pages/Home";
import Page from "./pages/Page";
import Contacto from "./pages/Contacto";
    Aos.init();

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/*" element={<Home />} />
       <Route path="/producto*" element={<Page />} />
       <Route path="/contacto*" element={<Contacto />} />

      
       </Routes>
   </BrowserRouter>
  );
}

export default App;
