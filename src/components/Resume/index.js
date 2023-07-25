import React from 'react'

import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Letter from './assets/letter.png'


import Pdf from './adam-colin-resume.pdf'

function Resume() {
  return (

    <div className='container'>
    <Card>
      <Card.Img variant="top" src={Letter} />
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Text>
          Click the below download button to download my resume!
        </Card.Text>
        <Button href={Pdf} download="adam-colin-resume.pdf" variant="dark">Download</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Resume;
