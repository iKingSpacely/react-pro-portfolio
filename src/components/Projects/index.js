import React from 'react'

import { Container, Row, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Projects() {
  return (
    <Container>
    <Row>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" fluid />
      </Col>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" fluid />
      </Col>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" fluid />
      </Col>
    </Row>
    <Row>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" fluid />
      </Col>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" fluid />
      </Col>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" fluid />
      </Col>
    </Row>
  </Container>
  )
}
