import React from 'react';

import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="left-content">&copy; Adam Colin 2023</div>
        <div className="right-content">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
        </div>
      </div>
    </footer>
  )
}
