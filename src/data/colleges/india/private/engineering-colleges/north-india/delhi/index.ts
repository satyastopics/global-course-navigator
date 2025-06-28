
import { College } from '../../../../../../../types/collegeTypes';
import { delhiPrivateEngineering } from './delhi-engineering';
import { noidaPrivateEngineering } from './noida-engineering';
import { gurgaonPrivateEngineering } from './gurgaon-engineering';

export { delhiPrivateEngineering, noidaPrivateEngineering, gurgaonPrivateEngineering };

export const delhiNCREngineering: College[] = [
  ...delhiPrivateEngineering,
  ...noidaPrivateEngineering,
  ...gurgaonPrivateEngineering
];
