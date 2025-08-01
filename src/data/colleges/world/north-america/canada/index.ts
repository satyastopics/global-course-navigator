import { College } from '../../../../../types/collegeTypes';
import { topCanadianUniversities } from './top-canadian-universities';

export { topCanadianUniversities };

export const allCanadianColleges: College[] = [
  ...topCanadianUniversities
];

export const canadianCollegesByType = {
  'research-intensive': topCanadianUniversities,
  'all': allCanadianColleges
};