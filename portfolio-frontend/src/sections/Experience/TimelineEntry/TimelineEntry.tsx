import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Badge, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logoMapping from './logoMapping';

interface Milestone {
  logo: string;
  company: string;
  companyInitials: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

interface TimelineEntryProps {
  milestone: Milestone;
  index: number;
}

const variants = {
  visible: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: index === 0 ? 70 : 80,
      damping: index === 0 ? 12 : 14,
      mass: 1.2,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  }),
  hidden: (index: number) => ({
    x: index % 2 === 0 ? -100 : 100,
    opacity: 0,
  }),
};

const MotionCard = motion(Card);

const TimelineEntry: React.FC<TimelineEntryProps> = ({ milestone, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const side = index % 2 === 0 ? 'left' : 'right';
  const badgeColors = ['primary', 'secondary', 'success'];

  return (
    <motion.div
      ref={ref}
      className={`timeline-entry ${side} ${inView ? 'visible' : ''}`}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      variants={variants}
    >
      <div className={`timeline-circle ${side}`}>
        {milestone.logo ? (
          <img
            src={logoMapping[milestone.logo]}
            alt={`${milestone.company} Logo`}
            className='company-logo'
          />
        ) : (
          <span className='company-initials'>{milestone.companyInitials}</span>
        )}
      </div>
      <div className={`timeline-connector ${side}`}></div>
      <MotionCard style={{ zIndex: 4 }} layout>
        <Card.Header>
          <span>
            {milestone.title} @ {milestone.company}
          </span>
          <div className='text-muted' style={{ fontSize: '0.8rem' }}>
            {milestone.period}
          </div>
        </Card.Header>
        <Card.Body>
          <p>
            {isExpanded
              ? milestone.description
              : `${milestone.description.substring(0, 100)}...`}
            <FontAwesomeIcon
              icon={isExpanded ? faChevronUp : faChevronDown}
              onClick={toggleDescription}
              className='expand-icon'
              style={{ cursor: 'pointer' }}
            />
          </p>
        </Card.Body>
        <Card.Footer className='text-muted'>
          Technologies used:
          {milestone.technologies.map((tech, index) => (
            <Badge
              key={tech}
              pill
              bg={badgeColors[index % badgeColors.length]}
              className='m-1'
            >
              {tech}
            </Badge>
          ))}
        </Card.Footer>
      </MotionCard>
    </motion.div>
  );
};

export default TimelineEntry;
