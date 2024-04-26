import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Home.css';

const Home: React.FC = () => {
  return (
    <motion.section id='home' className='home-section'>
      <div className='intro-container'>
        <div className='intro-text'>
          <p className='intro-greeting'>Hi, my name is</p>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='intro-name'
          >
            Tyler Bloom.
          </motion.h1>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='intro-title'
          >
            I build things.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='intro-description'
          >
            I am a software engineer...
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='intro-button'
            transition={{ duration: 0.3 }}
          >
            Check out my work!
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
