import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/common/Navbar/Navbar';
import SocialMediaLinks from './components/common/SocialLinks/SocialMediaLinks';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
        <SocialMediaLinks />
      </main>
    </div>
  );
};

export default App;
