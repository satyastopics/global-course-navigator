
import { College } from '../../../../../../types/collegeTypes';
import { delhiBusinessSchools } from './delhi';
import { punjabBusinessSchools } from './punjab';
import { haryanaBusinessSchools } from './haryana';
import { upBusinessSchools } from './uttar-pradesh';

export { delhiBusinessSchools, punjabBusinessSchools, haryanaBusinessSchools, upBusinessSchools };

export const northIndiaPrivateBusinessSchools: College[] = [
  ...delhiBusinessSchools,
  ...punjabBusinessSchools,
  ...haryanaBusinessSchools,
  ...upBusinessSchools
];
