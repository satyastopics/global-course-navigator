
import { College } from '../../../../../../types/collegeTypes';
import { bangaloreBusinessSchools } from './bangalore';
import { hyderabadBusinessSchools } from './hyderabad';
import { chennaiBusinessSchools } from './chennai';
import { keralaBusinessSchools } from './kerala';
import { andhraBusinessSchools } from './andhra-pradesh';

export { bangaloreBusinessSchools, hyderabadBusinessSchools, chennaiBusinessSchools, keralaBusinessSchools, andhraBusinessSchools };

export const southIndiaPrivateBusinessSchools: College[] = [
  ...bangaloreBusinessSchools,
  ...hyderabadBusinessSchools,
  ...chennaiBusinessSchools,
  ...keralaBusinessSchools,
  ...andhraBusinessSchools
];
