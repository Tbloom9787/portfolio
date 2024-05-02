import React from 'react';
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Tooltip,
  OverlayTrigger,
  Badge,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { icon: faJsSquare, name: 'JavaScript', experience: 4, proficiency: 90 },
    {
      icon: faReact,
      name: 'React & MERN Stack',
      experience: 3,
      proficiency: 85,
    },
    { icon: faDatabase, name: '.NET & MSSQL', experience: 3, proficiency: 80 },
    { icon: faAws, name: 'AWS & DevOps', experience: 2, proficiency: 75 },
  ];

  const otherSkills = [
    'Python',
    'GraphQL',
    'Docker',
    'Serverless Frameworks',
    'TypeScript',
    'MongoDB',
  ];

  const renderTooltip = (experience: number) => (
    <Tooltip id={`tooltip-${experience}`}>
      Years of Experience: {experience}
    </Tooltip>
  );

  return (
    <Container
      id='about'
      fluid
      className='about-section min-vh-100 d-flex flex-column justify-content-center align-items-center'
    >
      <Row>
        <Col xs={12}>
          <h1 className='about-header'>About Me</h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={2} className='text-end'>
          <img
            src='/assets/images/me.jpg'
            alt='Tyler Bloom smiling'
            className='img-fluid rounded-circle profile-pic'
          />
        </Col>
        <Col md={4} style={{ paddingRight: '50px' }}>
          <h3>Get to know me!</h3>
          <p>
            Hi, I'm Tyler Bloom, a Full Stack Developer specializing in crafting
            web applications that optimize startup operations. Since launching
            my tech career in 2016, I have continuously honed a robust Full
            Stack skillset, driven by a foundational understanding of data
            structures and algorithms.
          </p>
          <p>
            I thrive on challenges that require both rigorous problem-solving
            and creative innovation. My approach ensures that each project not
            only meets but exceeds expectations, enhancing operational
            efficiencies and advancing team objectives.
          </p>
          <p>
            When I'm not coding, I explore the outdoors or dissect the latest
            tech trends, finding balance and inspiration. This ongoing journey
            fuels my passion for continuous learning and pushing the boundaries
            of what we can achieve in web development.
          </p>
        </Col>
        <Col md={6} style={{ paddingLeft: '50px' }}>
          <div className='about-skills'>
            <h3>Core Skills</h3>
            <div className='skill-set'>
              {skills.map((skill) => (
                <OverlayTrigger
                  key={skill.name}
                  placement='top'
                  overlay={renderTooltip(skill.experience)}
                >
                  <div className='skill'>
                    <FontAwesomeIcon icon={skill.icon} size='3x' />
                    <ProgressBar
                      now={skill.proficiency}
                      label={`${skill.proficiency}%`}
                    />
                  </div>
                </OverlayTrigger>
              ))}
            </div>
          </div>
          <div className='other-skills'>
            <h4>Other Skills</h4>
            {otherSkills.map((skill) => (
              <Badge pill bg='secondary' className='m-1' key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
