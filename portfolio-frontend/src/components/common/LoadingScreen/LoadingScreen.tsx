import logo from '../../../assets/logos/my-logo.svg';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className='loading-screen'>
      <img src={logo} className='loading-logo' alt='Loading' />
    </div>
  );
};

export default LoadingScreen;
