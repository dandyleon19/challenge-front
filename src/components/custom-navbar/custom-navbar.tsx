import * as React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const CustomNavbar = (): React.ReactElement => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Desafío Técnico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link to={"/"}>Inicio</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to={"/clients"}>Clientes</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
