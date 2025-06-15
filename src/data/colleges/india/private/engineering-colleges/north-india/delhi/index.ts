
import { College } from '../../../../../../../types/collegeTypes';
import { delhiPrivateEngineering } from './delhi-engineering';
import { noidaPrivateEngineering } from './noida-engineering';

export { delhiPrivateEngineering, noidaPrivateEngineering };

export const delhiNCREngineering: College[] = [
  ...delhiPrivateEngineering,
  ...noidaPrivateEngineering
];
