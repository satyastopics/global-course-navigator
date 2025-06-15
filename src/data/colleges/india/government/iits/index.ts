
import { College } from '../../../../../types/collegeTypes';
import { oldIITs } from './old-iits';
import { newIITs } from './new-iits';

export { oldIITs, newIITs };

export const iitColleges: College[] = [
  ...oldIITs,
  ...newIITs
];
