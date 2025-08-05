
import { College } from '../../../../../../types/collegeTypes';
import { californiaPublicUniversities } from './california';
import { texasPublicUniversities } from './texas';
import { newYorkPublicUniversities } from './new-york';
import { michiganPublicUniversities } from './michigan';
import { virginiaPublicUniversities } from './virginia';

export { 
  californiaPublicUniversities, 
  texasPublicUniversities,
  newYorkPublicUniversities,
  michiganPublicUniversities,
  virginiaPublicUniversities
};

export const usPublicUniversities: College[] = [
  ...californiaPublicUniversities,
  ...texasPublicUniversities,
  ...newYorkPublicUniversities,
  ...michiganPublicUniversities,
  ...virginiaPublicUniversities
];
