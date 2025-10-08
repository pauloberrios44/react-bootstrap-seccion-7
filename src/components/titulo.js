import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo_empresa.jpg';

function tituloPrincipal(props) {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} style={{width: '50px'}}></img> RRHH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#link">Quienes somos</Nav.Link>
            <Nav.Link href="#caracteristicas">Caracteristicas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">RRHH</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Remuneraciones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cultura empresarial</NavDropdown.Item>
              <NavDropdown.Item href="#demo">Demo cálculo remuneraciones</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default tituloPrincipal;