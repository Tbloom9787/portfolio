// Import specific icons
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faJsSquare, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

interface IconMappings {
  [key: string]: IconDefinition;
}

const iconMapping: IconMappings = {
  faJsSquare: faJsSquare,
  faReact: faReact,
  faAws: faAws,
  faCode: faCode,
};

export default iconMapping;
