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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
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

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/profile`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Profile = await response.json();
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
    >
      <Row>
        <Col xs={12}>
          <h1 className='about-header'>About Me</h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={2} className='text-end'>
          <img
            src={profilePic}
            alt='Profile'
            className='img-fluid rounded-circle profile-pic'
          />
        </Col>
        <Col md={4} style={{ paddingRight: '50px' }}>
          <h3>{profile?.introduction || 'Get to know me!'}</h3>
          <p>{profile?.bio}</p>
        </Col>
        <Col md={6} style={{ paddingLeft: '50px' }}>
          <div className='about-skills'>
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
          </div>
          <div className='other-skills'>
            <h4>Other Skills</h4>
            {profile?.otherSkills.map((skill, index) => (
              <Badge pill bg='secondary' className='m-1' key={index}>
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
