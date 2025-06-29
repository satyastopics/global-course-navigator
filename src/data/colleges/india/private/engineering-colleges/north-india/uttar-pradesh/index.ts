
import { College } from '../../../../../../../types/collegeTypes';
import { noidaUPPrivateEngineering } from './noida-engineering';
import { lucknowPrivateEngineering } from './lucknow-engineering';
import { greaterNoidaPrivateEngineering } from './greater-noida-engineering';

export { noidaUPPrivateEngineering, lucknowPrivateEngineering, greaterNoidaPrivateEngineering };

export const uttarPradeshEngineering: College[] = [
  ...noidaUPPrivateEngineering,
  ...lucknowPrivateEngineering,
  ...greaterNoidaPrivateEngineering
];
