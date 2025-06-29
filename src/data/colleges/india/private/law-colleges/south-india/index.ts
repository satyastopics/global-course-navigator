
import { College } from '../../../../../../types/collegeTypes';
import { bangaloreLawColleges } from './bangalore-law';
import { hyderabadLawColleges } from './hyderabad-law';

export { bangaloreLawColleges, hyderabadLawColleges };

export const southIndiaPrivateLawColleges: College[] = [
  ...bangaloreLawColleges,
  ...hyderabadLawColleges
];
