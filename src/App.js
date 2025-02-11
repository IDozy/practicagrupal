
import Aos from "aos";
import "./App.css";
import Imagenescomponent from "./components/Imagenescomponent";
import HeaderComponent from "./components/Swswaca trabajo/HeaderComponent";
import "aos/dist/aos.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
    Aos.init();

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/*" element={<Home />} />
       <Route path="/producto*" element={<Page />} />


      
       </Routes>
   </BrowserRouter>
  );
}

export default App;
