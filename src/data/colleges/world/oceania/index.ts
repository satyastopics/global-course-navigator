import { College } from '../../../../types/collegeTypes';
import { topAustralianUniversities } from './australia/top-australian-universities';
import { topNewZealandUniversities } from './new-zealand/top-newzealand-universities';

export const allOceaniaColleges: College[] = [
  ...topAustralianUniversities,
  ...topNewZealandUniversities
];

export const oceaniaCollegesByCountry = {
  'australia': topAustralianUniversities,
  'new-zealand': topNewZealandUniversities,
  'all': allOceaniaColleges
};