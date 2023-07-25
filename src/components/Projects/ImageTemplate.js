import React from 'react'

import Image from 'react-bootstrap/Image'
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImageTemplate ({ src, alt }) {
  const [show, setShow] = useState(false);

  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0)` : `translateY(-50%)`,
  });

  return (
          <div className="icon-color" 
            style={{ position: 'relative' }} // Add position relative to the container
            onMouseEnter={() => setShow(true)} 
            onMouseLeave={() => setShow(false)}
          >
            <Image src={src} alt={alt} fluid style={{width: 'auto', height: '100%'}}/>
            <animated.div
              style={{
                position: 'absolute', // Set position to absolute
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1, // Ensure the overlay is displayed above the image
                ...animation,
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                objectFit: 'cover',
              }}
            >
              <p>Click Icon to View Project Repo</p>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </animated.div>
          </div>
  )
}