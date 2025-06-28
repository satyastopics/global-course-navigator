
import { College } from '../../../../../../types/collegeTypes';
import { delhiBusinessSchools } from './delhi';
import { punjabBusinessSchools } from './punjab';
import { haryanaBusinessSchools } from './haryana';
import { upBusinessSchools } from './uttar-pradesh';
import { rajasthanBusinessSchools } from './rajasthan';

export { delhiBusinessSchools, punjabBusinessSchools, haryanaBusinessSchools, upBusinessSchools, rajasthanBusinessSchools };

export const northIndiaPrivateBusinessSchools: College[] = [
  ...delhiBusinessSchools,
  ...punjabBusinessSchools,
  ...haryanaBusinessSchools,
  ...upBusinessSchools,
  ...rajasthanBusinessSchools
];
