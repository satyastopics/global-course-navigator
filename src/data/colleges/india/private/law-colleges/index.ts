
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateLawColleges } from './north-india';
import { southIndiaPrivateLawColleges } from './south-india';
import { westIndiaPrivateLawColleges } from './west-india';
import { eastIndiaPrivateLawColleges } from './east-india';

export { 
  northIndiaPrivateLawColleges,
  southIndiaPrivateLawColleges,
  westIndiaPrivateLawColleges,
  eastIndiaPrivateLawColleges
};

export const privateLawColleges: College[] = [
  ...northIndiaPrivateLawColleges,
  ...southIndiaPrivateLawColleges,
  ...westIndiaPrivateLawColleges,
  ...eastIndiaPrivateLawColleges
];
