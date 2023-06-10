import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComponent = (props) => {

  return (
    <Navbar expand="lg" className='header-text'>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#my">Почему мы</Nav.Link>
            <Nav.Link href="#works">Наши работы</Nav.Link>
            <Nav.Link href="#reviews">Отзывы</Nav.Link>
            <Nav.Link href="#contacts">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
