import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
      <Route exact path="porfolio" element={<Home />} />
      <Route path="porfolio/Experiencia" element={<Experiencia />} />
      <Route path="porfolio/Cursos" element={<Cursos />} />
      <Route path="porfolio/Tecnologias" element={<Tecnologias />} />
      <Route path="porfolio/Proyectos" element={<Proyectos />} />
      <Route path="*" element={<Navigate to="porfolio" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
