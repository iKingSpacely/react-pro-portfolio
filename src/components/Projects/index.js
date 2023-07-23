import React from 'react'

import { Container, Row, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Projects() {
  return (
    <Container>
    <Row>
      <Col xs={12} md={4}>
        <OverlayTrigger >
        <Image src="./assets/e-commerce.png" alt="" fluid />
        </OverlayTrigger>
      </Col>
      <Col xs={12} md={4}>
      <OverlayTrigger >
        <Image src="./assets/editor.png" alt="" fluid />
        </OverlayTrigger>
      </Col>
      <Col xs={12} md={4}>
      <OverlayTrigger >
        <Image src="./assets/employee-tracker.png" alt="" fluid />
        </OverlayTrigger>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={4}>
      <OverlayTrigger >
        <Image src="./assets/pw-generator.png" alt="" fluid />
        </OverlayTrigger>
      </Col>
      <Col xs={12} md={4}>
      <OverlayTrigger >
        <Image src="./assets/readme.png" alt="" fluid />
        </OverlayTrigger>
      </Col>
      <Col xs={12} md={4}>
      <OverlayTrigger >
        <Image src="./assets/social-api.png" alt="" fluid />
        </OverlayTrigger>
      </Col>
    </Row>
  </Container>
  )
}
