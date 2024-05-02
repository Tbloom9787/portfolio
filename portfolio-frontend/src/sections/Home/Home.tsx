import React from 'react';
import { motion } from 'framer-motion';
import SimpleParticles from './SimpleParticles/SimpleParticles';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home: React.FC = () => {
  return (
    <motion.section id='home' className='home-section'>
      <SimpleParticles />
      <Container
        fluid
        className='min-vh-100 d-flex flex-column justify-content-center'
      >
        <Row>
          <Col md={10} lg={12} className='intro-text'>
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
              I craft code that elevates ideas into reality.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className='intro-description'
            >
              I'm a passionate developer with a knack for building web
              applications that users love. With a keen eye for design and a
              commitment to writing clean, maintainable code, I am on a constant
              journey to learn and grow in the ever-evolving tech landscape.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='intro-button'
              transition={{ duration: 0.3 }}
            >
              Check out my work!
            </motion.button>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Home;
