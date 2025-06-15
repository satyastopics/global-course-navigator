
import { College } from '../../../types/collegeTypes';
import { allUsColleges, usCollegesByType } from './us';
import { allUkColleges, ukCollegesByType } from './uk';
import { allEuropeanColleges, europeanCollegesByCountry } from './europe';
import { allAsianColleges, asianCollegesByCountry } from './asia';
import { otherColleges } from '../other-colleges';

// Export individual collections for easy access
export { 
  allUsColleges as usColleges,
  allUkColleges as ukColleges,
  allEuropeanColleges as europeanColleges,
  allAsianColleges as asianColleges,
  otherColleges,
  usCollegesByType,
  ukCollegesByType,
  europeanCollegesByCountry,
  asianCollegesByCountry
};

// Organized by region for future expansion
export const northAmericaColleges: College[] = [
  ...allUsColleges
  // Canada colleges can be added here
];

export const europeColleges: College[] = [
  ...allUkColleges,
  ...allEuropeanColleges
];

export const asiaColleges: College[] = [
  ...allAsianColleges
  // Exclude Indian colleges as they have their own section
];

export const otherRegionColleges: College[] = [
  ...otherColleges
];

// All world colleges (excluding India)
export const worldColleges: College[] = [
  ...northAmericaColleges,
  ...europeColleges,
  ...asiaColleges,
  ...otherRegionColleges
];

// World colleges organized by region and type for advanced filtering
export const worldCollegesByRegion = {
  // Regional categories
  'north-america': northAmericaColleges,
  'europe': europeColleges,
  'asia': asiaColleges,
  'other': otherRegionColleges,
  
  // Country-specific categories
  'us': allUsColleges,
  'uk': allUkColleges,
  'european-continent': allEuropeanColleges,
  'asian-continent': allAsianColleges,
  
  // Type-specific categories for major regions
  ...usCollegesByType,
  ...ukCollegesByType,
  ...europeanCollegesByCountry,
  ...asianCollegesByCountry,
  
  // Main category
  'all': worldColleges
};
