
import { College } from '../../../../types/collegeTypes';
import { munichUniversities } from './germany/munich';
import { berlinUniversities } from './germany/berlin';

export { munichUniversities, berlinUniversities };

export const germanColleges: College[] = [
  ...munichUniversities,
  ...berlinUniversities
];
