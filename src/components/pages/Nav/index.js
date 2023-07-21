import React from 'react'

import { Link } from 'react-router-dom';
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 function MyNavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">Navbar</Link>
          <Nav className="me-auto">
            <Link className="hello" to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavBar;
