import React from 'react';

import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="icon-content">
          <a href="https://www.linkedin.com/in/adam-colin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/iKingSpacely?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.twitch.tv/kingspacely" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
        </div>
      </div>
    </footer>
  )
}
