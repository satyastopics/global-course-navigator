import { College } from '../../../../types/collegeTypes';
import { topAustralianUniversities } from './australia/top-australian-universities';

export const allOceaniaColleges: College[] = [
  ...topAustralianUniversities
];

export const oceaniaCollegesByCountry = {
  'australia': topAustralianUniversities,
  'all': allOceaniaColleges
};