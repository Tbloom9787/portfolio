import React from 'react';
import '../assets/styles/About.css';

const About: React.FC = () => {
  return (
    <section id='about' className='about-section'>
      <h2>About Me</h2>
      <p>
        I'm a passionate developer with a knack for building web applications
        that users love. With a keen eye for design and a commitment to writing
        clean, maintainable code, I am on a constant journey to learn and grow
        in the ever-evolving tech landscape.
      </p>
      <p>
        My journey started with a simple "Hello, World!" and has since led me
        through numerous projects, each sharpening my skills and fueling my
        curiosity. When I'm not coding, I'm often found exploring the outdoors
        or tinkering with new tech gadgets.
      </p>
    </section>
  );
};

export default About;
