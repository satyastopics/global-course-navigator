
import { College } from '../../../../types/collegeTypes';
import { europeanColleges } from '../../european-colleges';
import { germanColleges } from './germany';
import { frenchColleges } from './france';
import { swissColleges } from './switzerland';

// Export individual European college categories
export { 
  germanColleges,
  frenchColleges,
  swissColleges
};

// For now, use the existing europeanColleges data while we transition
export const allEuropeanColleges: College[] = [
  ...europeanColleges,
  ...germanColleges,
  ...frenchColleges,
  ...swissColleges
];

// European colleges organized by country for easy filtering
export const europeanCollegesByCountry = {
  'germany': germanColleges,
  'france': frenchColleges,
  'switzerland': swissColleges,
  'all': europeanColleges // Keep existing data accessible
};
