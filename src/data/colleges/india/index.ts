
import { College } from '../../../types/collegeTypes';
import { iitColleges } from './government/iits';
import { iimColleges } from './government/iims';
import { nitColleges } from './government/nits';
import { centralUniversities } from './government/central-universities';
import { stateUniversities } from './government/state-universities';
import { privateColleges, privateCollegesByType } from './private';

// Export individual collections for easy access
export { 
  iitColleges, 
  iimColleges, 
  nitColleges, 
  centralUniversities, 
  stateUniversities, 
  privateColleges,
  privateCollegesByType
};

// Combined government colleges
export const governmentColleges: College[] = [
  ...iitColleges,
  ...iimColleges,
  ...nitColleges,
  ...centralUniversities,
  ...stateUniversities
];

// All Indian colleges
export const indianColleges: College[] = [
  ...governmentColleges,
  ...privateColleges
];

// Indian colleges organized by category for advanced filtering
export const indianCollegesByCategory = {
  // Government categories
  'government-iits': iitColleges,
  'government-iims': iimColleges,
  'government-nits': nitColleges,
  'government-central': centralUniversities,
  'government-state': stateUniversities,
  'government-all': governmentColleges,
  
  // Private categories (from private/index.ts)
  ...privateCollegesByType,
  'private-all': privateColleges,
  
  // Main categories
  'all': indianColleges
};
