
import { College } from '../types/collegeTypes';
import { indianColleges, governmentColleges, privateColleges, iitColleges, iimColleges, nitColleges } from './colleges/india';
import { worldColleges, usColleges, ukColleges, europeanColleges, asianColleges, otherColleges } from './colleges/world';

// Export individual collections for easy access
export { 
  // Indian colleges
  indianColleges,
  governmentColleges,
  privateColleges,
  iitColleges,
  iimColleges,
  nitColleges,
  
  // World colleges
  worldColleges,
  usColleges,
  ukColleges,
  europeanColleges,
  asianColleges,
  otherColleges
};

// All colleges combined
export const allColleges: College[] = [
  ...indianColleges,
  ...worldColleges
];

// Colleges organized by region for filtering and navigation
export const collegesByRegion = {
  // Indian subdivisions
  'indian-government': governmentColleges,
  'indian-private': privateColleges,
  'indian-iits': iitColleges,
  'indian-iims': iimColleges,
  'indian-nits': nitColleges,
  
  // World subdivisions
  'us': usColleges,
  'uk': ukColleges,
  'european': europeanColleges,
  'asian': asianColleges,
  'other': otherColleges,
  
  // Main categories
  'indian': indianColleges,
  'world': worldColleges
};

// Statistics for easy access
export const collegeStats = {
  total: allColleges.length,
  indian: indianColleges.length,
  world: worldColleges.length,
  government: governmentColleges.length,
  private: privateColleges.length,
  iits: iitColleges.length,
  iims: iimColleges.length,
  nits: nitColleges.length
};
