import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SimpleParticles from './SimpleParticles/SimpleParticles';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Home.css';

interface HomeContent {
  greeting: string;
  name: string;
  title: string;
  description: string;
  buttonText: string;
}

const Home: React.FC = () => {
  const [home, setHomeContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchHomeContent = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/home`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: HomeContent = await response.json();
        setHomeContent(data);
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    fetchHomeContent();
  }, []);

  return (
    <motion.section id='home' className='home-section'>
      <SimpleParticles />
      <Container
        fluid
        className='min-vh-100 d-flex flex-column justify-content-center'
      >
        <Row>
          <Col md={10} lg={12} className='intro-text'>
            <p className='intro-greeting'>{home?.greeting}</p>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='intro-name'
            >
              {home?.name}
            </motion.h1>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className='intro-title'
            >
              {home?.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className='intro-description'
            >
              {home?.description}
            </motion.p>
            <Link
              to='work'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className='intro-button'
              >
                {home?.buttonText}
              </motion.button>
            </Link>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Home;
