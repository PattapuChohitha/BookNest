import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "Blue" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/' style={{ color: 'white', textDecoration: "none" }}>BOOK NEST</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/login" style={{ padding: "10px", color: "white", textDecoration: "none" }}>User</Link>
            <Link to="/slogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Seller</Link>
            <Link to="/alogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
