
import { College } from '../../../types/collegeTypes';
import { beijingUniversities } from './china/beijing';

export { beijingUniversities };

export const chinaColleges: College[] = [
  ...beijingUniversities
];

export const allAsianColleges: College[] = [
  ...chinaColleges
];

export const asianCollegesByCountry = {
  'china': chinaColleges,
  'all': allAsianColleges
};
