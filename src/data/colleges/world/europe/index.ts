
import { College } from '../../../../types/collegeTypes';
import { allUkColleges } from '../uk';

export { allUkColleges };

// For now, UK colleges are our main European colleges
// Additional European countries can be added here
export const allEuropeanColleges: College[] = [
  ...allUkColleges
];

export const europeanCollegesByCountry = {
  'uk': allUkColleges,
  'all': allEuropeanColleges
};
