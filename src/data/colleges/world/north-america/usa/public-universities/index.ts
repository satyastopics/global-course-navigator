
import { College } from '../../../../../../types/collegeTypes';
import { ucSystemUniversities } from './california/uc-system';

export { ucSystemUniversities };

export const usPublicUniversities: College[] = [
  ...ucSystemUniversities
];
