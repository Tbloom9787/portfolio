import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.css';
import TimelineEntry from './TimelineEntry/TimelineEntry';

interface Milestone {
  logo: string;
  company: string;
  companyInitials: string;
  title: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  const milestones: Milestone[] = [
    {
      logo: '/assets/images/csuf-logo.png',
      company: 'California State University, Fullerton',
      companyInitials: 'CSUF',
      title: 'Bachelor of Science in Computer Science',
      period: 'Graduated May 2021',
      description:
        'Earned a comprehensive education in computer science, focusing on software engineering principles, data structures, algorithms, and full-stack development. Enhanced my practical skills through a series of projects and collaborations, laying a solid foundation for my career in technology.',
    },
    {
      logo: '',
      company: 'Value Financials',
      companyInitials: 'VF',
      title: 'Backend Software Engineer',
      period: 'Nov 2020 - May 2021',
      description:
        'At Value Financials, a FinTech startup, my efforts were directed towards enhancing the development workflow. My initiatives included the implementation of a CI/CD pipeline using AWS, which significantly improved the development process. I utilized Python to create dynamic data visualizations and employed the MERN stack in conjunction with the Serverless framework to develop RESTful APIs. These contributions played a critical role in increasing the agility and efficiency of the development team.',
    },
    {
      logo: '/assets/images/overair-logo.jpg',
      company: 'Overair',
      companyInitials: 'OA',
      title: 'Software Engineer',
      period: 'Aug 2021 - Mar 2024',
      description:
        "During my role at Overair, an eVTOL aerospace startup, I was responsible for the development of internal applications that bolster the capabilities of our teams in Procurement, Shipping & Receiving, and Engineering. My work is focused on designing tools that streamline operations and enhance project management efficiency. Managing the company's Jira system, I ensure that coordination and workflow integration across departments are smooth and effective, thereby supporting the organization's innovative drive.",
    },
  ];

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
