
import { College } from '../../../../../types/collegeTypes';
import { kolkataPrivateEngineering } from './east-india/west-bengal/kolkata-engineering';
import { odishaEngineering } from './east-india/odisha';

export const eastIndiaPrivateEngineering: College[] = [
  ...kolkataPrivateEngineering,
  ...odishaEngineering
];
