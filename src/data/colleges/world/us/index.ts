
import { College } from '../../../../types/collegeTypes';
import { usColleges } from '../../us-colleges';
import { ivyLeagueColleges } from './ivy-league';
import { usPublicUniversities } from './public-universities';
import { usPrivateUniversities } from './private-universities';
import { usLiberalArtsColleges } from './liberal-arts';

// Export individual US college categories
export { 
  ivyLeagueColleges,
  usPublicUniversities,
  usPrivateUniversities,
  usLiberalArtsColleges
};

// For now, use the existing usColleges data while we transition
// In the future, this will be composed from the subcategories above
export const allUsColleges: College[] = [
  ...usColleges,
  ...ivyLeagueColleges,
  ...usPublicUniversities,
  ...usPrivateUniversities,
  ...usLiberalArtsColleges
];

// US colleges organized by type for easy filtering
export const usCollegesByType = {
  'ivy-league': ivyLeagueColleges,
  'public': usPublicUniversities,
  'private': usPrivateUniversities,
  'liberal-arts': usLiberalArtsColleges,
  'all': usColleges // Keep existing data accessible
};
