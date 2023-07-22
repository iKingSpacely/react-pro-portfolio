import React from 'react'

import { Link } from 'react-router-dom';
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Nav/assets/life.jpg'

function MyNavBar() {
  return (
    <div>
      <Navbar sticky="top" expand="lg" bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo..." style={{ width: '3rem' }} />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavBar;
