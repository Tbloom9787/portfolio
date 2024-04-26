import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const SimpleParticles: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id='simpleParticles'
      init={particlesInit}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      options={{
        fullScreen: {
          enable: false,
        },
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            outMode: 'out',
          },
        },
      }}
    />
  );
};

export default SimpleParticles;
