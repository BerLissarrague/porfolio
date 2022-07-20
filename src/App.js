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
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="Experiencia" element={<Experiencia />} />
        <Route path="Cursos" element={<Cursos />} />
        <Route path="Tecnologias" element={<Tecnologias />} />
        <Route path="Proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  );
}
