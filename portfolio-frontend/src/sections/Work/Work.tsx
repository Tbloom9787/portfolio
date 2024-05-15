import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imageMapping from './imageMapping';
import './Work.css';

interface Project {
  _id?: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const Work: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${apiUrl}/projects`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.body);
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container
      id='work'
      fluid
      className='work-section min-vh-100 d-flex flex-column justify-content-center align-items-center text-center'
      ref={ref}
    >
      <Row>
        <Col xs={12}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            Projects
          </motion.h1>
        </Col>
      </Row>
      <Row className='justify-content-center mt-4'>
        {projects.map((project, index) => (
          <Col key={index} md={6} lg={4} className='mb-4'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card>
                <Card.Img
                  variant='top'
                  src={imageMapping[project.image]}
                  alt={`${project.name} UI`}
                  loading='lazy'
                />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant='primary'
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Work;
