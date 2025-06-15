
import { College } from '../../../../../types/collegeTypes';
import { kolkataPrivateEngineering } from './west-bengal/kolkata-engineering';
import { odishaEngineering } from './odisha';

export const eastIndiaPrivateEngineering: College[] = [
  ...kolkataPrivateEngineering,
  ...odishaEngineering
];
