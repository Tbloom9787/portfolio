import React from 'react';
import './SocialMediaLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, // Import the envelope icon for email
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks: React.FC = () => {
  return (
    <div className='links-container'>
      <a
        href='https://www.linkedin.com/in/bloom-dev'
        target='_blank'
        rel='noopener noreferrer'
        className='link'
        aria-label='LinkedIn'
      >
        <FontAwesomeIcon icon={faLinkedinIn} className='link-icon' />
      </a>
      <a
        href='mailto:tylerbloom9787@gmail.com'
        className='link'
        aria-label='Email'
      >
        <FontAwesomeIcon icon={faEnvelope} className='link-icon' />
      </a>
      <a
        href='https://instagram.com/tbloom._'
        target='_blank'
        rel='noopener noreferrer'
        className='link'
        aria-label='Instagram'
      >
        <FontAwesomeIcon icon={faInstagram} className='link-icon' />
      </a>
      <a
        href='https://github.com/Tbloom9787'
        target='_blank'
        rel='noopener noreferrer'
        className='link'
        aria-label='GitHub'
      >
        <FontAwesomeIcon icon={faGithub} className='link-icon' />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
