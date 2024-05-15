import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  ProgressBar as RBProgressBar,
  Tooltip,
  OverlayTrigger,
  Badge,
} from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';
import profilePic from '../../assets/images/me.jpg';
import iconMapping from './iconMapping';
import './About.css';

interface Skill {
  name: string;
  experience: number;
  icon: string;
}

interface Profile {
  introduction: string;
  bio: string;
  extraBio: string;
  coreSkills: Skill[];
  otherSkills: string[];
}

interface ProgressBarProps {
  experience: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ experience }) => (
  <RBProgressBar className='segmented-progress-bar'>
    {[...Array(5)].map((_, i) => (
      <RBProgressBar
        key={i}
        now={1}
        max={1}
        className={i < experience ? 'custom-filled' : 'custom-empty'}
      />
    ))}
  </RBProgressBar>
);

const About: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${apiUrl}/profile`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.body);
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  const renderTooltip = (experience: number) => (
    <Tooltip id={`tooltip-${experience}`}>
      {experience === 1
        ? `${experience} year of experience`
        : `${experience} years of experience`}
    </Tooltip>
  );

  return (
    <Container
      id='about'
      fluid
      className='about-section min-vh-100 d-flex flex-column justify-content-center align-items-center'
      ref={ref}
    >
      <Row>
        <Col xs={12}>
          <motion.h1
            className='about-header'
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={2} className='text-end'>
          <motion.img
            src={profilePic}
            alt='Profile'
            className='img-fluid rounded-circle profile-pic'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1 }}
          />
        </Col>
        <Col md={4} className='profile-col'>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {profile?.introduction || 'Get to know me!'}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {profile?.bio}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {profile?.extraBio}
          </motion.p>
        </Col>
        <Col md={6} className='skills-col'>
          <motion.div
            className='about-skills'
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3>Core Skills</h3>
            <div className='skill-set'>
              {profile?.coreSkills.map((skill, index) => (
                <OverlayTrigger
                  key={index}
                  placement='top'
                  overlay={renderTooltip(skill.experience)}
                >
                  <div className='skill mb-3'>
                    <div className='d-flex align-items-center mb-1'>
                      <FontAwesomeIcon
                        icon={iconMapping[skill.icon] || faJsSquare}
                        size='3x'
                        className='me-2'
                      />
                      <strong>{skill.name}</strong>
                    </div>
                    <ProgressBar experience={skill.experience} />
                  </div>
                </OverlayTrigger>
              ))}
            </div>
          </motion.div>
          <motion.div
            className='other-skills'
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h4>Other Skills</h4>
            {profile?.otherSkills.map((skill, index) => (
              <Badge pill bg='secondary' className='m-1' key={index}>
                {skill}
              </Badge>
            ))}
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
