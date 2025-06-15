
import { College } from '../../../../types/collegeTypes';
import { ukColleges } from '../../uk-colleges';
import { oxbridgeColleges } from './oxford-cambridge';
import { russellGroupColleges } from './russell-group';

// Export individual UK college categories
export { 
  oxbridgeColleges,
  russellGroupColleges
};

// For now, use the existing ukColleges data while we transition
export const allUkColleges: College[] = [
  ...ukColleges,
  ...oxbridgeColleges,
  ...russellGroupColleges
];

// UK colleges organized by type for easy filtering
export const ukCollegesByType = {
  'oxbridge': oxbridgeColleges,
  'russell-group': russellGroupColleges,
  'all': ukColleges // Keep existing data accessible
};
