
import { College } from '../types/collegeTypes';
import { usColleges } from './colleges/us-colleges';
import { ukColleges } from './colleges/uk-colleges';
import { europeanColleges } from './colleges/european-colleges';
import { asianColleges } from './colleges/asian-colleges';
import { indianColleges } from './colleges/indian-colleges';
import { otherColleges } from './colleges/other-colleges';

export const allColleges: College[] = [
  ...usColleges,
  ...ukColleges,
  ...europeanColleges,
  ...asianColleges,
  ...indianColleges,
  ...otherColleges
];

export const collegesByRegion = {
  us: usColleges,
  uk: ukColleges,
  european: europeanColleges,
  asian: asianColleges,
  indian: indianColleges,
  other: otherColleges
};
