import React, { useState } from 'react'
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

export default function Contact() {

  const [validationError, setValidationError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setValidationError('');
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setValidationError('');
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setValidationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = name.length >=8;
    const isEmailValid = validateEmail(email);
    const isMessageValid = message.length < 10;


    if (!isNameValid) {
      setValidationError('Need to have at least 8 characters minimum!')
    } else if (!isEmailValid) {
      setValidationError('Need a valid email address!')
    } else if (!isMessageValid) {
      setValidationError('Need to have at least 10 characters minimum!')
    } else {
      alert('Thank you for the message! I will be in touch soon!');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const validateEmail = (email) => {
    const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexPattern.test(email);
  };


  return (

    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>What's Your Name?</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="first & last name"
              value={name}
              onChange={handleNameChange}
              isValid={name.length >= 8}
              isInvalid={validationError !== '' && name.length < 8}/>
              <Form.Control.Feedback type='invalid'>
                {validationError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
              type="email" 
              placeholder="name@email.com"
              value={email}
              onChange={handleEmailChange}
              isValid={validateEmail(email)}
              isInvalid={validationError !== '' && !validateEmail(email)}/>
              <Form.Control.Feedback type='invalid'>
                {validationError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Write Me a Message!</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3}
              value={message}
              onChange={handleMessageChange}
              isValid={message.length >= 10}
              isInvalid={validationError !== '' && message.length < 10}/>
              <Form.Control.Feedback type='invalid'>
                {validationError}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type='submit'>Send</Button>

          </Form>
        </Col>
      </Row>
    </Container>







  )
}
