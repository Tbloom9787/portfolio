import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <div className='experience-section text-center'>
      <div className='container'>
        <h1>My Experience</h1>
        <div className='timeline'>
          <div className='timeline-item'>
            <h4>Software Engineer - Company A</h4>
            <p>Jan 2020 - Present</p>
            <p>
              Developed and maintained code for in-house and client websites
              primarily using HTML, CSS, Sass, JavaScript, and jQuery.
            </p>
          </div>
          <div className='timeline-item'>
            <h4>Junior Developer - Company B</h4>
            <p>May 2018 - Dec 2019</p>
            <p>
              Assisted in the development of web applications and software
              products, including coding, debugging, testing, and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
