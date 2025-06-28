
import { College } from '../../../../../../types/collegeTypes';
import { maharashtraBusinessSchools } from './maharashtra';
import { gujaratBusinessSchools } from './gujarat';

export { maharashtraBusinessSchools, gujaratBusinessSchools };

export const westIndiaPrivateBusinessSchools: College[] = [
  ...maharashtraBusinessSchools,
  ...gujaratBusinessSchools
];
