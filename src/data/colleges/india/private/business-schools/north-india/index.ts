
import { College } from '../../../../../../types/collegeTypes';
import { delhiBusinessSchools } from './delhi';
import { punjabBusinessSchools } from './punjab';
import { haryanaBusinessSchools } from './haryana';
import { upBusinessSchools } from './uttar-pradesh';
import { rajasthanBusinessSchools } from './rajasthan';
import { madhyaPradeshBusinessSchools } from './madhya-pradesh';

export { delhiBusinessSchools, punjabBusinessSchools, haryanaBusinessSchools, upBusinessSchools, rajasthanBusinessSchools, madhyaPradeshBusinessSchools };

export const northIndiaPrivateBusinessSchools: College[] = [
  ...delhiBusinessSchools,
  ...punjabBusinessSchools,
  ...haryanaBusinessSchools,
  ...upBusinessSchools,
  ...rajasthanBusinessSchools,
  ...madhyaPradeshBusinessSchools
];
