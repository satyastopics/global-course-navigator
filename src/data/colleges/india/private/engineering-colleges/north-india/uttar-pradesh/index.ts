
import { College } from '../../../../../../../types/collegeTypes';
import { noidaUPPrivateEngineering } from './noida-engineering';
import { lucknowPrivateEngineering } from './lucknow-engineering';

export { noidaUPPrivateEngineering, lucknowPrivateEngineering };

export const uttarPradeshEngineering: College[] = [
  ...noidaUPPrivateEngineering,
  ...lucknowPrivateEngineering
];
