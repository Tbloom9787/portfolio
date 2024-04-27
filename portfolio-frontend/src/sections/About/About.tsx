import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className='about-section text-center'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4'>
            <img
              src='/assets/images/me.jpg'
              alt='Profile'
              className='img-fluid rounded-circle mb-3 w-75'
            />
          </div>
          <div className='col-md-8'>
            <h1>About Me</h1>
            <p>
              I'm a passionate developer with a knack for building web
              applications that users love. With a keen eye for design and a
              commitment to writing clean, maintainable code, I am on a constant
              journey to learn and grow in the ever-evolving tech landscape.
            </p>
            <p>
              My journey started with a simple "Hello, World!" and has since led
              me through numerous projects, each sharpening my skills and
              fueling my curiosity. When I'm not coding, I'm often found
              exploring the outdoors or tinkering with new tech gadgets.
            </p>
            <div className='skills'>
              <span className='badge bg-primary m-1'>JavaScript</span>
              <span className='badge bg-secondary m-1'>React</span>
              <span className='badge bg-success m-1'>Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
