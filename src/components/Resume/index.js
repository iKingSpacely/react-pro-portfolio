import React from 'react'

import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import Commerce from './sample.pdf'

function Resume() {
  return (

    <div className='container'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Text>
          Click the below download button to download my resume!
        </Card.Text>
        <Button href={Commerce} download="myresume.pdf" variant="dark">Download</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Resume;
