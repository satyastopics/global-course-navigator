
import { College } from '../../../../../../types/collegeTypes';
import { westBengalMedical } from './west-bengal';
import { odishaMedical } from './odisha';

export { westBengalMedical, odishaMedical };

export const eastIndiaPrivateMedical: College[] = [
  ...westBengalMedical,
  ...odishaMedical
];
