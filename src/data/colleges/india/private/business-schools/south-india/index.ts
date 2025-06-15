
import { College } from '../../../../../../types/collegeTypes';
import { bangaloreBusinessSchools } from './bangalore';
import { hyderabadBusinessSchools } from './hyderabad';

export { bangaloreBusinessSchools, hyderabadBusinessSchools };

export const southIndiaPrivateBusinessSchools: College[] = [
  ...bangaloreBusinessSchools,
  ...hyderabadBusinessSchools
];
