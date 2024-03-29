import { NavLink } from "react-router-dom";
import cv from "./../../img/cv-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function navbar() {
  return (  

<Navbar bg="dark" expand="sm">
      <Container>
      <NavLink className="navbar-brand" to="Porfolio"><span><img className="cv" src={cv} alt="imagen" /> </span></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className="nav-item nav-link" to="Porfolio/Experiencia">Experiencia</NavLink>
          <NavLink className="nav-item nav-link" to="Porfolio/Cursos">Educación</NavLink>
          <NavLink className="nav-item nav-link" to="Porfolio/Tecnologias">Tecnologias</NavLink>      
          <NavLink className="nav-item nav-link" to="Porfolio/Proyectos">Proyectos</NavLink>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}



