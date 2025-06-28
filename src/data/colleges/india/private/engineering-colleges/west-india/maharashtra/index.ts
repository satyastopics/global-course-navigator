
import { College } from '../../../../../../../types/collegeTypes';
import { mumbaiPrivateEngineering } from './mumbai-engineering';
import { punePrivateEngineering } from './pune-engineering';
import { nagpurPrivateEngineering } from './nagpur-engineering';

export { mumbaiPrivateEngineering, punePrivateEngineering, nagpurPrivateEngineering };

export const maharashtraEngineering: College[] = [
  ...mumbaiPrivateEngineering,
  ...punePrivateEngineering,
  ...nagpurPrivateEngineering
];
