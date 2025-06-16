
import { College } from '../../../../../types/collegeTypes';
import { mumbaiPrivateEngineering } from './west-india/maharashtra/mumbai-engineering';
import { gujaratEngineering } from './west-india/gujarat';

export const westIndiaPrivateEngineering: College[] = [
  ...mumbaiPrivateEngineering,
  ...gujaratEngineering
];
