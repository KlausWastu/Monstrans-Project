import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mostrans</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item>
                {" "}
                <Link to="/">Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/location">Location</Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/"></Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/location">Location</Link>
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
