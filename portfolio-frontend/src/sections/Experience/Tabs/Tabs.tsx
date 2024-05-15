import React from 'react';
import { Tab, Nav, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Milestone {
  logo: string;
  company: string;
  companyInitials: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

interface TabsProps {
  milestones: Milestone[];
}

const Tabs: React.FC<TabsProps> = ({ milestones }) => {
  const badgeColors = ['primary', 'secondary', 'success'];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (milestones.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Tab.Container defaultActiveKey={milestones[0].company}>
      <Row className='mb-3' ref={ref}>
        <Col xs={12}>
          <Nav variant='pills' className='tabs flex-row justify-content-center'>
            {milestones.map((milestone, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={milestone.company}>
                  {milestone.company.length > 16
                    ? `${milestone.company.substring(0, 16)}...`
                    : milestone.company}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Tab.Content>
            {milestones.map((milestone, index) => (
              <Tab.Pane
                key={index}
                eventKey={milestone.company}
                className='tab-pane'
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  <h4>
                    {milestone.title} @ {milestone.company}
                  </h4>
                  <p>
                    <strong style={{ color: '#FFFFFF' }}>Period:</strong>{' '}
                    {milestone.period}
                  </p>
                  <p>{milestone.description}</p>
                  <div>
                    {milestone.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        pill
                        bg={badgeColors[techIndex % badgeColors.length]}
                        className='m-1'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Tabs;
