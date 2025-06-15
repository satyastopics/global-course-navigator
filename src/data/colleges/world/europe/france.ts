
import { College } from '../../../../types/collegeTypes';
import { parisUniversities } from './france/paris';

export { parisUniversities };

export const frenchColleges: College[] = [
  ...parisUniversities
];
