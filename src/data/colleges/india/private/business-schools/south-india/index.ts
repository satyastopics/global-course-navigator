
import { College } from '../../../../../../types/collegeTypes';
import { bangaloreBusinessSchools } from './bangalore';
import { hyderabadBusinessSchools } from './hyderabad';
import { chennaiBusinessSchools } from './chennai';
import { keralaBusinessSchools } from './kerala';

export { bangaloreBusinessSchools, hyderabadBusinessSchools, chennaiBusinessSchools, keralaBusinessSchools };

export const southIndiaPrivateBusinessSchools: College[] = [
  ...bangaloreBusinessSchools,
  ...hyderabadBusinessSchools,
  ...chennaiBusinessSchools,
  ...keralaBusinessSchools
];
