import React, { useState } from 'react'
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

export default function Contact() {

  const [validationError, setValidationError] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setValidationError('');
  };

  // const handleEmailChange = (e) => {
  //   const value = e.target.value;
  //   setInputValue(value);
  //   setValidationError('');
  // };

  // const handleMessageChange = (e) => {
  //   const value = e.target.value;
  //   setInputValue(value);
  //   setValidationError('');
  // };






  return (








    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

  )
}
