import overairLogo from '../../../assets/logos/overair-logo.jpg';
import csufLogo from '../../../assets/logos/csuf-logo.png';

interface LogoMappings {
  [key: string]: string;
}

const logoMapping: LogoMappings = {
  Overair: overairLogo,
  CSUF: csufLogo,
};

export default logoMapping;
