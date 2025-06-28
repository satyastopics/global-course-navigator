
import { College } from '../../../../../../types/collegeTypes';
import { bangaloreBusinessSchools } from './bangalore';
import { hyderabadBusinessSchools } from './hyderabad';
import { chennaiBusinessSchools } from './chennai';

export { bangaloreBusinessSchools, hyderabadBusinessSchools, chennaiBusinessSchools };

export const southIndiaPrivateBusinessSchools: College[] = [
  ...bangaloreBusinessSchools,
  ...hyderabadBusinessSchools,
  ...chennaiBusinessSchools
];
