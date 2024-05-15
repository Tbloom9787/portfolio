import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Logo from './Logo/Logo';
import './Navbar.css';

const NavigationBar: React.FC = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      fixed='top'
      expand='lg'
      className='custom-navbar'
    >
      <Container fluid>
        <Link
          to='home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='navbar-brand'
        >
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='nav-link'
            >
              About
            </Link>
            <Link
              activeClass='active'
              to='experience'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='nav-link'
            >
              Experience
            </Link>
            <Link
              activeClass='active'
              to='work'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='nav-link'
            >
              Work
            </Link>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='nav-link'
            >
              Contact
            </Link>
            <Button
              href='/assets/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='resume-button'
            >
              Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
