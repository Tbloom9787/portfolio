import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import imageMapping from './imageMapping';
import './Work.css';

interface Project {
  _id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const Work: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/projects');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Project[] = await response.json();
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
    >
      <Row>
        <Col xs={12}>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row className='justify-content-center mt-4'>
        {projects.map((project) => (
          <Col key={project._id} md={6} lg={4} className='mb-4'>
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Work;
