import React from 'react'

import './style.css'

import ImageTemplate from './ImageTemplate';
import Commerce from './assets/e-commerce.png';
import ReadMe from './assets/readme.png';
import Social from './assets/social-api.png';
import Editor from './assets/editor.png';
import PassGen from './assets/pw-generator.png';
import Employee from './assets/employee-tracker.png';

import { Container, Row, Col, Image } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import { useState, useRef } from 'react';


export default function Projects() {
  const [show, setShow] = useState(false);

  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0)` : `translateY(-50%)`,
  });

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <ImageTemplate 
          src={Commerce} alt=""/>
        </Col>
        <Col xs={12} md={6}>
          <ImageTemplate 
          src={ReadMe} alt=""/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <ImageTemplate 
          src={Social} alt=""/>
        </Col>
        <Col xs={12} md={6}>
          <ImageTemplate 
          src={Editor} alt=""/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <ImageTemplate 
          src={PassGen} alt=""/>
        </Col>
        <Col xs={12} md={6}>
          <ImageTemplate 
          src={Employee} alt=""/>
        </Col>
      </Row>
    </Container>
  )
}