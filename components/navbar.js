import { Button, Container, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

import React, { useState, useEffect, useRef } from 'react'


const NavBar = () => {

  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setHeight(elementRef.current.clientHeight);
    window.onscroll = () => {
      if(window.pageYOffset > height) {
        document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-light ac-super-light ac-bg fixed-top"
      }
      else { document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-dark ac-bg fixed-top" }
    }
  })

    return (
    <div>
      <Navbar expand="lg" variant="dark" fixed="top" ref={elementRef} id="navbar" className="ac-bg">
        <Container fluid>
          <Navbar.Brand href="#home">Arin Chase</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    )
}

export default NavBar