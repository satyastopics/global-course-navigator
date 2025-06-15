
import { College } from '../../../../../types/collegeTypes';
import { topNITs } from './top-nits';
import { otherNITs } from './other-nits';

export { topNITs, otherNITs };

export const nitColleges: College[] = [
  ...topNITs,
  ...otherNITs
];
