
import { College } from '../../../../../../types/collegeTypes';
import { mumbaiLawColleges } from './mumbai-law';
import { puneLawColleges } from './pune-law';

export { mumbaiLawColleges, puneLawColleges };

export const westIndiaPrivateLawColleges: College[] = [
  ...mumbaiLawColleges,
  ...puneLawColleges
];
