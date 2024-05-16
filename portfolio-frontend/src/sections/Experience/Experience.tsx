import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TimelineEntry from './TimelineEntry/TimelineEntry';
import Tabs from './Tabs/Tabs';
import useMediaQuery from '../../utils/useMediaQuery';
import './Experience.css';

const Experience = () => {
  const [milestones, setMilestones] = useState([]);
  const isMobile = useMediaQuery('(max-width: 960px)');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchMilestones = async () => {
      try {
        const response = await fetch(`${apiUrl}/milestones`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        const data = JSON.parse(result.body);
        setMilestones(data.reverse());
      } catch (error) {
        console.error('Error fetching milestones:', error);
      }
    };

    fetchMilestones();
  }, []);

  return (
    <Container id='experience' fluid className='experience-section min-vh-100'>
      <Row className='mt-2'>
        <Col xs={12}>
          <h1 className='text-center'>My Experience</h1>
        </Col>
      </Row>
      <Row className='justify-content-center mt-2'>
        <Col
          md={12}
          className={isMobile ? 'tabs-container' : 'timeline-container'}
        >
          {isMobile ? (
            <Tabs milestones={milestones} />
          ) : (
            <>
              <div className='timeline-line'></div>
              {milestones.map((milestone, index) => (
                <TimelineEntry
                  key={index}
                  milestone={milestone}
                  index={index}
                />
              ))}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
