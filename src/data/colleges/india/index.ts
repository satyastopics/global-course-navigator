
import { College } from '../../../types/collegeTypes';
import { iitColleges } from './government/iits';
import { iimColleges } from './government/iims';
import { nitColleges } from './government/nits';
import { centralUniversities } from './government/central-universities';
import { stateUniversities } from './government/state-universities';
import { deemedUniversities } from './private/deemed-universities';

// Export individual collections for easy access
export { iitColleges, iimColleges, nitColleges, centralUniversities, stateUniversities, deemedUniversities };

// Combined government colleges
export const governmentColleges: College[] = [
  ...iitColleges,
  ...iimColleges,
  ...nitColleges,
  ...centralUniversities,
  ...stateUniversities
];

// Combined private colleges
export const privateColleges: College[] = [
  ...deemedUniversities
  // Add more private college categories here as they grow
];

// All Indian colleges
export const indianColleges: College[] = [
  ...governmentColleges,
  ...privateColleges
];
