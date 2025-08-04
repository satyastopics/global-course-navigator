
import { College } from '../../../../types/collegeTypes';
import { allUkColleges } from '../uk';
import { europeanColleges } from '../../european-colleges';

export { allUkColleges };

// For now, UK colleges are our main European colleges
// Additional European countries can be added here
export const allEuropeanColleges: College[] = [
  ...allUkColleges,
  ...europeanColleges
];

export const europeanCollegesByCountry = {
  'uk': allUkColleges,
  'all': allEuropeanColleges
};
