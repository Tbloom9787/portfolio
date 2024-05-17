import logo from '../../../../assets/logos/my-logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} className='hexagon' alt='Logo' />
    </div>
  );
};

export default Logo;
