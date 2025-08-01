
import { College } from '../../../types/collegeTypes';
import { allNorthAmericaColleges, allUsColleges, usCollegesByType, topCanadianUniversities } from './north-america/usa';
import { allUkColleges, ukCollegesByType } from './uk';
import { allEuropeanColleges, europeanCollegesByCountry } from './europe';
import { allAsianColleges, asianCollegesByCountry } from './asia';
import { allOceaniaColleges, oceaniaCollegesByCountry } from './oceania';
import { otherColleges } from '../other-colleges';

// Export individual collections for easy access
export { 
  allUsColleges as usColleges,
  allUkColleges as ukColleges,
  allEuropeanColleges as europeanColleges,
  allAsianColleges as asianColleges,
  topCanadianUniversities as canadianColleges,
  otherColleges,
  usCollegesByType,
  ukCollegesByType,
  europeanCollegesByCountry,
  asianCollegesByCountry,
  oceaniaCollegesByCountry
};

// Organized by region for future expansion
export const northAmericaColleges: College[] = [
  ...allNorthAmericaColleges
];

export const europeColleges: College[] = [
  ...allUkColleges,
  ...allEuropeanColleges
];

export const asiaColleges: College[] = [
  ...allAsianColleges
  // Exclude Indian colleges as they have their own section
];

export const oceaniaColleges: College[] = [
  ...allOceaniaColleges
];

export const otherRegionColleges: College[] = [
  ...otherColleges
];

// All world colleges (excluding India)
export const worldColleges: College[] = [
  ...northAmericaColleges,
  ...europeColleges,
  ...asiaColleges,
  ...oceaniaColleges,
  ...otherRegionColleges
];

// World colleges organized by region and type for advanced filtering
export const worldCollegesByRegion = {
  // Regional categories
  'north-america': northAmericaColleges,
  'europe': europeColleges,
  'asia': asiaColleges,
  'oceania': oceaniaColleges,
  'other': otherRegionColleges,
  
  // Country-specific categories
  'us': allUsColleges,
  'uk': allUkColleges,
  'canada': topCanadianUniversities,
  'australia': allOceaniaColleges,
  'european-continent': allEuropeanColleges,
  'asian-continent': allAsianColleges,
  
  // Type-specific categories for major regions
  ...usCollegesByType,
  ...ukCollegesByType,
  ...europeanCollegesByCountry,
  ...asianCollegesByCountry,
  ...oceaniaCollegesByCountry,
  
  // Main category
  'all': worldColleges
};
