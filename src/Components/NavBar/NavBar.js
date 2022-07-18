import { NavLink} from "react-router-dom";
import { MdOutlineWorkOutline } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

export default function navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-sm navbar-light ">
      <NavLink className="navbar-brand" to="/"><span><i><MdOutlineWorkOutline /></i></span></NavLink> <NavLink className="navbar-brand" to="/"> Ber</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>   
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="Experiencia">Experiencia</NavLink>
            <NavLink className="nav-item nav-link" to="Cursos">Educación</NavLink>
            <NavLink className="nav-item nav-link" to="Tecnologias">Tecnologias</NavLink>
          </div>
      
      </nav>
    </div>
  )
}
