import React from 'react'

import './style.css'

import ImageTemplate from './ImageTemplate';
import Commerce from './assets/e-commerce.png';
import ReadMe from './assets/readme.png';
import Social from './assets/social-api.png';
import Editor from './assets/editor.png';
import PassGen from './assets/pw-generator.png';
import Employee from './assets/employee-tracker.png';

import { Container, Row, Col } from 'react-bootstrap';



export default function Projects() {

  return (

    <Container fluid className='foot'>
      <Row className="pads">
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={Commerce} alt=""/>
        </Col>
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={ReadMe} alt=""/>
        </Col>
      </Row>

      <Row className="pads">
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={Social} alt=""/>
        </Col>
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={Editor} alt=""/>
        </Col>
      </Row>

      
      <Row className="pads">
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={PassGen} alt=""/>
        </Col>
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={Employee} alt=""/>
        </Col>
      </Row>
    </Container>

  )
}