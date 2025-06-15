
import { College } from '../types/collegeTypes';
import { 
  indianColleges, 
  governmentColleges, 
  privateColleges, 
  iitColleges, 
  iimColleges, 
  nitColleges,
  indianCollegesByCategory,
  privateCollegesByType
} from './colleges/india';
import { 
  worldColleges, 
  usColleges, 
  ukColleges, 
  europeanColleges, 
  asianColleges, 
  otherColleges,
  worldCollegesByRegion,
  usCollegesByType,
  ukCollegesByType,
  europeanCollegesByCountry,
  asianCollegesByCountry
} from './colleges/world';

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
  otherColleges,
  
  // Granular category exports
  indianCollegesByCategory,
  privateCollegesByType,
  worldCollegesByRegion,
  usCollegesByType,
  ukCollegesByType,
  europeanCollegesByCountry,
  asianCollegesByCountry
};

// All colleges combined
export const allColleges: College[] = [
  ...indianColleges,
  ...worldColleges
];

// Colleges organized by region for filtering and navigation
export const collegesByRegion = {
  // Indian subdivisions with granular categories
  ...indianCollegesByCategory,
  
  // World subdivisions with granular categories
  ...worldCollegesByRegion,
  
  // Main categories
  'indian': indianColleges,
  'world': worldColleges,
  'all': allColleges
};

// Enhanced statistics for easy access
export const collegeStats = {
  total: allColleges.length,
  indian: indianColleges.length,
  world: worldColleges.length,
  government: governmentColleges.length,
  private: privateColleges.length,
  iits: iitColleges.length,
  iims: iimColleges.length,
  nits: nitColleges.length,
  us: usColleges.length,
  uk: ukColleges.length,
  european: europeanColleges.length,
  asian: asianColleges.length,
  other: otherColleges.length
};

// Helper functions for dynamic data loading (future use)
export const getCollegesByCategory = (category: string): College[] => {
  return collegesByRegion[category as keyof typeof collegesByRegion] || [];
};

export const getAvailableCategories = (): string[] => {
  return Object.keys(collegesByRegion);
};
