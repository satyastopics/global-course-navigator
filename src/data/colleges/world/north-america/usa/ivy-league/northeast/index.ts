
import { College } from '../../../../../../../types/collegeTypes';
import { harvardUniversity } from './harvard';
import { princetonUniversity } from './princeton';

export { harvardUniversity, princetonUniversity };

export const northeastIvyLeague: College[] = [
  ...harvardUniversity,
  ...princetonUniversity
];
