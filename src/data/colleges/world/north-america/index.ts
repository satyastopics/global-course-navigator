
import { College } from '../../../../types/collegeTypes';
import { allUsColleges, usCollegesByType } from './usa';

export { allUsColleges as usColleges, usCollegesByType };

export const northAmericaColleges: College[] = [
  ...allUsColleges
  // Canada colleges can be added here
];
