import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      fixed='top'
      className='justify-content-end'
    >
      <Nav className='mr-auto'>
        <Nav.Link href='#about'>About</Nav.Link>
        <Nav.Link href='#experience'>Experience</Nav.Link>
        <Nav.Link href='#work'>Work</Nav.Link>
        <Nav.Link href='#contact'>Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
