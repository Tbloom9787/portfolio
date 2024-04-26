import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/common/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Work from './sections/Work';
import Contact from './sections/Contact';
import './assets/styles/App.css';

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
      </main>
    </div>
  );
};

export default App;
