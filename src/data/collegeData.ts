
import { College } from '../types/collegeTypes';
import { usColleges } from './colleges/us-colleges';
import { ukColleges } from './colleges/uk-colleges';
import { europeanColleges } from './colleges/european-colleges';
import { asianColleges } from './colleges/asian-colleges';
import { indianColleges as indianCollegesData } from './colleges/indian-colleges';
import { otherColleges } from './colleges/other-colleges';

// Export individual collections
export const indianColleges = indianCollegesData;
export const worldColleges: College[] = [
  ...usColleges,
  ...ukColleges,
  ...europeanColleges,
  ...asianColleges,
  ...otherColleges
];

export const allColleges: College[] = [
  ...indianColleges,
  ...worldColleges
];

export const collegesByRegion = {
  us: usColleges,
  uk: ukColleges,
  european: europeanColleges,
  asian: asianColleges,
  indian: indianColleges,
  other: otherColleges
};
