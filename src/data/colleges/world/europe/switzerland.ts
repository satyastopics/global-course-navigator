
import { College } from '../../../../types/collegeTypes';
import { zurichUniversities } from './switzerland/zurich';

export { zurichUniversities };

export const swissColleges: College[] = [
  ...zurichUniversities
];
