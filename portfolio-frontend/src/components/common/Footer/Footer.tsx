// src/components/Footer/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container fluid>
        <Row className='justify-content-between align-items-center'>
          <Col xs={4} className='footer-content footer-left'>
            <a
              href='https://github.com/Tbloom9787/portfolio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} /> View Source
            </a>
          </Col>
          <Col xs={4} className='footer-content footer-center text-center'>
            <span>
              <FontAwesomeIcon icon={faCode} /> Built & Designed by Tyler Bloom
            </span>
          </Col>
          <Col xs={4} className='footer-content footer-right text-right'>
            <span>
              <FontAwesomeIcon icon={faBolt} /> Powered by AWS
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
