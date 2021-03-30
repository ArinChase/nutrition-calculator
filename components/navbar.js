/* Template for Navigation - Arin Chase - 2021 */

/* Imports */
import { Button, Container, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import React, { useState, useEffect, useRef } from 'react'


const NavBar = () => {
  
  /* Set state for height */
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setHeight(elementRef.current.clientHeight); //. Set height to nav height
    window.onscroll = () => {
      if(window.pageYOffset > height) { // if you scroll past nav height
        document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-light ac-super-light ac-bg fixed-top"; // Chage nav style
      }
      else { document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-dark ac-bg fixed-top" }
    }
  })

    return (
    <div>
      <Navbar expand="lg" variant="dark" fixed="top" ref={elementRef} id="navbar" className="ac-bg">
  
          <Navbar.Brand href="#home" className="pl-4">Arin Chase</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-3 mt-1" />
          <Navbar.Collapse id="basic-navbar-nav">  
            <Nav className="ml-auto nav px-4">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
    )
}

export default NavBar