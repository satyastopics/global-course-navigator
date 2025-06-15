
import { College } from '../../../../../types/collegeTypes';
import { oxbridgeColleges } from './oxbridge';
import { russellGroupColleges } from '../../uk/russell-group';

export { 
  oxbridgeColleges,
  russellGroupColleges
};

export const allUkColleges: College[] = [
  ...oxbridgeColleges,
  ...russellGroupColleges
];

export const ukCollegesByType = {
  'oxbridge': oxbridgeColleges,
  'russell-group': russellGroupColleges,
  'all': allUkColleges
};
