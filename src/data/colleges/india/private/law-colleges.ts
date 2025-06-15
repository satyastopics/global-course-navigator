
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateLawColleges } from './law-colleges/north-india';
import { southIndiaPrivateLawColleges } from './law-colleges/south-india';
import { westIndiaPrivateLawColleges } from './law-colleges/west-india';
import { eastIndiaPrivateLawColleges } from './law-colleges/east-india';

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
