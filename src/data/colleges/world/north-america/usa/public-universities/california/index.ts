
import { College } from '../../../../../../../types/collegeTypes';
import { ucSystemColleges } from './uc-system';
import { csuSystemColleges } from './csu-system';

export { ucSystemColleges, csuSystemColleges };

export const californiaPublicUniversities: College[] = [
  ...ucSystemColleges,
  ...csuSystemColleges
];
