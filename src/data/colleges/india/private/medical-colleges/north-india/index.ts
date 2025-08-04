import { College } from '../../../../../../types/collegeTypes';
import { delhiPrivateMedical } from './delhi-medical';
import { upPrivateMedical } from './up-medical';
import { privateAiimsAffiliated } from './aiims-private';

export { delhiPrivateMedical, upPrivateMedical, privateAiimsAffiliated };

export const northIndiaPrivateMedical: College[] = [
  ...delhiPrivateMedical,
  ...upPrivateMedical,
  ...privateAiimsAffiliated
];