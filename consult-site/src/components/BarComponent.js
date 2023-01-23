import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./logo.png";
import { Navbar, Nav, Container} from "react-bootstrap";
export default () => {
    return (
      <Navbar collapseOneSelect expand="md" id="nav" sticky="top">
        <Container id="main-nav">
          <Navbar.Brand href="#home">
              <img
                src={ logo }
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
          </Navbar.Brand>
          <Navbar.Brand href="#home" id="brand">
            El consultorio de jas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="auto">
              <Nav.Link href="#about">Soy un link</Nav.Link>
              <Nav.Link href="#interests">Soy otro link</Nav.Link>
              <Nav.Link href="#personal">yo otro</Nav.Link>
              <Nav.Link href="#education">estamos vacios T.T</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };