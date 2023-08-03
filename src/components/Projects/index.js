import React from 'react'

import './style.css'

import ImageTemplate from './ImageTemplate';
import Commerce from './assets/e-commerce.png';
import ReadMe from './assets/readme.png';
import Social from './assets/social-api.png';
import Editor from './assets/editor.png';
import PassGen from './assets/pw-generator.png';
import Employee from './assets/employee-tracker.png';
import Budget from './assets/screenshot.png';

import { Container, Row, Col } from 'react-bootstrap';



export default function Projects() {

  return (

    <Container fluid className='foot'>
      <Row className="pads">
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={Budget} alt="" repo='https://dry-citadel-57402-014123fe6f9a.herokuapp.com/' text='FinTrackr'/>
        </Col>
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={Editor} alt="" repo='https://github.com/iKingSpacely/pwa-text-editor' text='PWA Text Editor' />
        </Col>
      </Row>

            <Row className="pads">
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={Commerce} alt="" repo='https://github.com/iKingSpacely/e-commerce-back-end' text='E-Commerce Website Backend Tester'/>
        </Col>
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={ReadMe} alt="" repo='https://github.com/iKingSpacely/generated-readme-file' text='Automated Readme Generator'/>
        </Col>
      </Row>
      
      <Row className="pads">
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={PassGen} alt="" repo='https://github.com/iKingSpacely/challenge-3-pw-generator' text='Password Generator'/>
        </Col>
        <Col xs={12} sm={6}>
          <ImageTemplate 
          src={Employee} alt="" repo='https://github.com/iKingSpacely/employee-tracker' text='SQL Employee Tracker'/>
        </Col>
      </Row>
    </Container>

  )
};