import { College } from '../../../../../../types/collegeTypes';
import { californiaPublicUniversities } from './california';
import { texasPublicUniversities } from './texas';

export { californiaPublicUniversities, texasPublicUniversities };

export const usPublicUniversities: College[] = [
  ...californiaPublicUniversities,
  ...texasPublicUniversities
];
