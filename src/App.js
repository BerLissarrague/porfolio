import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Cursos from "./Pages/Cursos";
import Experiencia from "./Pages/Experiencia";
import Tecnologias from "./Pages/Tecnologias";
import Proyectos from "./Pages/Proyectos";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path="Porfolio" element={<Home />} />
        <Route path="Porfolio/Experiencia" element={<Experiencia />} />
        <Route path="Porfolio/Cursos" element={<Cursos />} />
        <Route path="Porfolio/Tecnologias" element={<Tecnologias />} />
        <Route path="Porfolio/Proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  );
}
