
import { College } from '../../../../../types/collegeTypes';
import { kolkataPrivateEngineering } from './east-india/west-bengal/kolkata-engineering';
import { odishaEngineering } from './east-india/odisha';
import { westBengalEngineering } from './east-india/west-bengal';
import { jharkhandEngineering } from './east-india/jharkhand';

export const eastIndiaPrivateEngineering: College[] = [
  ...kolkataPrivateEngineering,
  ...westBengalEngineering,
  ...odishaEngineering,
  ...jharkhandEngineering
];
