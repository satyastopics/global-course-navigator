
import { College } from '../../../../../../../types/collegeTypes';
import { mumbaiPrivateEngineering } from './mumbai-engineering';
import { punePrivateEngineering } from './pune-engineering';

export { mumbaiPrivateEngineering, punePrivateEngineering };

export const maharashtraEngineering: College[] = [
  ...mumbaiPrivateEngineering,
  ...punePrivateEngineering
];
