import React from 'react'

import './style.css'
import Container from 'react-bootstrap/Container';
import { Button, ButtonGroup, Navbar } from 'react-bootstrap';
import logo from '../Nav/assets/life.jpg'

function MyNavBar() {
  return (
    <div>
      <Navbar sticky="top" expand="lg" bg="black" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo..." style={{ width: '4rem' }} />
          </Navbar.Brand>
          <ButtonGroup className="ml-auto">
            <Button href="/About" variant="outline-light">About</Button>
            <Button href="/Projects" variant="outline-light">Projects</Button>
            <Button href="/Contact" variant="outline-light"> Contact</Button>
          </ButtonGroup>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavBar;
