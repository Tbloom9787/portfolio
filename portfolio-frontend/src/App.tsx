import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/common/Navbar/Navbar';
import SocialMediaLinks from './components/common/SocialLinks/SocialMediaLinks';
import LoadingScreen from './components/common/LoadingScreen/LoadingScreen';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';
import useMediaQuery from './utils/useMediaQuery';

const App = () => {
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <main>
            <Home />
            <About />
            <Experience />
            <Work />
            <Contact />
            <div style={{ display: isMobile ? 'none' : 'flex' }}>
              <SocialMediaLinks />
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
