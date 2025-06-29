
import { College } from '../../../../../types/collegeTypes';
import { maharashtraMedical } from './west-india/maharashtra';
import { gujaratMedical } from './west-india/gujarat';

export const westIndiaPrivateMedical: College[] = [
  ...maharashtraMedical,
  ...gujaratMedical
];
