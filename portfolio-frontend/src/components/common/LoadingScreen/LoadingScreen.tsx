import React from 'react';
import logo from '../../../assets/logos/my-logo.svg';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className='loading-screen'>
      <img src={logo} className='loading-logo' alt='Loading' />
    </div>
  );
};

export default LoadingScreen;
