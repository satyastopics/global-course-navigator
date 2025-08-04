
import { College } from '../../../../types/collegeTypes';
import { allUkColleges } from '../uk';
import { topGermanUniversities } from './germany/top-german-universities';
import { topFrenchUniversities } from './france/top-french-universities';
import { topSwissUniversities } from './switzerland/top-swiss-universities';
import { europeanColleges } from '../../european-colleges';

export { allUkColleges, topGermanUniversities, topFrenchUniversities, topSwissUniversities };

export const allEuropeanColleges: College[] = [
  ...allUkColleges,
  ...topGermanUniversities,
  ...topFrenchUniversities,
  ...topSwissUniversities,
  ...europeanColleges
];

export const europeanCollegesByCountry = {
  'uk': allUkColleges,
  'germany': topGermanUniversities,
  'france': topFrenchUniversities,
  'switzerland': topSwissUniversities,
  'all': allEuropeanColleges
};
