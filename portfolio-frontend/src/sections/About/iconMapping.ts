// Import specific icons
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faJsSquare, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

interface IconMappings {
  [key: string]: IconDefinition;
}

const iconMapping: IconMappings = {
  jsSquare: faJsSquare,
  react: faReact,
  aws: faAws,
  database: faDatabase,
};

export default iconMapping;
