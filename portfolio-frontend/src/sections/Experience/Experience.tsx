import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TimelineEntry from './TimelineEntry/TimelineEntry';
import './Experience.css';

interface Milestone {
  logo: string;
  company: string;
  companyInitials: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

const Experience: React.FC = () => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/milestones`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMilestones(data);
      } catch (error) {
        console.error('Error fetching milestones:', error);
      }
    };

    fetchMilestones();
  }, []);

  return (
    <Container id='experience' fluid className='experience-section min-vh-100'>
      <Row className='mt-5'>
        <Col xs={12}>
          <h1 className='text-center'>My Experience</h1>
        </Col>
      </Row>
      <Row className='justify-content-center mt-2'>
        <Col md={12} className='timeline-container'>
          <div className='timeline-line'></div>
          {milestones.map((milestone, index) => (
            <TimelineEntry key={index} milestone={milestone} index={index} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
