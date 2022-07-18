import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import Cursos from './Pages/cursos';
import Experiencia from './Pages/experiencia';
import Tecnologias from './Pages/tecnologias';
import Home from './Pages/home'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/porfolio" element={< Home />} />
        <Route path="/" element={< Home />} />
        <Route path="experiencia" element={< Experiencia />} />
        <Route path="Cursos" element={<Cursos />} />
        <Route path="Tecnologias" element={<Tecnologias />} />
      </Routes>
    </BrowserRouter>
  );
}


