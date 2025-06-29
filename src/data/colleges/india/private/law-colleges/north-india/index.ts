
import { College } from '../../../../../../types/collegeTypes';
import { delhiPrivateLawColleges } from './delhi-law';
import { upPrivateLawColleges } from './up-law';

export { delhiPrivateLawColleges, upPrivateLawColleges };

export const northIndiaPrivateLawColleges: College[] = [
  ...delhiPrivateLawColleges,
  ...upPrivateLawColleges
];
