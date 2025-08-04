
import { College } from '../../../../types/collegeTypes';
import { beijingUniversities } from './china/beijing';
import { asianColleges } from '../../asian-colleges';

export { beijingUniversities };

export const chinaColleges: College[] = [
  ...beijingUniversities
];

export const allAsianColleges: College[] = [
  ...chinaColleges,
  ...asianColleges
];

export const asianCollegesByCountry = {
  'china': chinaColleges,
  'all': allAsianColleges
};
