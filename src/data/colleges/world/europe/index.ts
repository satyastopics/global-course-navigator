
import { College } from '../../../../types/collegeTypes';
import { allUkColleges } from '../uk';
import { topGermanUniversities } from './germany/top-german-universities';
import { topFrenchUniversities } from './france/top-french-universities';
import { topSwissUniversities } from './switzerland/top-swiss-universities';
import { topDutchUniversities } from './netherlands/top-dutch-universities';
import { topSwedishUniversities } from './sweden/top-swedish-universities';
import { topItalianUniversities } from './italy/top-italian-universities';
import { topSpanishUniversities } from './spain/top-spanish-universities';
import { topNorwegianUniversities } from './norway/top-norwegian-universities';
import { topDanishUniversities } from './denmark/top-danish-universities';
import { topFinnishUniversities } from './finland/top-finnish-universities';

export { 
  allUkColleges, 
  topGermanUniversities, 
  topFrenchUniversities, 
  topSwissUniversities,
  topDutchUniversities,
  topSwedishUniversities,
  topItalianUniversities,
  topSpanishUniversities,
  topNorwegianUniversities,
  topDanishUniversities,
  topFinnishUniversities
};

export const allEuropeanColleges: College[] = [
  ...allUkColleges,
  ...topGermanUniversities,
  ...topFrenchUniversities,
  ...topSwissUniversities,
  ...topDutchUniversities,
  ...topSwedishUniversities,
  ...topItalianUniversities,
  ...topSpanishUniversities,
  ...topNorwegianUniversities,
  ...topDanishUniversities,
  ...topFinnishUniversities
];

export const europeanCollegesByCountry = {
  'uk': allUkColleges,
  'germany': topGermanUniversities,
  'france': topFrenchUniversities,
  'switzerland': topSwissUniversities,
  'netherlands': topDutchUniversities,
  'sweden': topSwedishUniversities,
  'italy': topItalianUniversities,
  'spain': topSpanishUniversities,
  'norway': topNorwegianUniversities,
  'denmark': topDanishUniversities,
  'finland': topFinnishUniversities,
  'all': allEuropeanColleges
};
