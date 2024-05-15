import React from 'react';
import logo from '../../../../assets/logos/my-logo.svg';
import './Logo.css';

const Logo: React.FC = () => {
  return (
    <div className='logo-container'>
      <img src={logo} className='hexagon' alt='Logo' />
    </div>
  );
};

export default Logo;
