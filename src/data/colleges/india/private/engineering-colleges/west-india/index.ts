
import { College } from '../../../../../../types/collegeTypes';
import { maharashtraEngineering } from './maharashtra';
import { gujaratEngineering } from './gujarat';
import { rajasthanEngineering } from './rajasthan';

export { maharashtraEngineering, gujaratEngineering, rajasthanEngineering };

export const westIndiaPrivateEngineering: College[] = [
  ...maharashtraEngineering,
  ...gujaratEngineering,
  ...rajasthanEngineering
];
