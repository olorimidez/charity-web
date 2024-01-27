import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { BsBullseye  } from "react-icons/bs";
// import { GiCancer } from "react-icons/gi";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">
      <BsBullseye />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto gap-2">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#ourwork">Our Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
         
        </Nav>
        <Nav>
        <Button type="submit" variant='warning' className='me-auto text-white rounded-pill px-3 fw-bold'>Donates</Button>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header