
import { College } from '../../../../../types/collegeTypes';
import { mumbaiPrivateEngineering } from './maharashtra/mumbai-engineering';
import { gujaratEngineering } from './gujarat';

export const westIndiaPrivateEngineering: College[] = [
  ...mumbaiPrivateEngineering,
  ...gujaratEngineering
];
